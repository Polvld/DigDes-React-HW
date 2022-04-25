import React from "react"
import Header from "../../components/header/header"
import Filter from "../../components/filter/filter"
import Board from "../../components/board/board"
import { events } from "../../store/index"
import {observer} from "mobx-react-lite"

const Main = observer(() => {

    const {filteredData} = events
    return (
        <>
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Board events={filteredData} />
            </section>
        </>
    )
})

export default Main