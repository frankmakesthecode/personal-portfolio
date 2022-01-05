const router = require('express').Router();
const {
  models: { Account },
} = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.findAll({
      attributes: ['id', 'name', 'link'],
    });

    res.status(200).json(accounts);
  } catch (error) {
    next(error);
  }
});
