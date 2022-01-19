const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized 1", result: null });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.userId = decoded.userId;
    req.position = "User";

    next();
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized 3", result: null });
  }
};

module.exports = verifyToken;
