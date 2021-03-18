import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: '511b8750c2d1fe59a7aac99a987cca55',
    units: 'metric',
    lang: 'pt_br',
  },
});
