import { computed, makeAutoObservable, onBecomeObserved } from "mobx"
import { getEvents, addEvent, editEvent, deleteEvent } from "../api"
import moment from "moment"
class EventsStore {
  data = []
  filteredData = []

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true,
      archiveData: computed,
      notArchiveData: computed
    });

    onBecomeObserved(this, 'data', this.fetch);
  }

  get archiveData() {
    return this.data.filter(x => x.archive)
  }
  get notArchiveData() {
    return this.data.filter(x => !x.archive)
  }
  get pastData() {
    return this.data.filter(x => moment(x.date).isBefore(moment(), 'd') && !x.archive)
  }
  get futureData() {
    return this.data.filter(x => moment(x.date).isAfter(moment(), 'd') && !x.archive)
  }
  get todayData() {
    return this.data.filter(x => moment(x.date).isSame(moment(), 'd') && !x.archive)
  }
  get favoriteData() {
    return this.data.filter(x => x.favorite && !x.archive)
  }

  *fetch() {
    const response = yield getEvents()
    this.data = response
    this.filteredData = response.filter(x => !x.archive).sort((a, b) => `${a._id}`.toString() > `${b._id}`.toString())
  }

  *addEvent(data) {
    yield addEvent(data)
    yield this.fetch()
  }

  *editEvent(data) {
    yield editEvent(data)
    yield this.fetch()
  }

  *deleteEvent(id) {
    yield deleteEvent(id)
    yield this.fetch()
  }
}

export const events = new EventsStore()