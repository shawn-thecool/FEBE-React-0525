const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getTodoList);
router.get("/:id", controller.getTodoById);
router.post("/", controller.createTodo);
router.put("/:id", controller.updateTodo);
router.delete("/:id", controller.removeTodo);

module.exports = router