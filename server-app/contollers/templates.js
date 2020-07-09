const Template = require("../models/template");

exports.getAll = (req, res) => {
  Template.findAll().then(templates => {
    res.render("template/all", { templates: templates });
  });
};

exports.storeTempaltes = (req, res) => {
  const body = req.body;
  const { name, campaignName, medium, source, content, term, notes } = body;
  Template.create({
    name: name,
    createdBy: 1312312,
    campaignName: campaignName,
    medium: medium,
    source: source,
    content: content,
    term: term,
    notes: notes
  })
    .then(() => {
      backURL = req.header("Referer") || "/";
      res.redirect(backURL);
    })
    .catch(err => console.log(err));
};
