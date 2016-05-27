/**
 * Created by lmw on 16-5-26.
 */
'use strict';

var Koa = require('koa');
var app = new Koa();

var router = require("./route")

router.initRoutes(app);

app.listen(3000);
