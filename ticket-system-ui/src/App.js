import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Tickets from "./components/Ticket/Tickets";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Switch>
        <Route path="/tickets/new" component={Form} />
        <Route path="/tickets/:id" component={Detail} />
        <Route exact path={["/", "/tickets"]} component={Tickets} />
      </Switch>
      <NotificationContainer/>
    </div>
  );
}

export default App;
