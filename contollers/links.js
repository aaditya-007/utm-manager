const Link = require("../models/link");

exports.getAllLinks = (req, res) => {
  Link.findAll().then(links => {
    res.render("link/all", { links: links });
  });
};

exports.storeLinksPage = (req, res) => {
  res.render("link/create");
}

exports.storeLinks = (req, res) => {
  const body = req.body;
  const { name, campaignName, medium, source, content, term, notes} = body;
  Link.create({
    name: name,
    createdBy: 1312312,
    campaignName:campaignName,
    medium:medium,
    source: source,
    content: content,
    term: term,
    notes:notes
  })
    .then(() => {
      backURL=req.header('Referer') || '/';
      res.redirect(backURL);
    })
    .catch(err => console.log(err));
};
