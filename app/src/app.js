import * as React from "react";
import ReactDOM from "react-dom";
import TaskDetails from "./taskDetails"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="body">
                <Router>
                    <ul>{this.props.listItems}</ul>
                    <Switch>
                        <Route path="/taskDetails/:id" component={TaskDetails}>

                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}