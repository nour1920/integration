import { createProfileController } from "../controllers/createProfile";
import { getProfileController } from "../controllers/getProfile";
import { getAllProfileController } from "../controllers/getAllProfile";
import { updateProfileController } from "../controllers/updateProfile";
import { deleteProfileController } from "../controllers/deleteProfile";
const express  = require('express');

const router = express.Router();

console.log('profils route');
router.post('/', createProfileController);
router.get('/:id', getProfileController);
router.get('/', getAllProfileController);
router.put('/:id',updateProfileController);
router.delete('/:id', deleteProfileController);
module.exports = router;