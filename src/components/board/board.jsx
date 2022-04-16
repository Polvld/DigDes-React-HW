import React from "react";
import Card from "../card/card";
import Sorting from "../../components/sorting/sorting"
import LoadMore from "../../components/load-more/load-more"
import { AppRoute } from "../../const";

const Board = ({ mode }) => {
    return (
        <section className="board">
        {mode === AppRoute.MAIN && <Sorting />}
            <div className="board__events">
                <Card />
            </div>
            <LoadMore />
        </section>
    )
}

export default Board