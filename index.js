require('./a.css');
import './b.less';
import './c.scss';
document
    .querySelector(".btn-require-module")
    .addEventListener("click", function () {
        require.ensure(["./module3.js"], function (require) {
            var module3 = require("./module3.js");
        }, "module3")
    })
console.log('我是index.js');