import React from "react";
import Card from "../card/card";
import Sorting from "../../components/sorting/sorting"
import LoadMore from "../../components/load-more/load-more"
import { AppRoute } from "../../const";

function BoardType (type) {
    if (type === AppRoute.MAIN) {
        return <Sorting />
    }
    return
}
const Board = ({ mode }) => {
    return (
        <section className="board">
        {BoardType(mode)}
            <div className="board__events">
                <Card />
            </div>
            <LoadMore />
        </section>
    )
}

export default Board