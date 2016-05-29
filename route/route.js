/**
 * Created by lmw on 16-5-27.
 */
'use strict';

var index = require("./../controller/indexController")

var Router = require('koa-router');
var router = new Router();

module.exports =  function (application) {
        modules.forEach((module)=> {
            router[module.method](module.path, module.handler)
        })

        application.use(router.routes());
    };

const modules = [
    {
        method: "get",
        path: "/",
        handler: index.index
    },
    {
        method: "get",
        path: "/index",
        handler: index.index
    },
    {
        method: "get",
        path: "/test",
        handler: index.test
    }
]