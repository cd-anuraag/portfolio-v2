import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";

import Landing from "./pages/Landing";
import Infra from "./pages/Infra";
import NotFound from "./pages/NotFound"

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={withRouter(Landing)}/>
                    <Route exact path="/infra" component={withRouter(Infra)}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
