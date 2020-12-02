var express = require('express');
var router = express.Router();



/*宠物接口*/
router.use("/pet",require('./pet/index'));

/*用户数据接口*/
router.use("/user",require('./user/index'));





/*登陆接口*/
router.use("/login",require('./login/index'));

module.exports = router;
