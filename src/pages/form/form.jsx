import React from "react"
import Event from "../../components/event/event"
import Filter from "../../components/filter/filter"
import Header from "../../components/header/header"
import { events } from "../../store/index"
import { observer } from "mobx-react-lite"

const Form = observer (() => {
    const {data} = events
    return (
        <>
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Event data={data}/>
            </section>
        </>
    )
})

export default Form