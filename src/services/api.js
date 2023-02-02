// export const API_URL = 'https://www.metaweather.com/api'
// const API_KEY = '87b2487435c1c3f65c0b8cc14ad2a3e9'
const API_KEY = '43d2d1023ae5c6c8a741593c7261b46f'

const defaultLocation = {
  lat: '-23.5475',
  lon: '-46.6361',
}

// PORTO ALEGRE
// https://api.openweathermap.org/data/2.5/weather?lat=-30.033056&lon=-51.230000&appid=43d2d1023ae5c6c8a741593c7261b46f&units=metric

// URL DE PRODUÇÃO
// `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// URL DE TESTE - FAKEAPI
// http://localhost:3001/cities?coord.lon=-51.2304&coord.lat=-30.0325

function requestURL(lat, lon, fiveDays) {
  const latitude = lat || defaultLocation.lat
  const longitude = lon || defaultLocation.lon

  if (fiveDays) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  } else {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  }
}

export function SEARCH_CIT_GET(latitude, longitude) {
  return {
    url: requestURL(latitude, longitude),
    options: {
      method: 'GET',
    },
  }
}

export function SEARCH_BY_LOCATION_GET(latitude, longitude) {
  return {
    url: requestURL(latitude, longitude),
    options: {
      method: 'GET',
    },
  }
}

export function FIVE_DAYS_GET(latitude, longitude) {
  return {
    url: requestURL(latitude, longitude, true),
    options: {
      method: 'GET',
    },
  }
}

export function SEARCH_CITY_GET(name) {
  return {
    url: `https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=10&appid=${API_KEY}`,
    options: {
      method: 'GET',
    },
  }
}
