import React, {Component} from 'react';

/* 导出一个名叫MyClassComp的类 这个类继承Component */
export default class MyClassComp extends Component{
	/* 构造函数的参数 */
	//constructor(props){
		//super(props);//使用super调用父类的构造函数 this.props = props;
		//console.log(props);
	//}
	/* 该方法必须返回react元素 */
	render(){
		console.log(this.props);
		if(this.props.obj){
			return (
				<>
					<p>姓名: {this.props.obj.name}</p>
					<p>年龄: {this.props.obj.age}</p>
				</>
			)
		}else if(this.props.ui){
			return (
				<div style={{color:"red"}}>
					<h1>下面是传入的内容</h1>
					{this.props.ui}
				</div>
			);
		}
		return <h1>类组件的内容, 目前的数字: {this.props.number}</h1>;
	}
}
