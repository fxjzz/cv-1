parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),o=0,e="你好,我是前端新人\n接下来我要加样式了\n我要加的样式是body{\n    color:red\n}\n#div1{\n    \n    border:1px solid red;\n    height:200px;\n    width:200px;\n}\n/* 接下来吧div变成八卦图\n * 首先把div变成一个圆\n */\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/* 八卦是阴阳\n * 一黑一白\n * */\n#div1{\n    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);\n}\n/* 加两个王求\n * */\n#div1::before{\n    position:absolute;\n    width:100px;\n    height:100px;\n    background-color:white;\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius:50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n#div1::after{\n    position:absolute;\n    width:100px;\n    height:100px;\n    background-color:black;\n    bottom:0;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius:50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n",a="",t=function t(){setTimeout(function(){"\n"===e[o]?a+="<br>":" "===e[o]?a+="&nbsp;":a+=e[o],o<e.length&&(n.innerHTML=a,r.innerHTML=e.substring(0,o),o++),window.scrollTo(0,9999),n.scrollTo(0,999999),t()},10)};t();
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.d95c9f5e.map