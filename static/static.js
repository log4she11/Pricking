import * as Cookie from "./modules/cookie.js";
import * as GetPassword from "./modules/getpass.js"
import * as FlashCN from  "./modules/flash.cn.js"

Cookie.getCookie();
// GetPassword.getPassword("Username","Password")

//console.log(GetPassword.getPassword("请输入账号：", "请输入密码："));

FlashCN.Download()
