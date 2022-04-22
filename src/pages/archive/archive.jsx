import React from "react";
import Header from "../../components/header/header"
import Board from "../../components/board/board"
import { events } from "../../store"

const Archive = () => {
    
    // const { id } = props.match.params
    // const { id } = useParams()
    // console.log(AppRoute.ARCHIVE)
    // const render = () => {
    //     return id ? `ID есть, вот он - ${id}` : 'Нет ID никакого'
    // }
    const {archiveData} = events
    return (
        <>
            <Header />
            <section className="main__wrapper">
                <Board events={archiveData} />
            </section>
        </>
    )
}

export default Archive