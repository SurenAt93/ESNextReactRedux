module.exports = function(app) {
  app.get('/testApi', function(req, res) {
    let user = {name, surename, age} = {name: 'Suren', surename: 'Atoyan', age: 23}
    Object.assign(user, {
      msg: `Hello world ${name} ${surename}. He is ${age} years old!!!`
    })
    res.send(user);
  })
}