const E = require("../../constants");
const model = require("./model");

const getTodoList = (req, res) => {};
const getTodoById = (req, res) => {
  if (!req.params.id) {
    return res.status(E.BAD_REQ.CODE).json({ msg: E.BAD_REQ.MSG + " need id" });
  }
};
const createTodo = (req, res) => {
  if (!req.body.title) {
    return res.status(E.BAD_REQ.CODE).json({ msg: E.BAD_REQ.MSG + " title" });
  }
};
const updateTodo = (req, res) => {
  if (!req.params.id && !req.body.id) {
    return res.status(E.BAD_REQ.CODE).json({ msg: E.BAD_REQ.MSG + " need id" });
  }
};
const removeTodo = (req, res) => {
  if (!req.params.id) {
    return res.status(E.BAD_REQ.CODE).json({ msg: E.BAD_REQ.MSG + " need id" });
  }
};

module.exports = {
  getTodoList,
  getTodoById,
  createTodo,
  updateTodo,
  removeTodo,
};
