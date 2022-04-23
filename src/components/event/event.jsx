import React from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { events } from "../../mocks"


const Event = () => {
  const {id} = useParams()
  const evts = events.filter(evt => id === evt._id)[0]
  const dateType = () => {
    if (id) { 
    return (<input
      type="datetime-local"
      onChange={handleFieldChange}
      className="board__input board__input--date"
      name="date"
      value={new Date(form.date).toISOString().split(':', 2).join(':')}
    />)
    }
    return (
      <input
        type="datetime-local"
        onChange={handleFieldChange}
        className="board__input board__input--date"
        name="date"
      />
    )
  }
  const eventType = () => {
    if (id) {
      return ({
        theme: evts.theme,
        comment: evts.comment,
        date: new Date(evts.date).toISOString().split(':', 2).join(':'),
      })
    } 
    return ({
      theme: '',
      comment: '',
      date: new Date(),
    })
  }
  
  const [form, setForm] = useState(() => eventType())

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('form', form)
  }

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target
    setForm({...form, [name]: value})
  }
  return (
    <section className="board">
      <form className="board__form" onSubmit={handleSubmit}>
          <h2 className="board__title">{id ? 'Редактирование события' : 'Добавление события'}</h2>
          <fieldset className="board__field board__field--theme">
            <label for="theme" className="board__label board__label--theme">Тема:</label>
            <textarea
              type="text"
              onChange={handleFieldChange}
              className="board__input board__input--theme"
              name="theme"
              required
            >{form.theme}</textarea>
          </fieldset>
          <fieldset className="board__field board__field--comment">
            <label for="comment" className="board__label board__label--comment">Комментарий:</label>
            <textarea
              type="text"
              onChange={handleFieldChange}
              className="board__input board__input--comment"
              name="comment"
              required
            >{form.comment}</textarea>
          </fieldset>
          <fieldset className="board__field board__field--date">
            <label for="date" className="board__label board__label--date">Дата:</label>
            {dateType()}
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