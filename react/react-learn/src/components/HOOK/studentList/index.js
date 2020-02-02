import React, { useState, useEffect } from 'react';
import StudentList from './studentList';

export default function StudentContainer() {
    const [page, setPage] = useState(1);
    const [students, setStudent] = useState([])
    useEffect(() => {
        (async function () {
            const resp = await getStudentPageList(
                {
                    appkey: "demo13_1545210570249",
                    page: page,
                    limt: 10
                }
            )
            setStudent(resp.findByPage)
        })()
    }, [page])
    return (
        <div>
            <StudentList stu={students} />
            <input type="number" value={page} onChange={e => {
                setPage(parseInt(e.target.value));
            }} />
        </div>
    )
}

// appkey = demo13_1545210570249
async function getStudentPageList({ appkey, page, limt }) {
    return await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limt}`).then(resp => resp.json()).then(resp => resp.data);
}
// getStudentPageList({
//     appkey: "demo13_1545210570249",
//     page: 1,
//     limt: 10
// }).then(data => console.log(data))