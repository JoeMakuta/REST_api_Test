import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const { TOKEN_SECRET } = process.env;

  try {
    const token = req.headers.authorization.split(" ")[1];
    const payLoad = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("Payload returned : ", payLoad);
    //   req.auth = {
    //     id: payLoad.id,
    //     userEmail: payLoad.userEmail,
    //   };
    next();
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

export default verifyToken;
