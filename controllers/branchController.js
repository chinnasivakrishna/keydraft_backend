const Branch = require('../models/Branch');

// Get all branches
exports.getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    console.log('Sending branches from backend:', branches); // Debug log
    res.json(branches);
  } catch (error) {
    console.error('Error in getAllBranches:', error);
    res.status(500).json({ message: error.message });
  }
};

// Create new branch
exports.createBranch = async (req, res) => {
  try {
    const branch = new Branch(req.body);
    const savedBranch = await branch.save();
    res.status(201).json(savedBranch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update branch
exports.updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!branch) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    res.json(branch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete branch
exports.deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);
    if (!branch) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    res.json({ message: 'Branch deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bulk import branches
exports.bulkImport = async (req, res) => {
  try {
    const branches = await Branch.insertMany(req.body);
    res.status(201).json(branches);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 