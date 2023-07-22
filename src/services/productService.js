const Project = require("../models/Project");
const aqp = require("api-query-params");

const createProject = async (data) => {
  if (data.type === "EMPTY-PROJECT") {
    let result = await Project.create(data);
    return result;
  }
  if (data.type === "ADD-USER") {
    //find project by id
    let myProject = await Project.findById(data.projectId).exec();

    for (let i = 0; i < data.usersArr.length; i++) {
      myProject.userInfo.push(data.usersArr[i]);
    }

    let newresult = await myProject.save();

    return newresult;
  }

  if (data.type === "REMOVE-USERS") {
    let myProject = await Project.findById(data.projectId).exec();

    for (let i = 0; i < data.usersArr.length; i++) {
      myProject.userInfo.pull(data.usersArr[i]);
    }

    let newresult = await myProject.save();

    return newresult;
  }

  return null;
};

const getProject = async (queryString) => {
  const page = queryString.page;

  const { filter, limit, population } = aqp(queryString);
  console.log("before: ", filter);
  delete filter.page;
  console.log("after", filter);

  let offset = (page - 1) * limit;
  let result = await Project.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();
  return result;
};

const updateProject = async (data) => {
  const { id, name, endDate, description } = data;
  let result = await Project.updateOne(
    { _id: id },
    { name, endDate, description }
  );

  return result;
};

const deleteAProject = async (data) => {
  const { id } = data;
  let result = await Project.deleteById({ _id: id });

  return result;
};

module.exports = {
  createProject,
  getProject,
  updateProject,
  deleteAProject,
};
