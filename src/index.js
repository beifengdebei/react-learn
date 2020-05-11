import React from 'react';
import ReactDOM from 'react-dom';
//import Student from './components/Student';
import StudentList from './components/StudentList';

const appKey = "liubeimeng_1580992599808";
/**
 * 获取所有的学生数据
 */
async function fetchAllStudent() {
    const studentList = await fetch("http://open.duyiedu.com/api/student/findAll?appkey=" + appKey)
        .then(resp => resp.json())
        .then(resp => resp.data);
    return studentList;
}


async function render(){
    ReactDOM.render("正在加载中。。。。", document.getElementById("root"));
    const studentList = await fetchAllStudent();
    ReactDOM.render(<StudentList stus={studentList}></StudentList>, document.getElementById("root"));
}

render();
/* const s = {
    address: "北京市海淀区",
    appkey: "liubeimeng_1580992599808",
    birth: 19910511,
    ctime: 1581086702,
    email: "liubeimeng0511@qq.com",
    id: 43647,
    name: "liubiemeng",
    phone: "15011592711",
    sNo: "0001",
    sex: 1,
    utime: 1581086702,
}; */
//ReactDOM.render(<Student {...s}></Student>, document.getElementById("root"));