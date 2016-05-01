module.exports = {
  attachUser: function(req, res, next) {
    //TODO: obtain userid and houseId from jwt
    req.user = {id: 2, houseId: 1};
    next();
  }
}