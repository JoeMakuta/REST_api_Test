import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const { TOKEN_SECRET } = process.env;
  try {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const payLoad = jwt.verify(token, TOKEN_SECRET);
      next();
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  } catch (error) {
    res.status(401).json({ message: "Access denied! " });
  }
};

export default verifyToken;
