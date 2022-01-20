const Coach = require("../models/coachs");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

module.exports = {
  verifyCoach: async (req, res, next) => {
    try {
      const coach = await Coach.findById(req.userId).select("-password");
      if (!coach)
        return res
          .status(401)
          .json({ success: false, message: "Unauthorized", result: null });
      req.position = "Coach";
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  verifyCoachMe: async (req, res) => {
    if (!req.position || req.position != "Coach") {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", result: null });
    }
    try {
      const coach = await Coach.findById(req.userId).select("-password");
      if (!coach)
        return res
          .status(401)
          .json({ success: false, message: "Unauthorized", result: null });
      return res.status(200).json({
        success: true,
        message: "API OK",
        result: coach,
      });
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },
  // create new coach if all infos valid, only done by Admins or Sales
  createCoach: async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    const { username, password, name, gender, phone, birthDay, major, image } =
      req.body;

    if (!username || !password || !name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Missing information(s)",
        result: null,
      });
    }

    try {
      // Check for existing coach
      const coach = await Coach.findOne({ username });

      if (coach) {
        return res.status(400).json({
          success: false,
          message: "Coachname is already exist",
          result: null,
        });
      }

      // All good
      const hashedPassword = await argon2.hash(password);
      // const referralCode = referralCodes.generate({
      //   prefix: "GT-",
      //   postfix: "-" + new Date().getFullYear().toString(),
      // })[0];

      const newCoach = new Coach({
        username,
        password: hashedPassword,
        name,
        gender,
        birthDay,
        // paymentDay,
        // referralCode,
        phone,
        major,
        image,
      });
      let err = newCoach.validateSync();
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Invalid Information(s)",
          result: null,
        });
      } else {
        await newCoach.save();

        return res.json({
          success: true,
          message: "API OK",
          result: null,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(510).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // login coach
  login: async (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password)
      return res.status(400).json({
        success: false,
        message: "Missing username and/or password",
        result: null,
      });

    try {
      // Check for existing coach
      const coach = await Coach.findOne({ username });
      if (!coach)
        return res.status(400).json({
          success: false,
          message: "Incorrect username",
          result: null,
        });

      // Coachname found
      const passwordValid = await argon2.verify(coach.password, password);
      if (!passwordValid)
        return res.status(400).json({
          success: false,
          message: "Incorrect username or password",
          result: null,
        });

      // All good
      // Return token
      const accessToken = jwt.sign(
        { userId: coach._id },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({
        success: true,
        message: "API OK",
        result: accessToken,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // get all coachs, only done by Admins or Sales or HR
  getCoachs: async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager" && req.position != "HR")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    try {
      let coachs;
      if (req.query.name) {
        let regex = new RegExp(req.query.name, "i");
        coachs = await Coach.find(
          { name: regex },
          "-gender -password -referralCode -paymentDay -createAt -updateAt -__v -coach"
        );
      } else
        coachs = await Coach.find(
          null,
          "-gender -password -referralCode -paymentDay -createAt -updateAt -__v -coach"
        );
      return res.json({ success: true, message: "API OK", result: coachs });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // get coach by his/her id , only done by Admins or Sales or HR
  getCoachById: async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager" && req.position != "HR")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    const id = req.params.id;
    try {
      const coach = await Coach.findById(id, "-password").exec();
      if (!coach) {
        return res
          .status(404)
          .json({ success: false, message: "Coach not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: coach });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // update an coach's informations by his/her id , only done by Admins or Sales
  updateCoachById: async (req, res) => {
    if (
      !req.position ||
      (req.position != "Administrator" && req.position != "Sales manager")
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", result: null });
    }
    req.body.updateAt = new Date();
    if (req.body.password) {
      req.body.password = await argon2.hash(req.body.password);
    }
    const id = req.params.id;
    try {
      const coach = await Coach.findByIdAndUpdate(id, req.body, { new: true });
      if (!coach) {
        return res
          .status(404)
          .json({ success: false, message: "Coach not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: coach });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // delete an coach's account by his/her id , only done by Admins or Sales
  deleteCoachById: async (req, res) => {
    // if (
    //   !req.position ||
    //   (req.position != "Administrator" && req.position != "Sales manager")
    // ) {
    //   return res
    //     .status(401)
    //     .json({ success: false, message: "Unauthorized", result: null });
    // }
    const id = req.params.id;
    try {
      const coach = await Coach.findByIdAndDelete(id);
      if (!coach) {
        return res
          .status(404)
          .json({ success: false, message: "Coach not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: null });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // change an coach's password, done by his/her-self
  changePassword: async (req, res) => {
    const id = req.params.id;
    if (id != req.userId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", result: null });
    }
    let updateAt = new Date();

    try {
      const oldCoach = await Coach.findById(id, "password").exec();
      const passwordValid = await argon2.verify(
        oldCoach.password,
        req.body.oldPassword
      );
      if (!passwordValid) {
        return res.status(700).json({
          success: false,
          message: "Old password doesn't match",
          result: null,
        });
      }

      // All good
      newPassword = await argon2.hash(req.body.newPassword);
      const coach = await Coach.findByIdAndUpdate(
        id,
        { password: newPassword, updateAt: updateAt },
        { new: true }
      );
      if (!coach) {
        return res
          .status(404)
          .json({ success: false, message: "Coach not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: null });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // update an coach's informations by his/her id , only done by his/her-self
  changeCoachInfos: async (req, res) => {
    if (!req.position || req.position != "Coach") {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", result: null });
    }
    let newInfos = {};
    if (req.body.name) newInfos.name = req.body.name;
    if (req.body.phone) newInfos.phone = req.body.phone;
    if (req.body.gender) newInfos.gender = req.body.gender;
    if (req.body.birthDay) newInfos.birthDay = req.body.birthDay;
    if (req.body.height) newInfos.height = req.body.height;
    if (req.body.weight) newInfos.weight = req.body.weight;
    newInfos.updateAt = new Date();
    const id = req.params.id;
    try {
      const coach = await Coach.findByIdAndUpdate(id, newInfos, { new: true });
      if (!coach) {
        return res
          .status(404)
          .json({ success: false, message: "Coach not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: null });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // get my informations
  getMyInfos: async (req, res) => {
    const id = req.params.id;
    if (!req.position || req.position != "Coach" || id != req.userId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", result: null });
    }

    try {
      const coach = await Coach.findById(id, "-password").exec();
      if (!coach) {
        return res
          .status(404)
          .json({ success: false, message: "Coach not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: coach });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },
};
