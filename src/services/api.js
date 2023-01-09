// export const API_URL = 'https://www.metaweather.com/api'
const API_KEY = '87b2487435c1c3f65c0b8cc14ad2a3e9'
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`

// const CROSS_DOMAIN_TEST = 'https://cors-anywhere.herokuapp.com'

// const REQUEST_URL = `${CROSS_DOMAIN_TEST}/${API_URL}`

export function SEARCH_CIT_GET(name) {
  return {
    url: `${API_URL}`,
    options: {
      method: 'GET',
    },
  }
}
