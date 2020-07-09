const Lead = require('../models/lead');

exports.getAllLeads = (req, res) => {
  Lead.findAll()
  .then(leads => {
    res.render('leads/all', { leads: leads });
  });
};


exports.storeLeads = (req, res) => {
  const body = req.body;
  const email = body.email || '';
  Lead.create({
    first_name: email,
    email: email
  }).then().catch(

  );
}