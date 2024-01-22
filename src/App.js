import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";

import Landing from "./pages/Landing";
import Infra from "./pages/Infra";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={withRouter(Landing)}/>
                    <Route exact path="/infra" component={withRouter(Infra)}/>
                    <Route exact path="/contact" component={withRouter(Contact)}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
