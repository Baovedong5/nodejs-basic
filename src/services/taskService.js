const Task = require("../models/Task");
const aqp = require("api-query-params");

const createTask = async (data) => {
  if (data.type === "EMPTY-TASK") {
    let result = await Task.create(data);
    return result;
  }

  return null;
};

const getTask = async (queryString) => {
  let page = queryString.page;
  const { filter, limit } = aqp(queryString);

  delete filter.page;

  let offset = (page - 1) * limit;

  let result = await Task.find(filter).skip(offset).limit(limit).exec();
  return result;
};

const updateTask = async (data) => {
  let result = await Task.updateOne({ _id: data.id }, { ...data });
  return result;
};

const removeTask = async (data) => {
  let result = await Task.deleteById({ _id: data });
  return result;
};

module.exports = {
  createTask,
  getTask,
  updateTask,
  removeTask,
};
