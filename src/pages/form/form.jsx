import React from "react"
import Event from "../../components/event/event"
import Filter from "../../components/filter/filter"
import Header from "../../components/header/header"

const Form = ({events}) => {
    return (
        <>
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Event events={events} />
            </section>
        </>
    )
}

export default Form