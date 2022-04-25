import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import "moment/locale/ru"
import "./card.css"
import { events } from "../../store/index"

const Card = ({event}) => {
  const formatDate = moment(event.date).format('DD MMMM')
  
  const handleToEdit = () => {

  }

  const handleToArchive = (evt) => {
    evt.preventDefault()
    events.editEvent({
      ...event,
      id: event._id,
      archive: !event.archive,
    })
  }

  const handleToFavorite = (evt) => {
    evt.preventDefault()
    events.editEvent({
      ...event,
      id: event._id,
      favorite: !event.favorite,
    })
  }

  const handleDelete = (evt) => {
    evt.preventDefault()
    events.deleteEvent(event._id)
  }

    return (
        <article className="card">
            <div className="card__htmlForm">
                <div className="card__inner">
                  <div className="card__control">
                    <Link to={`/event/${event._id}`} type="button" className="card__btn card__btn--edit" onClick={handleToEdit}>
                      Редактировать
                    </Link>
                    <button type="button" className="card__btn card__btn--archive" onClick={handleToArchive}>
                      В архив
                    </button>
                    <button type="button" className={`card__btn card__btn--favorites ${event.favorite && 'favorite-on'}`} onClick={handleToFavorite}>
                      В избранное
                    </button>
                    <button type="button" className="card__btn card__btn--remove" onClick={handleDelete}>
                      Удалить
                    </button>
                  </div>

                  <div className="card__textarea-wrap">
                    <p className="card__text--theme">{event.theme}</p>
                    <p className="card__text--comment">{event.comment}</p>
                  </div>

                  <div className="card__settings">
                    <span className="card__date">{formatDate}</span>
                  </div>
                </div>
            </div>
        </article>
    )
}

export default Card