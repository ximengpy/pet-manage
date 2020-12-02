const mongoose = require("mongoose");


let Schema = mongoose.Schema;
let articleSchema = new Schema({
  name : {type: String,required: true}, //宠物名
  master : {type: String,required: true}, //宠物主人
  price : {type: Number,required: true}, //就诊价格
  number : {type:Number,required: true}, //用户电话
  info : {type: String,required: true}, //备注
  date : {type: Date, default: Date.now}, //上次就诊日期
  admin: {type: String,required: false}, //是否管理员
})

articleSchema.pre("update",function(next){
  this.update = new Date;
  next();
});



let pet = mongoose.model("pet",articleSchema);

// pei.create({
//   name: 'ddd',
//   price: 12,
//   info: '打疫苗'
// })
module.exports = pet;
