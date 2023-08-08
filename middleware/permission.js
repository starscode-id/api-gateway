module.exports = (...roles) => {
  return (req, res, next) => {
    const role = req.body.data.role;
    if (!$roles.includes(role)) {
      return res.status(405).json({
        status: "error",
        message: "you dont have permission",
      });
    }
    return next();
  };
};
