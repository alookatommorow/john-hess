var users = require('../../app/controllers/users.server.controller');



module.exports = function(app) {
  app.route('/users')
    .get(users.list)
    .post(users.create);

  app.route('/users/:userId')
    .get(users.read);

  app.param('userId', users.userByID);
};