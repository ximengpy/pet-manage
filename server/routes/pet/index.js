
const express = require("express");
const petDB = require("../../db/pet");

let router = express.Router();

/*文章发表*/
router.post("/add",(req,res)=>{
  let {name,price,info,  master, number} = req.body;
  //后端数据验证
  // console.log(typeof price !=='number')
  // if (typeof price !== 'number' || typeof number != 'number'){
  //   res.send({
  //     code : 4,
  //     msg : "电话和联系方式请输入数字",
  //   });
  //   return;
  // }
  let data = {}
  name && (data.name = name)
  data.price = price
  info && (data.info = info)
  master && (data.master = master)
  number && (data.number = number)
  /*数据库存储*/

  petDB.create(data).then(d=>{
    res.send({
      code : 0,
      msg : "发表成功"
    })
  }).catch((e)=>{
    console.log(e)
    res.send({
      code : 4,
      msg : "发表失败，请稍后再试"
    })
  })

});

/*获取*/
router.get("/get",(req,res)=>{

  petDB.find({},{},{})
    .then(data=>{
      res.send({
        code : 0,
        msg : "查找成功",
        data
      });
    })
    .catch(r=>{
      console.log(r);
      res.send({
        code : 4,
        msg : "服务器错误",
        data : []
      })
    })
});

/*删除*/
router.post("/delete",(req,res)=>{
  let {_id} = req.body;

  /*删*/
  petDB.remove({_id})
    .then(n=>{
      res.send({
        code : 0,
        msg : "删除成功"
      });
    })
    .catch(e=>{
      res.send({
        code : 4,
        msg : "服务器错误"
      });
    })
});

/*更新*/
router.post("/update",(req,res)=>{
  let {_id,option} = req.body;
  // console.log(options)
  /*更新*/
  petDB.updateOne({_id},option)
    .then(()=>{
      res.send({
        code : 0,
        msg : "更新成功"
      })
    })
    .catch(()=>{
      res.send({
        code : 4,
        msg : "更新失败，服务器错误"
      })
    })
});


module.exports = router;
