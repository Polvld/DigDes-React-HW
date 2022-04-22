import React from "react"
import { useParams } from "react-router-dom"

const Event = ({events}) => {
  let {id} = useParams()
  const [editEvent] = events.filter(evt => id === evt._id)
  console.log(id)
  // const formatDate = new Date(editEvent.date).toISOString().split('.')[0]
  return (
    <section className="board">
      <form className="board__form">
          <h2 className="board__title">{id ? 'Редактирование события' : 'Добавление события'}</h2>
          <fieldset className="board__field board__field--theme">
            <label for="theme" className="board__label board__label--theme">Тема:</label>
            <textarea
              type="text"
              className="board__input board__input--theme"
              name="theme"
              required
            >{id ? editEvent.theme : ''}</textarea>
          </fieldset>
          <fieldset className="board__field board__field--comment">
            <label for="comment" className="board__label board__label--comment">Комментарий:</label>
            <textarea
              type="text"
              className="board__input board__input--comment"
              name="comment"
              required
            >{id ? editEvent.comment : ''}</textarea>
          </fieldset>
          <fieldset className="board__field board__field--date">
            <label for="date" className="board__label board__label--date">Дата:</label>
            <input
              type="datetime-local"
              className="board__input board__input--date"
              name="date"
            />
          </fieldset>
          <div className="btns">
            <button type="submit" className="btn-submit">Сохранить</button>
            <button type="reset" className="btn-reset">Очистить</button>
          </div>
      </form>
    </section>
    )
}

export default Event
