import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=GpLArYcAtC5ElS5wf35DE6eVVypKrqfGjBi79PI6&date=${date}`);
}