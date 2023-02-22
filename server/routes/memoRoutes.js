import express from "express";
export const router = express.Router();

router.get("/", (req, res) => {
  res.send(":GET METHOD FROM ROUTER");
});

// router.post("/:id", (req, res) => {
//   res.json({
//     ID: req.params.id,
//     user: req.body.user,
//   });
// });
