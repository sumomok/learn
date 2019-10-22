export default {
    namespaced:'getStudentList',
    state: {
        student:[]
      },
      getters:{
        studentListInfo(state){
          return state.student.map(student=>`姓名：${student.name} 年龄：${student.age}`);
        }
      },
      mutations: {
        ChangestudentList(state,payload){
          state.student.push(payload);
        }
    
      },
      actions: {
        ChangestudentList(state,payload) {
          setTimeout(()=>this.commit('ChangestudentList',payload),1000);
        }
      }
}