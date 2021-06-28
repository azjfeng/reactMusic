const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const views = require('koa-views');
const static = require('koa-static');
const axios = require('axios');
const request = require('request')
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

app.use(router.routes()).use(router.allowedMethods());

app.listen('3000', () => {
    console.log('http://127.0.0.1:3000')
})