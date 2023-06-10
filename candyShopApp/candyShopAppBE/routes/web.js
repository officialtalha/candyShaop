const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const webController = require('../controller/webController');

router.use(bodyParser.json());

router.get('/', webController.getrequest);

router.post('/', webController.postRequest);

router.put('/:id', webController.putRequestById);

router.delete('/', webController.deleteRequest);

router.delete('/:id', webController.deleteRequestById);

// router.put('/', webController.putRequest);


module.exports = router;