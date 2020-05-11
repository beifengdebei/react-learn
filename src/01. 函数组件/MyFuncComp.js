import React from "react";/* 导入快捷键imr */

/* 导出一个组件 */
export default function MyFuncComp2(props){
    //return <h1>函数组件的内容</h1>;
    
    /* 有一段文字 文字里面有一个数字 谁使用这个组件需要告诉我这个数字是多少？ */
    return <h1>函数组件, 目前的数字: {props.number}</h1>;
}