const Task = require("../models/task");
const aqp = require("api-query-params");

module.exports = {
  createTask: async (data) => {
    if (data.type === "EMPTY-TASK") {
      let result = await Task.create(data);
      return result;
    }
    return null;
  },
  getTask: async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    //console.log(">> check filter : ", filter);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Task.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();
    return result;
  },
  uProject: async (data) => {
    let result = await Task.updateOne({ _id: data.id }, { ...data });
    return result;
  },
  dProject: async (id) => {
    let result = await Task.deleteById(id);
    return result;
  },
};
