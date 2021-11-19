const router = require('express').Router()
const adv = require('../controllers/adv');

router.get('/', adv.getAdvs);

router.get('/:id', adv.getAdvById);

router.post('/', adv.createAdv);

router.delete('/:id', adv.deleteAdvById);

router.put('/:id', adv.updateAdvById);

module.exports = router;