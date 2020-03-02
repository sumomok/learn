import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from '../Student/StudentList';
import StudentAdd from '../Student/StudentAdd';
import StudentEdit from '../Student/StudentEdit';
import ClassList from '../Student/ClassList';
import StudentDefalut from '../Student/StudentDefalut'
export default class Content extends PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/StudentList' exact component={StudentList}></Route>
                    <Route path='/classList' exact component={StudentAdd}></Route>
                    <Route path='/Students/add' exact component={StudentEdit}></Route>
                    <Route path='/Students/edit' exact component={ClassList}></Route>
                    <Route path='/Students/:sno' exact component={StudentDefalut} />
                </Switch>
            </Router>
        )
    }
}
