const argon2 = require("argon2");
const referralCodes = require("referral-codes");
const jwt = require("jsonwebtoken");

const User = require("../models/users");

module.exports = {
  // verify user
  verify: async (req, res) => {
    try {
      const user = await User.findById(req.userId).select("-password");
      if (!user)
        return res
          .status(401)
          .json({ success: false, message: "Unauthorized", result: null });

      res.json({ success: true, message: "API OK", result: user });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // create new user if all infos valid, only done by Admins or Sales
  createUser: async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    const {
      username,
      password,
      name,
      gender,
      paymentDay,
      phone,
      birthDay,
      aim,
      coach,
      assessment,
      height,
      weight,
    } = req.body;

    if (!username || !password || !name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Missing information(s)",
        result: null,
      });
    }

    try {
      // Check for existing user
      const user = await User.findOne({ username });

      if (user) {
        return res.status(400).json({
          success: false,
          message: "Username is already exist",
          result: null,
        });
      }

      // All good
      const hashedPassword = await argon2.hash(password);
      const referralCode = referralCodes.generate({
        prefix: "GT-",
        postfix: "-" + new Date().getFullYear().toString(),
      })[0];

      const newUser = new User({
        username,
        password: hashedPassword,
        name,
        gender,
        birthDay,
        paymentDay,
        referralCode,
        phone,
        aim,
        coach,
        assessment,
        height,
        weight,
      });
      let err = newUser.validateSync();
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Invalid Information(s)",
          result: null,
        });
      } else {
        await newUser.save();

        return res.json({
          success: true,
          message: "API OK",
          result: null,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // login user
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
      // Check for existing user
      const user = await User.findOne({ username });
      if (!user)
        return res.status(400).json({
          success: false,
          message: "Incorrect username",
          result: null,
        });

      // Username found
      const passwordValid = await argon2.verify(user.password, password);
      if (!passwordValid)
        return res.status(400).json({
          success: false,
          message: "Incorrect username or password",
          result: null,
        });

      const accessToken = jwt.sign(
        { userId: user._id },
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

  // get all users, only done by Admins or Sales or HR
  getUsers: async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager" && req.position != "HR")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    try {
      let users;
      if (req.query.name) {
        let regex = new RegExp(req.query.name, "i");
        users = await User.find(
          { name: regex }
          // "-gender -password -referralCode -paymentDay -createAt -updateAt -__v -coach"
        );
      } else
        users = await User.find(
          null
          // "-gender -password -referralCode -paymentDay -createAt -updateAt -__v -coach"
        );
      return res.json({ success: true, message: "API OK", result: users });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // get user by his/her id , only done by Admins or Sales or HR
  getUserById: async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager" && req.position != "HR")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    const id = req.params.id;
    try {
      const user = await User.findById(id, "-password").exec();
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: user });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // update an user's informations by his/her id , only done by Admins or Sales
  updateUserById: async (req, res) => {
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
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: user });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },

  // delete an user's account by his/her id , only done by Admins or Sales
  deleteUserById: async (req, res) => {
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
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found", result: null });
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

  // change an user's password, done by his/her-self
  changePassword: async (req, res) => {
    const id = req.params.id;
    if (id != req.userId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", result: null });
    }
    let updateAt = new Date();

    try {
      const oldUser = await User.findById(id, "password").exec();
      const passwordValid = await argon2.verify(
        oldUser.password,
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
      const user = await User.findByIdAndUpdate(
        id,
        { password: newPassword, updateAt: updateAt },
        { new: true }
      );
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found", result: null });
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

  // update an user's Assessment by his/her id , only done by his/her coach
  changeUserAssessment: async (req, res) => {
    // if (!req.position || req.position != "Coach") {
    //   return res
    //     .status(401)
    //     .json({ success: false, message: "Unauthorized", result: null });
    // }
    let updateAt = new Date();
    const id = req.params.id;
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { assessment: req.body.assessment, updateAt: updateAt },
        { new: true }
      );
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found", result: null });
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

  // update an user's informations by his/her id , only done by his/her-self
  changeUserInfos: async (req, res) => {
    if (!req.position || req.position != "User") {
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
      const user = await User.findByIdAndUpdate(id, newInfos, { new: true });
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found", result: null });
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

  // get user by his/her id , only done by his/her coach
  getUsersByCoach: async (req, res) => {
    if (!req.position || req.position != "Coach") {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", result: null });
    }
    try {
      const users = await User.find({ coach: req.userId }, "-password").exec();
      if (!users) {
        return res
          .status(404)
          .json({ success: false, message: "Users not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: users });
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
    if (!req.position || req.position != "User" || id != req.userId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", result: null });
    }

    try {
      const user = await User.findById(id, "-password").exec();
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found", result: null });
      }
      return res.json({ success: true, message: "API OK", result: user });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        result: null,
      });
    }
  },
};
