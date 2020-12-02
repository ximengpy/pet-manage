const express = require("express");
const userDB = require("../../db/user");
const crypto = require("crypto");

let router = express.Router();

/*登陆*/
router.post('/',(req,res)=>{
  let {user,pwd} = req.body;

  userDB.findOne({user})
    .then(data=>{
      if (data) {

        /*有这个用户*/

        /*验证密码*/
        if (data.pwd === pwd) {
          /*密码对*/
           //写入session
          req.session.login = data;
          /*验证管理员权限*/
          if (data.admin){
            /*是管理员*/


            res.send({
              code : 0,
              msg : "登陆成功",
              admin: true
            })
          }else{
            /*不是管理员*/
            res.send({
              code : 0,
              msg : "登录成功",
              admin: false
            })
          }

        }else{
          /*密码错*/
          res.send({
            code : 1,
            msg : "密码错误"
          })
        }

      }else{

        /*没有这个用户  自动注册用户*/
        // res.send({
        //   code : 1,
        //   msg : "用户不存在"
        // })
        userDB.create({user,pwd})
        .then(d =>{
          req.session.login = d;
          res.send({
            code: 0,
            msg: '创建新用户，登录成功',
            admin: false
          })
        })
      }

    })
    .catch((e)=>{
      console.log(e);
      res.send({
        code:4,msg:"服务器错误~"
      })
    })
})

/*验证登陆*/
router.post("/ifLogin",(req,res)=>{
  /*判断session*/
  if (req.session.login) {
    res.send({
      code : 0,
      msg : "已登录",
      data : req.session.login._id
    });
  }else{
    res.send({
      code : 1,
      msg : "未登录",
      data : null
    });
  }
});

//登出
router.post("/logout",(req,res)=>{
  req.session.destroy();
  res.send({
    code : 0,
    msg : "退出登陆成功"
  });
});


module.exports = router;
