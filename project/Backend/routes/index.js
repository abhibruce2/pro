const tasks = require("../routes/TasksApi");


function routes(app) {
  tasks(app);
}

module.exports = routes;
