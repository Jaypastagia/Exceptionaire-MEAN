var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/employeeSave', function(req, res, next) {
	console.log(" employee save");
  res.json({status:1});
});

module.exports = router;
