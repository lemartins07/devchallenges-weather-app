const dateHelper = (d) => {
  const date = d ? new Date(d) : new Date()
  function weekDay(date) {
    switch (date.getDay()) {
      case 1:
        return 'Mon'
      case 2:
        return 'Tue'
      case 3:
        return 'Wed'
      case 4:
        return 'Thu'
      case 5:
        return 'Fri'
      case 6:
        return 'Sat'
      default:
        return 'Sun'
    }
  }

  function month(date) {
    switch (date.getMonth()) {
      case 0:
        return 'Jan'
      case 1:
        return 'Feb'
      case 2:
        return 'Mar'
      case 3:
        return 'Apr'
      case 4:
        return 'May'
      case 5:
        return 'Jun'
      case 6:
        return 'Jul'
      case 7:
        return 'Aug'
      case 8:
        return 'Sep'
      case 9:
        return 'Oct'
      case 10:
        return 'Nov'
      default:
        return 'Dec'
    }
  }

  return {
    today: date.getDate(),
    weekDay: weekDay(date),
    month: month(date),
    day: date.getDate(),
  }
}

export default dateHelper
