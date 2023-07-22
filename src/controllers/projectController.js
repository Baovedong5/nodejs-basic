const {
  createProject,
  getProject,
  updateProject,
  deleteAProject,
} = require("../services/productService");

const postCreateProject = async (req, res) => {
  let result = await createProject(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const getAllProject = async (req, res) => {
  let result = await getProject(req.query);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const putUpdateProject = async (req, res) => {
  let result = await updateProject(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const deleteProject = async (req, res) => {
  let result = await deleteAProject(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

module.exports = {
  postCreateProject,
  getAllProject,
  putUpdateProject,
  deleteProject,
};
