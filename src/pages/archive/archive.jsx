import React from "react";
import Header from "../../components/header/header"
import Board from "../../components/board/board"
import { useLocation }  from "react-router-dom"

const Archive = ({events}) => {
    
    // const { id } = props.match.params
    // const { id } = useParams()
    // console.log(AppRoute.ARCHIVE)
    // const render = () => {
    //     return id ? `ID есть, вот он - ${id}` : 'Нет ID никакого'
    // }
    const {pathname} = useLocation()
    const archiveEvents = events.filter(x => x.archive)
    return (
        <>
            <Header />
            <section className="main__wrapper">
                <Board events={archiveEvents} />
            </section>
        </>
    )
}

export default Archive