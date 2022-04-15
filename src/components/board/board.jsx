import React from "react";
import Card from "../card/card";
import Sorting from "../../components/sorting/sorting"
import LoadMore from "../../components/load-more/load-more"
import { AppRoute } from "../../const";

const Board = ({ mode }) => {
    const BoardType = mode
    if (BoardType === AppRoute.MAIN) {
    return (
        <section className="board">
            <Sorting />
            <div className="board__events">
                <Card />
            </div>
            <LoadMore />
        </section>
    )
    }
    return (
        <section className="board">
            <div className="board__events">
                <Card />
            </div>
            <LoadMore />
        </section>
    )
}
export default Board