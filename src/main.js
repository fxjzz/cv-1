let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = 0
let string = `你好,我是前端新人
接下来我要加样式了
我要加的样式是body{
    color:red
}
#div1{
    
    border:1px solid red;
    height:200px;
    width:200px;
}
/* 接下来吧div变成八卦图
 * 首先把div变成一个圆
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳
 * 一黑一白
 * */
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);
}
/* 加两个王求
 * */
#div1::before{
    position:absolute;
    width:100px;
    height:100px;
    background-color:white;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    position:absolute;
    width:100px;
    height:100px;
    background-color:black;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}`
let string2 = ''

let step = () => {
    setTimeout(() => {

        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }

        if (n < string.length) {
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            n++;
        }
        window.scrollTo(0,9999);
        html.scrollTo(0,999999);
        step();
    }, 10);
}//随时时停 添加if else 
step();
//需要注意  字符串里写的回车 是一个字符


