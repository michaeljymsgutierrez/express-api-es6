// Verify Token

import jwt from "jsonwebtoken";
import ENV from "env";

const VERIFY_TOKEN = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    jwt.verify(authorization, ENV.secret_key, (error, decoded) => {
      if (error) {
        res
          .status(422)
          .json({ success: false, message: "Invalid or Expired token" });
      } else {
        next();
      }
    });
  } else {
    res
      .status(422)
      .json({ success: false, message: "Invalid or Expired token" });
  }
};

export default VERIFY_TOKEN;
