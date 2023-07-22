const {
  createTask,
  getTask,
  updateTask,
  removeTask,
} = require("../services/taskService");

const postCreateTask = async (req, res) => {
  let result = await createTask(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const getAllTask = async (req, res) => {
  let result = await getTask(req.query);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const putUpdateTask = async (req, res) => {
  let result = await updateTask(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const deleteTask = async (req, res) => {
  let result = await removeTask(req.body.id);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

module.exports = {
  postCreateTask,
  getAllTask,
  putUpdateTask,
  deleteTask,
};
