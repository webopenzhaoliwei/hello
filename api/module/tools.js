/*
 * @Author: your name
 * @Date: 2020-10-15 09:48:52
 * @LastEditTime: 2020-10-15 11:30:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ele\api\module\tools.js
 */
module.exports = {
    getNowTime(){
        var date = new Date();
        return date.getFullYear() + "-" +
            ((date.getMonth() + 1)).toString().padStart(2, 0) + "-" +
            (date.getDate()).toString().padStart(2, 0) + " " +
            (date.getHours()).toString().padStart(2, 0) + ":" +
            (date.getMinutes()).toString().padStart(2, 0) + ":" +
            (date.getSeconds()).toString().padStart(2, 0);
    },
    json(res,ok=-1,msg="网络连接错误"){
        res.json({
            ok,
            msg
        })
    }
}