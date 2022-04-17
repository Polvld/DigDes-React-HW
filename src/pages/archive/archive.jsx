import React from "react";
import Header from "../../components/header/header"
import Board from "../../components/board/board"

const Archive = () => {
    
    // const { id } = props.match.params
    // const { id } = useParams()
    // console.log(AppRoute.ARCHIVE)
    // const render = () => {
    //     return id ? `ID есть, вот он - ${id}` : 'Нет ID никакого'
    // }

    return (
        <>
            <Header />
            <section className="main__wrapper">
                <Board />
            </section>
        </>
    )
}

export default Archive