import React from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { events } from "../../store/index"
import { useHistory } from "react-router-dom"


const Event = observer(() => {
  
  // console.log(data)
  const {id} = useParams()

  const hist = useHistory()

  const eventTarget = events.data.filter(evt => id === evt._id)[0]
  // console.log(eventTarget)

  const eventType = () => {
    return (
      id ? {
        theme: eventTarget.theme,
        comment: eventTarget.comment,
        date: new Date(eventTarget.date).toISOString().split(':', 2).join(':'),
      } : {
      theme: '',
      comment: '',
      date: new Date(),
      }
    )
  }
  const [form, setForm] = useState(() => eventType())

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // console.log('form', form)
    events.editEvent({
      id: eventTarget._id,
      theme: form.theme,
      comment: form.comment,
      date: form.date,
      favorite: eventTarget.favorite,
      archive: eventTarget.archive,
    })
    eventTarget.archive ? hist.push('/archive') : hist.push('/')
  }
  const handleAddEvent = (evt) => {
    evt.preventDefault()
    // console.log('form', form)
    events.addEvent({
      theme: form.theme,
      comment: form.comment,
      date: form.date,
    })
    hist.push('/')
  }
  const handleReset = () => {
    setForm({
      theme: '',
      comment: '',
      date: new Date(),
    })
  }
  const handleFieldChange = (evt) => {
    const {name, value} = evt.target
    setForm({...form, [name]: value})
  }

  return (
    <section className="board">
      <form className="board__form" onSubmit={id ? handleSubmit : handleAddEvent}>
          <h2 className="board__title">{id ? 'Редактирование события' : 'Добавление события'}</h2>
          <fieldset className="board__field board__field--theme">
            <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
            <textarea
              type="text"
              onChange={handleFieldChange}
              className="board__input board__input--theme"
              name="theme"
              value={form.theme}
              required
            ></textarea>
          </fieldset>
          <fieldset className="board__field board__field--comment">
            <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
            <textarea
              type="text"
              onChange={handleFieldChange}
              className="board__input board__input--comment"
              name="comment"
              value={form.comment}
              required
            ></textarea>
          </fieldset>
          <fieldset className="board__field board__field--date">
            <label htmlFor="date" className="board__label board__label--date">Дата:</label>
            <input
              type="datetime-local"
              onChange={handleFieldChange}
              className="board__input board__input--date"
              name="date"
              value={form.date}
            />
          </fieldset>
          <div className="btns">
            <button type="submit" className="btn-submit">{id ? 'Сохранить' : 'Добавить'}</button>
            <button type="reset" className="btn-reset" onClick={handleReset}>Очистить</button>
          </div>
      </form>
    </section>
    )
})

export default Event