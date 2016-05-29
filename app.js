/**
 * Created by lmw on 16-5-26.
 */
'use strict';
var config=require('./config/config')

var Koa = require('koa');

var app = new Koa();

var xtpl=require('xtpl/lib/koa')
xtpl(app,{
    views:config.viewDir
});

var router = require("./route/route");
router(app);


// response

// app.use((ctx)=>{
//     ctx.body="aaaaa"
// })


app.listen(3000);
