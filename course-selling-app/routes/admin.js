const { Router } = require("library/node_modules/express");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({ message: "signup endpoint" });
});
adminRouter.post("/signin", (req, res) => {
  res.json({ message: "signin endpoint" });
});
adminRouter.post("/course", (req, res) => {
  res.json({ message: "purchase endpoint" });
});
adminRouter.put("/course", (req, res) => {
  res.json({ message: "purchase endpoint" });
});
adminRouter.get("/course/bulk", (req, res) => {
  res.json({ message: "purchase endpoint" });
});
module.exports = {
  adminRouter,
};
