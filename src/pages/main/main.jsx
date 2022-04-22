import React from "react"
import Header from "../../components/header/header"
import Filter from "../../components/filter/filter"
import Board from "../../components/board/board"
import { events } from "../../store/index"

const Main = () => {

    const {notArchiveData} = events
    return (
        <>
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Board events={notArchiveData} />
            </section>
        </>
    )
}

export default Main