import React from 'react';
import ReactDOM from 'react-dom';
import MyClassComp from './MyClassComp';
import MyFuncComp from './01. 函数组件/MyFuncComp';

const container = document.getElementById("root");

ReactDOM.render(<div>
	<MyClassComp number={4} ennable={false} obj={{name: "beimeng",age: 18}}></MyClassComp>
	<MyClassComp number="40" ui={ <h2>这是我传递的属性</h2> }></MyClassComp>
	<MyFuncComp number={2}></MyFuncComp>
	<MyFuncComp number="20"></MyFuncComp>
</div>, container);