import React, { useState, useEffect } from 'react';
import StudentListBar from './StudentListBar/';
import StudentListContainer from './StudentList/';
import qs from 'query-string';
import { searchStudent } from '../../server/index';
export default function StudentList(props) {
    const query = getQuery(props.location.search)
    const resp = useResp(query);
    console.log(resp);
    let handleSearch = value => {
        console.log(value);
    }
    return (
        <div>
            <StudentListBar
                handleSearch={handleSearch}
                defaultValue={
                    {
                        key: query.key,
                        sex: query.sex
                    }

                }
            ></StudentListBar>
            <StudentListContainer {...props} value={resp}></StudentListContainer>
        </div>
    )

}

function useResp(search) {
    const [rep, setRep] = useState({
        cont: 0,
        datas: {}
    })
    useEffect(() => {
        searchStudent({
            key: search.key,
            limt: search.limt,
            page: search.page,
            sex: search.sex
        }).then(resp => setRep(resp));
    }, [search.limt, search.page, search.sex, search.key])
    return rep
}

function getQuery(search) {
    const queryDefault = {
        page: 1,
        limt: 10,
        key: "",
        sex: -1,
    }
    let query = qs.parse(search)
    let newQuery = Object.assign({}, queryDefault, query)
    newQuery.limt = + newQuery.limt;
    newQuery.page = + newQuery.page;
    newQuery.sex = + newQuery.sex;
    return newQuery;
}