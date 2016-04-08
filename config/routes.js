module.exports = (app, express) => {
  app.get('/', (req, res) => {
    console.log('get root');
    res.send(200);
  })
}