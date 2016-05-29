/**
 * Created by lmw on 16-5-27.
 */
'use strict';

var co=require('co')

module.exports = {
        index:co.wrap(function *(ctx) {
            console.log(yield ctx.render("index",{"msg":"msgg"}))
        }),
        test:(ctx, next) => {
            const start = new Date();

            return next().then(() => {
                const ms = new Date() - start;
                console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
            });
        },
}


var generator_func=function* () {

    console.log("generator_func")

    
}

var test=function* () {

    console.log("generator_func")

}





