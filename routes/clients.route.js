const {
    Router
} = require("express");
const router = Router();
const {
    clientstController
} = require("../controllers/clients.controller");

router.get("/clients", clientstController.getAllClients);
router.get("/clients/:id", clientstController.getClientById);
router.post("/clients", clientstController.addClient);
router.delete('/clients/delete/:id', clientstController.deleteClientById);
router.patch('/clients/block/:id', clientstController.block);
router.patch('/clients/books/:id', clientstController.returnBook);
router.patch('/clients/books/:id', clientstController.rentBook);


module.exports = router;