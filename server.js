const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const views = require('koa-views');
const static = require('koa-static');
const axios = require('axios');
const koaBody = require('koa-body');
const path = require('path')
const fs = require('fs')
app.use(koaBody({
    multipart: true, // 支持文件上传
    formidable: {
        uploadDir: path.join(__dirname, 'public/upload/'), // 设置文件上传目录
        keepExtensions: true,    // 保持文件的后缀
        maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
        onFileBegin: (name, file) => { // 文件上传前的设置
            // console.log(`name: ${name}`);
            // console.log(file);
        },
    }
}));


//使用连接池连接数据库，解决数据库长时间不操作断开连接的问题；
const OptPool = require('./mysql/mysql.js');
const optPool = new OptPool();
const pool = optPool.getPool();

app.use(views(__dirname + '/dist'));
app.use(static(__dirname + '/dist'));

router.get('/', async (ctx, next) => {
    await ctx.render('index');
})

router.post('/list', async (ctx, next) => {
    let promise = new Promise((reslove, reject) => {
        axios.request({
            url: 'www.baidu.com',
            method: 'GET',
            data: '',
            withCredentials: true
        }).then((res) => {
            // console.log(res.data)
            reslove(res.data)
        }).catch((err) => {
            console.debug(err)
            reslove({ code: 1 })
        })
    })
    const data = await promise;
    ctx.body = data;
})

router.post('/addTechnologyShare', async (ctx, next) => {
    const { auther, title, content, desc } = JSON.parse(ctx.request.body);
    fs.writeFile(`./text/${title}.txt`, content, 'utf8', function (error) {
        if (error) {
            console.log(error);
            return false;
        }
        console.log('写入成功');
    })
    let promise = new Promise((reslove, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                console.log(err + 'aaaaaaaa')
                reslove({ code: -1, errMessage: "数据库存储错误" });
            }
            const sql = "insert into technology_share(id,auther,title,contentdesc,create_time,content,support,watch_num,image) values(?,?,?,?,?,?,?,?,?)";
            conn.query(sql, [null, auther, title, desc, new Date(), '', 1, 1, '../../assets/img/2019-9-6.jpg'], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                conn.release();
                reslove({ code: 0, message: '添加文章成功' });
            });
        });
    })
    const data = await promise;
    ctx.body = data;
})

router.post('/getTechnologyShare', async (ctx, next) => {
    let promise = new Promise((reslove, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                console.log(err + 'aaaaaaaa')
            }
            const sql = "select * from technology_share";
            conn.query(sql, (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                conn.release();
                reslove(result)
            });
        });
    })
    const data = await promise;
    ctx.body = data;
})

router.post('/getDetail', async (ctx, next) => {
    const { title } = JSON.parse(ctx.request.body)
    let content = ''
    let promise = new Promise((reslove, reject) => {
        //5.fs.readFile 读取文件  
        fs.readFile(`./text/${title}.txt`, function (error, data) {
            if (error) {
                console.log(error);
                return false;
            }
            content = data.toString()
            pool.getConnection((err, conn) => {
                if (err) {
                    console.log(err + 'aaaaaaaa')
                }
                const sql = "select * from technology_share where title = ? ";
                conn.query(sql, [title], (err, result) => {
                    if (err) {
                        console.log(err)
                        return;
                    }
                    conn.release();
                    reslove({result,content})
                });
            });
        })
    })
    const data = await promise;
    ctx.body = { data, content };
})




app.use(router.routes()).use(router.allowedMethods());

app.listen('3000', () => {
    console.log('http://127.0.0.1:3000')
})