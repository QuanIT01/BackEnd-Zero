const Customer = require("../models/customer");

const createCustomerService = async (updateCustomerData) => {
  try {
    let result = await Customer.create({
      name: updateCustomerData.name,
      address: updateCustomerData.email,
      phone: updateCustomerData.phone,
      email: updateCustomerData.email,
      description: updateCustomerData.description,
      image: updateCustomerData.image,
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
    console.log("error", error);
    return null;
  }
};

const getAllCustomerService = async () => {
  try {
    let result = await Customer.find({});
    return result;
  } catch (error) {
    console.log("error", error);
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
    console.log("error", error);
    return null;
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  putUpdateCustomerService,
};
