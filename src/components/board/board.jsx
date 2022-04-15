import React from "react";
import Card from "../card/card";
import Sorting from "../../components/sorting/sorting"
import LoadMore from "../../components/load-more/load-more"

const Board = () => {
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
export default Board