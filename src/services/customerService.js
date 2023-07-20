const Customer = require("../models/Cutomer");
const aqp = require("api-query-params");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllCustomerService = async (limit, page, queryString) => {
  try {
    let result = null;
    if (limit && page) {
      let offset = (page - 1) * limit;
      const { filter } = aqp(queryString);
      delete filter.page;
      result = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = await Customer.find({});
    }

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const putUpdateCustomerService = async (id, name, email, address) => {
  try {
    let result = await Customer.updateOne(
      { _id: id },
      { name, email, address }
    );
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteUpdateCustomerService = async (id) => {
  try {
    let result = await Customer.deleteById({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteBulkCustomerService = async (customerId) => {
  try {
    let result = await Customer.delete({ _id: { $in: customerId } });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  putUpdateCustomerService,
  deleteUpdateCustomerService,
  deleteBulkCustomerService,
};
