import { Home, Login, Register, Profile } from "./pages/public/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { paths } from "./ultils/paths";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={paths.HOME}>
                    <Home />
                </Route>
                <Route path={paths.LOGIN}>
                    <Login />
                </Route>
                <Route path={paths.REGISTER}>
                    <Register />
                </Route>
                <Route path={paths.PROFILE}>
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
