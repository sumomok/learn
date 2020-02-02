import React from 'react';
import PropTypes from 'prop-types';

export default function StudentList({ stu }) {
    let studentList = stu.map(it => (<li key={it.id}>
        {it.name},{it.sex === 1 ? "男" : "女"}
    </li>)
    )
    return (
        <div>
            {studentList}
        </div>
    )
}

StudentList.defaultProps = {
    page: []
}
StudentList.prototypes = {
    page: PropTypes.array,
}