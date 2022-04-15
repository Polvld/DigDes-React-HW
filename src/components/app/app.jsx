import React from "react";
import Archive from "../../pages/archive/archive"
import Main from "../../pages/main/main"
import { BrowserRouter, Route, Switch}  from "react-router-dom"
import { AppRoute } from "../../const"
import Event from "../event/event";


const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact>
                <Main />
            </Route>
            <Route path={AppRoute.ARCHIVE} exact component={Archive} />
            <Route path={AppRoute.EVENT} exact component={Event} />
                {/* Сраница добавления редактирования */}
        </Switch>
        </BrowserRouter>
    )
}
export default App