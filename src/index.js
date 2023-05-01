import './input.css';
import { api } from './api';

// api.getInfo();

const content = (() => {
  const daWeather = document.createElement('h1');
  daWeather.textContent = "Da Weather";
  
  const location = document.createElement('h2');
  location.setAttribute('id', 'location');
  
  
  document.body.appendChild(daWeather);
  document.body.appendChild(location);

  return {daWeather, location};
})();

export {content}