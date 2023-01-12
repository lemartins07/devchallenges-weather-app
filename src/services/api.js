// export const API_URL = 'https://www.metaweather.com/api'
const API_KEY = '87b2487435c1c3f65c0b8cc14ad2a3e9'
// const API_KEY = '43d2d1023ae5c6c8a741593c7261b46f'
const portoAlegre = {
  lat: '-30.033056',
  lon: '-51.230000',
}
// https://api.openweathermap.org/data/2.5/weather?lat=-30.033056&lon=-51.230000&appid=43d2d1023ae5c6c8a741593c7261b46f&units=metric
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${portoAlegre.lat}&lon=${portoAlegre.lon}&appid=${API_KEY}&units=metric`

export function SEARCH_CIT_GET() {
  return {
    url: `${API_URL}`,
    options: {
      method: 'GET',
    },
  }
}
