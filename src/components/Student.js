import React from 'react';

export default function Student(props) {
    //假设所有的学生信息都是分开传递的
    console.log(props);
    return (
        <div>
            <li>
                {/* 显示所有学生数据 */}
                [姓名]: {props.name},
                [Email]: {props.email},
                [性别]: {props.sex === 1 ? "男" : "女"},
                [出生年份]: {props.birth}
            </li>
        </div>
    )
}


