const {getDB} = require('./db')
const jwt = require('jsonwebtoken')
const {secret} = require('./config')
module.exports = async (ctx)=>{
    const {username,password} = ctx.request.body;
    // 查询，用户名密码和数据库的相同的时候登录成功
    const sql = `SELECT * FROM users WHERE username=? AND password=?`

    const [row] = await getDB().execute(sql,[username,password])

    console.log(row)

    const userModel = row[0] // 用户名密码
    // console.log(userModel)
    // console.log(userModel.id)
    // 生成token
    const token = jwt.sign(
        {
            uId:userModel.id,
        },
        secret
    )
    // 有用户名密码时登录成功
    if(userModel){
        ctx.body = {
            state:1,
            msg:"登录成功",
            // token 带过去
            data:{
                token
            }
        }
    } else {
        ctx.body = {
            state:0,
            msg:"登录失败"
        }
    }
}