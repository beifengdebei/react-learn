import React from 'react';
import ReactDOM from 'react-dom';
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
import "./index.css";

const srcs = [src1, src2, src3];/* 保存图片路径的数组 */
let index = 0;
let timer;//计时器
const container = document.getElementById("root");
/**
 * 根据index的值, 显示某张图片
 */
function render(){
    ReactDOM.render(<img src={srcs[index]} alt="" />, container);
}

function start(){
    clearInterval(timer);
    timer = setInterval(() => {
        index = (index+1) % 3; //改变index
        render();
    }, 2000);
}

/* 停止计时器 */
function stop(){
    clearInterval(timer);
}

render();
start();

container.onmouseenter = function(){
    stop();
}

container.onmouseleave = function(){
    start();
}