const { tasks } = require("../../sequelize").models;



async function create(req, res, next) {
// Create Data
console.log("req____________",req);
let data = req.body;
console.log("_____________",data);
const TasksExist = await tasks.findOne({
  where: {
    properties: data.properties,
  },
});
if (TasksExist) {
  Tasks_id = TasksExist.id;
  return res.json(400, { message: "Tasks Entry Already Exists" });
}
let createData = {};
createData.description = data.description;
createData.assignee = data.assignee;
createData.status = data.status;
createData.properties = data.properties;
createData.due_date = data.due_date;
await tasks.create(createData);



res.json(200, { message: "Tasks Created Successfully" });

}
module.exports = create;
