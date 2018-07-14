import React, { Component } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <Toolbar
                style={{
                    backgroundColor: "#7E3E97",
                    justifyContent:'space-between '
                }}
            >
                <div >
                    <Button
                        style={{
                            color: '#27AAE0'
                        }}
                        component={props => <Link to="/randomquizz" {...props} />}
                    >Random Quizz</Button>
                    <Button
                        style={{
                            color: '#27AAE0'
                        }}
                        component={props => <Link to="/quizzes" {...props} />}
                    >Quizzes</Button>
                </div>


                <Button
                    style={{
                        color: '#FFFFFF',
                    }}
                >Sign in</Button>
            </Toolbar>
        );
    }
}
