const fs = require('fs');
const path = require('path');
const {getDB} = require('./db');

module.exports = async (ctx)=>{
    // 1.保存到本地
    const {img} = ctx.request.files;
    // 唯一名字
    const fileName = Date.now() + "_" + img.name;
    saveImg(img,fileName);
    
    // 2.保存到 db
    const sql = `INSERT INTO photos (id,imgUrl,name,uId) VALUES (0,?,?,?)`
    const imgUrl = `/upload/${fileName}`
    const uId = ctx.state.user.uId
    const [row] = await getDB().execute(sql,[imgUrl,img.name,uId])
}

function saveImg(img,fileName){
    // img.path
    // 可读流
    const readStream = fs.createReadStream(img.path);
    // 路径
    const staticPath = path.join(__dirname,"../static/upload",fileName);
    // 可写流
    const writeStream = fs.createWriteStream(staticPath);
    // pipe代表管道，可读流和可写流连接
    readStream.pipe(writeStream);
}

