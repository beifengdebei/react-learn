import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp2 from './MyFuncComp';/* 导入组件 */

const container = document.getElementById("root");

function MyFuncComp(){
    return <h1>组件内容</h1>;
}

const comp = <MyFuncComp/>;
console.log(comp);//使用组件生成的也是一个React元素, 变化的只是type值。
/**
 * 1.函数组件
 * 使用方式: 当做函数调用 当做一个元素来使用
 */
ReactDOM.render(<div>
	{/* 组件的调用我们一般不会使用函数调用的方式调用 因为浏览器端不好调试结果不清晰 */}
    {MyFuncComp()}
	{/* 当做一个元素来使用 */}
	<MyFuncComp/>
	<MyFuncComp2></MyFuncComp2>
</div>, container);
