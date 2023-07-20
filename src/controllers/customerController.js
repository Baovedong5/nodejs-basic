const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  putUpdateCustomerService,
  deleteUpdateCustomerService,
  deleteBulkCustomerService,
} = require("../services/customerService");

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;

    let imageUrl = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      // do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl,
    };

    let customer = await createCustomerService(customerData);

    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },

  postCreateArrayCustomer: async (req, res) => {
    console.log(">>> check data: ", req.body.customers);
    let customers = await createArrayCustomerService(req.body.customers);

    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(500).json({
        EC: -1,
        data: customers,
      });
    }
  },

  getAllCustomer: async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let name = req.query.name;
    let customers = null;

    if (limit && page) {
      customers = await getAllCustomerService(limit, page, name);
    } else {
      customers = await getAllCustomerService();
    }
    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  },

  putUpdateCustomer: async (req, res) => {
    let { id, name, email, address } = req.body;
    let result = await putUpdateCustomerService(id, name, email, address);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  deleteUpdateCustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteUpdateCustomerService(id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  deleteBulkCustomer: async (req, res) => {
    let customerId = req.body.customerId;
    let result = await deleteBulkCustomerService(customerId);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
