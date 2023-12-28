import { createProfilCompanyController } from "../controllers/createProfilCompany";
import { getProfilCompanyController } from "../controllers/getProfilCompany";
import { getAllProfilCompanyController } from "../controllers/getAllprofilCompany";
import { updateProfilCompanyController } from "../controllers/updateProfilCompany";
import { deleteProfilCompanyController } from "../controllers/deleteProfilCompany";
const express  = require('express');

const router = express.Router();


router.post('/', createProfilCompanyController);
router.get('/:id', getProfilCompanyController);
router.get('/', getAllProfilCompanyController);
router.put('/:id',updateProfilCompanyController);
router.delete('/:id', deleteProfilCompanyController);
module.exports = router;