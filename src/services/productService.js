const Project = require("../models/project");
const aqp = require("api-query-params");

module.exports = {
  createProject: async (data) => {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result;
    }
    if (data.type === "ADD-USERS") {
      //find project by id
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.push(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
    return null;
  },
  getProject: async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    //console.log(">> check filter : ", filter);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Project.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();
    return result;
  },
};