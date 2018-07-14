import React, { Component } from 'react'
import {
    Paper
} from '@material-ui/core'
import Header from './Header'
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import HomeContent from './HomeContent'
import ExamContent from './ExamContent'
import Quizzes from './Quizzes'

var indexRoutes = [
    { path: "/randomquizz", name: "ExamPage", component: ExamContent },
    { path: "/quizzes", name: "QuizzesPage", component: Quizzes },
    { path: "/", name: "HomePage", component: HomeContent },
];
export default class componentName extends Component {
    render() {
        return (
            <Router>
                <Paper style={{
                    backgroundColor: '#FFFFFF',
                    width: '100%',
                    paddingBottom:30,
                }}>
                    <Header />
                    <Switch>
                        {indexRoutes.map((prop, key) => {
                            return <Route path={prop.path} key={key}
                                component={prop.component}
                            />
                        })}
                    </Switch>
                </Paper>
            </Router>
        )
    }
}
