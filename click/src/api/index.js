import axios from 'axios'

//配置默认的参数
// axios.defaults.baseURL = 'http://localhost:3036';//默认访问地址
axios.defaults.baseURL = 'http://www.ximengpy.top:3036';//默认访问地址

axios.defaults.withCredentials = true; //跨域允许携带cookie
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"; //设置POST请求格式



/*请求用户列表*/
export function getUserList(){
  return axios.get("/user/get");
}
/*删除用户*/
export function deleteUser(_id) {
  return axios.post("/user/delete",{_id});
}
//创建用户
export function addUser(option) {
  return axios.post("/user/add",option);
}

// /*更新用户数据*/
// export function updateUser(_id,data) {
//   return axios.post('/user/update',{_id,data});
// }
//退出
export function Loginout() {
  return axios.post('/login/logout')
}
/*登陆接口*/
export function login(options) {
  return axios.post('/login',options);
}

// 判断登录
export function ifLogin() {
  return axios.post('/login/ifLogin');
}



//添加宠物管理
export function financeadd(option) {
  return axios.post("/pet/add", option)
}
//获取记录信息
export function getfinance() {
  return axios.get("/pet/get")
}
//编辑记录
export function updatefinance(_id, option) {
  return axios.post("/pet/update", {_id, option})
}
//删除记录
export function delfinance(_id) {
  return axios.post("/pet/delete", {_id})
}









