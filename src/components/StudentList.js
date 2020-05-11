import React, { Component } from 'react'
import Student from './Student';

export default class StudentList extends Component {
    render() {
        //约定: props.stus, 传递的是学生数组
        const students = this.props.stus.map(item=><Student {...item} key={item.id}></Student>);
        return (
            <ul>
                {students}
            </ul>
        )
    }
}
