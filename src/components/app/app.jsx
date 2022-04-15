import React from "react";
import Archive from "../../pages/archive/archive"
import Main from "../../pages/main/main"
import { BrowserRouter, Route, Switch}  from "react-router-dom"
import { AppRoute } from "../../const"


const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact>
                <Main />
            </Route>
            <Route path={AppRoute.ARCHIVE} exact component={Archive} />
            <Route path={AppRoute.EVENT}>
                {/* Сраница добавления редактирования */}
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default App