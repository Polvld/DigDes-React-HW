import React from "react";
import Card from "../card/card";
import Sorting from "../../components/sorting/sorting"
import LoadMore from "../../components/load-more/load-more"
import { AppRoute } from "../../const"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { observer } from "mobx-react-lite"


const Board = observer(({events}) => {
    const {pathname} = useLocation()

    const [step, setStep] = useState(5);

    const handleLoadMore = () => {
      events.length >= step ? setStep(step + 5) : setStep(events.length);
    }

    return (
        <section className="board">
            {pathname === AppRoute.MAIN && <Sorting />}
                <div className="board__events">
                    {events.slice(0, step).map(event => <Card event={event} key={event._id} />)}
                </div>
            {/* считаю что проверка излишняя, но вдруг условия изменятся */}
            {pathname === AppRoute.MAIN && <LoadMore handleLoadMore={handleLoadMore} />} 
            {pathname === AppRoute.ARCHIVE && <LoadMore handleLoadMore={handleLoadMore} />}
        </section>
    )
})

export default Board