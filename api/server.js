/*
 * @Author: your name
 * @Date: 2020-10-15 09:23:56
 * @LastEditTime: 2020-10-15 18:01:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ele\api\api.js
 */
//引入 express
const express = require('express');
//将 express这个方法 赋给app
const app = express();
//body-parser是express中间件
const bodyParser = require("body-parser");
const db = require('./module/db');
const md5 = require('md5');
const tools = require('./module/tools');
//解析JSON格式
app.use(bodyParser.json())
//设置请求方式登录
//登录接口
app.post('/login', (req, res) => {
    /*
        登陆参数 adminName password 
        去数据库查找：成功 或者 失败
        成功的话：增加一条日志，返回内容添加token
    */
    const {
        adminName,
        password
    } = req.body
    db.findOne("adminList", {
        adminName,
        // password
        password: md5(password + '(*^(*&^(*8)))')
    }, function (err, info) {
        if (err) tools.json(res);
        else {
            if (info) {
                tools.json(res, 1, '扽故成功');
            } else {
                tools.json(res, -1, '账号密码错误')
            }
        }
    })
});
//涉资端口和启动标识
app.listen(80, function () {
    console.log('success');
})