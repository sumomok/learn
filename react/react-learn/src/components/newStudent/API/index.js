export async function getStudentPageList({ appkey = "demo13_1545210570249", page = "1", limt = "10" }) {
    return await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limt}`).then(resp => resp.json()).then(resp => resp.data);
}
export async function searchStudent({ appkey = "demo13_1545210570249", page = 1, limt = 10, sex = -1, key = "" } = {}) {
    if (key) {
        let resp = await fetch(`https://open.duyiedu.com/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limt}&sex=${sex}&search=${key}`)
            .then(resp => resp.json())
            .then(resp => resp.data);
        resp.datas = resp.searchList;
        delete resp.searchList;
        return resp;
    } else {
        let resp = await getStudentPageList({ page, limt })
        resp.datas = resp.findByPage;
        delete resp.findByPage;
        return resp;
    }
}
export async function getAllStudent({ appkey = "demo13_1545210570249" }) {
    return await fetch(`https://open.duyiedu.com/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json())
        .then(resp => resp.data);
}