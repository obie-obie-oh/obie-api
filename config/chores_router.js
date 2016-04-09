const choresController = require('../controllers/chores_controller')

module.exports = function(app) {
  app.get('/api/chores', choresController.get);
}