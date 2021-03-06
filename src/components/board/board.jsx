import React from "react";
import Card from "../card/card";
import Sorting from "../../components/sorting/sorting"
import LoadMore from "../../components/load-more/load-more"
import { AppRoute } from "../../const"
import { useLocation } from "react-router-dom"


const Board = ({events}) => {
    const {pathname} = useLocation()
    return (
        <section className="board">
            {pathname === AppRoute.MAIN && <Sorting />}
                <div className="board__events">
                    {events.map(event => <Card event={event} key={event._id} />)}
                </div>
            {/* считаю что проверка излишняя, но вдруг условия изменятся */}
            {pathname === AppRoute.MAIN && <LoadMore />} 
            {pathname === AppRoute.ARCHIVE && <LoadMore />}
        </section>
    )
}

export default Board