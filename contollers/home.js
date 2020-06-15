exports.getHome = (req, res) =>
  res.render('index', { title: 'UTM Ninja' })