module.exports = (app) => {
  const admin = require("../controllers/admin.controlleurs");

  app.post("/admin/login", (req, res) => admin.login(req, res));

  // //les selectionner tous
  // app.get("/super", (req, res) => super.findAll(req, res));
  // // les supprimer tous
  // app.delete("/super", (req, res) => super.deleteAll(req, res));
  // //Créer registration
  // app.post("/super", (req, res) => super.create(req, res));

  // //Select un candidat par l'id
  // app.get("/super/:superId", (req, res) => super.findOne(req, res));

  // // Modifier un candidat with candidatId
  // app.post("/super/:superId", (req, res) => super.update(req, res));

  // // Supprimer un candidat parId
  // app.delete("/super/:superId", (req, res) => super.delete(req, res));

 
};
