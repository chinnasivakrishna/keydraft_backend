const express = require('express');
const router = express.Router();
const {
  getAllBranches,
  createBranch,
  updateBranch,
  deleteBranch,
  bulkImport
} = require('../controllers/branchController');

router.get('/', getAllBranches);
router.post('/', createBranch);
router.put('/:id', updateBranch);
router.delete('/:id', deleteBranch);
router.post('/bulk', bulkImport);

module.exports = router; 