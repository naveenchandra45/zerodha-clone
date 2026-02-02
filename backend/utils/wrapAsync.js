module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      if (res.headersSent) {
        return console.error("Error after headers sent:", err);
      }
      next(err);
    });
  };
};
