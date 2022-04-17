import React from "react";
import Card from "../card/card";
import Sorting from "../../components/sorting/sorting"
import LoadMore from "../../components/load-more/load-more"
import { AppRoute } from "../../const"
import { useLocation } from "react-router-dom"

const Board = () => {
    const {pathname} = useLocation()
    return (
        <section className="board">
            {pathname === AppRoute.MAIN && <Sorting />}
                <div className="board__events">
                    <Card />
                </div>
            {/* считаю что проверка излишняя, но вдруг условия изменятся */}
            {pathname === AppRoute.MAIN && <LoadMore />} 
            {pathname === AppRoute.ARCHIVE && <LoadMore />}
        </section>
    )
}

export default Board