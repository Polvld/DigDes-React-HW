import React from "react";
import Archive from "../../pages/archive/archive"
import Main from "../../pages/main/main"
import { BrowserRouter, Route, Switch}  from "react-router-dom"
import { AppRoute } from "../../const"
import NotFound from "../../pages/notfound/notfound"
import Form from "../../pages/form/form"


const App = ({events}) => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path={AppRoute.MAIN} exact>
                <Main events={events} />
            </Route>
            <Route path={AppRoute.ARCHIVE} exact>
                <Archive events={events} />
            </Route>
            <Route path={AppRoute.EVENT} exact component={Form} />
            <Route path={AppRoute.ADD} exact component={Form} />
            <Route path='*' exact component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}
export default App