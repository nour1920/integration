import { createJobOffreController } from "../controllers/createJobOffre";
import { getJobOffreController } from "../controllers/getJobOffre";
import { getAllJobOffresController } from "../controllers/getAllJobOffres";
import { deleteJobOffreController } from "../controllers/deleteJobOffre";
import { updateJobOffreController } from "../controllers/updateJobOffre";




const express = require('express');
const router = express.Router();


console.log('job offre route');

router.get('/', getAllJobOffresController);
router.post('/', createJobOffreController);
router.get('/:id', getJobOffreController);
router.delete('/:id', deleteJobOffreController);
router.put('/:id', updateJobOffreController);

module.exports = router;
