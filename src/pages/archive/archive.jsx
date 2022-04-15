import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { AppRoute } from "../../const"
import { useParams } from "react-router-dom"

const Archive = (props) => {
    
    // const { id } = props.match.params
    // const { id } = useParams()

    // const render = () => {
    //     return id ? `ID есть, вот он - ${id}` : 'Нет ID никакого'
    // }

    return (
        <>
            <Header mode={AppRoute.ARCHIVE}/>
            <section className="main__wrapper">
                {/* <div>{render()}</div> */}
                <Board />
            </section>
        </>
    )
}

export default Archive