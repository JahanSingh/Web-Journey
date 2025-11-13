const { Router } = require("library/node_modules/express");
const courseRouter = Router();

courseRouter.get("/preview", (req, res) => {
  res.json({ message: "preview endpoint" });
});

courseRouter.post("/purchases", (req, res) => {
  res.json({ message: "purchase endpoint" });
});

module.exports = {
  courseRouter,
};
