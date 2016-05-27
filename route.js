/**
 * Created by lmw on 16-5-27.
 */
'use strict';

var index = require("./controller/indexController")
var Router = require('koa-router');
var router = new Router();

module.exports = {
    initRoutes: function (application) {
        modules.forEach((module)=> {
            router[module.method](module.path, module.handler)
        })

        application.use(router.routes());
    }
};

const modules = [
    {
        method: "get",
        path: "/",
        handler: new index().index()
    },
    {
        method: "get",
        path: "/index",
        handler: new index().index()
    }

]