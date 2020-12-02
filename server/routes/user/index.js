const express = require("express");
const userDB = require("../../db/user");
const sessionDB = require("../../db/session");



let router = express.Router();

/*请求用户列表*/
router.get("/get", (req, res) => {
  userDB.find({}, {pwd: 0, __v: 0})
    .then(data => {
      res.send({
        code: 0,
        msg: "请求成功",
        data
      })
    })
    .catch(() => {
      res.send({
        code: 4,
        msg: "服务器错误",
        data: []
      });
    })
});


/*创建用户*/
router.post("/add",(req,res)=>{
  let {user, pwd, admin} = req.body;

let data = {user,pwd, admin}
  /*数据库存储*/
console.log(data)
  userDB.create(data).then(d=>{
    res.send({
      code : 0,
      msg : "创建成功"
    })
  }).catch((e)=>{
    console.log(e)
    res.send({
      code : 4,
      msg : "创建失败，请稍后再试"
    })
  })

});


/*删除用户*/
router.post("/delete", (req, res) => {
  let {_id} = req.body;

  /*删除用户*/
  userDB.deleteOne({_id})
    .then(d => {
      //删除用户session
      sessionDB.deleteMany({session:new RegExp(_id)},()=>{});

      res.send({
        code: 0,
        msg: "删除成功"
      });
    })
    .catch(() => {
      res.send({
        code: 4,
        msg: "服务器错误"
      });
    })
});



module.exports = router;
