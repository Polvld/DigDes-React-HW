import React from "react"
import { events } from "../../store/index"
import { observer } from "mobx-react-lite"
import { action } from "mobx"
import { useState } from "react"
import moment from "moment"


const Sorting = observer(() => {
  
  const [checkDefault, setCheckDefault] = useState(true)
  const [checkFirstNew, setCheckFirstNew] = useState(false)
  const [checkFirstOld, setCheckFirstOld] = useState(false)

  const handleSortDefault = action (() => {
    events.filteredData.sort((a, b) => `${a._id}`.toString() > `${b._id}`.toString())
    setCheckDefault(true)
    setCheckFirstNew(false)
    setCheckFirstOld(false)
  })
  const handleSortFirstNew = action (() => {
    events.filteredData.sort((a, b) => moment(b.date, 'YYYY-MM-DDThh:mm') - moment(a.date, 'YYYY-MM-DDThh:mm'))
    setCheckFirstNew(true)
    setCheckDefault(false)
    setCheckFirstOld(false)
  })
  const handleSortFirstOld = action (() => {
    events.filteredData.sort((b, a) => moment(b.date, 'YYYY-MM-DDThh:mm') - moment(a.date, 'YYYY-MM-DDThh:mm'))
    setCheckFirstOld(true)
    setCheckFirstNew(false)
    setCheckDefault(false)
  })


    return (
        <div className="board__filter-list">
            <span className="board__filter--title">Сортировка:</span>
            <input
              type="radio"
              id="board__filter-default"
              className="board__filter visually-hidden"
              name="board-filter"
              onChange={handleSortDefault}
              defaultChecked={checkDefault && true}
            />
            <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>

            <input
              type="radio"
              id="board__filter-new"
              className="board__filter visually-hidden"
              name="board-filter"
              onChange={handleSortFirstNew}
              defaultChecked={checkFirstNew && true}
            />
            <label htmlFor="board__filter-new" className="board__filter-label">Сначала новые</label>

            <input
              type="radio"
              id="board__filter-old"
              className="board__filter visually-hidden"
              name="board-filter"
              onChange={handleSortFirstOld}
              defaultChecked={checkFirstOld && true}
            />
            <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
          </div>
    ) 
})

export default Sorting