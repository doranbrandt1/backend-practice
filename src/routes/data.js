const router = require('express').Router();
const { getAll, createOne } = require('../controllers/data');

router.get('/', getAll);
router.post('/', createOne);

module.exports = router;