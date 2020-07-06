const Link = require("../models/link");

exports.getAllLinks = (req, res) => {
  Link.findAll().then((links) => {
    const newLinks = links.map((link) => {
      const fullLink = `${link.baseUrl}?utm_source=${link.source}&utm_medium=${link.medium}&utm_content=${link.content}&utm_term=${link.term} `;
      link.fullLink = fullLink;
      return link;
    });
    res.json({ links: newLinks });
  });
};

exports.storeLinksPage = (req, res) => {
  res.render("link/create");
};

exports.storeLinks = (req, res) => {
  const body = req.body;
  const {
    name,
    campaignName,
    medium,
    source,
    content,
    term,
    notes,
    baseUrl,
  } = body;
  console.log(name, campaignName, medium, source, content, term, notes);
  console.log(body);

  Link.create({
    name: name,
    createdBy: 1312312,
    campaignName: campaignName,
    medium: medium,
    source: source,
    content: content,
    term: term,
    notes: notes,
    shortUrl: "something",
    baseUrl: baseUrl,
  })
    .then(() => {
      backURL = req.header("Referer") || "/";
      res.json({
        status: "success",
        message: "Link creates successfully",
      });
    })
    .catch((err) => console.log(err));
};
