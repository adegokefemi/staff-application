import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./component/Home";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import { GlobalProvider } from "./context/GlobalState";



// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <div style={{ maxWidth: '40rem', margin:'4rem auto' }} >
          <GlobalProvider>
          <Router>
              < Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/add" component={AddUser} />
                  <Route path="/edit/:id" component={EditUser} />
              </Switch>
          </Router>
          </GlobalProvider>
      </div>
  );
}

export default App;
