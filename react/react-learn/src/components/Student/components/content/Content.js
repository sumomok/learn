import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from '../Student/StudentList';
import StudentAdd from '../Student/StudentAdd';
import StudentEdit from '../Student/StudentEdit';
import ClassList from '../Student/ClassList';
export default class Content extends PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/StudentList' component={StudentList}></Route>
                    <Route path='/classList' component={StudentAdd}></Route>
                    <Route path='/Students/add' component={StudentEdit}></Route>
                    <Route path='/Students/edit' component={ClassList}></Route>
                </Switch>
            </Router>
        )
    }
}
