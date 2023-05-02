import { content, form, getWeather } from ".";

const api = (() => {
  const url = 'https://api.weatherapi.com/v1/current.json?key=02c5ebd19167484e92c102243233004&q='

  async function getInfo(place) {
    try {
      let value = url + place;
      const weather = await fetch(value, {mode: 'cors'});
      const response = await weather.json();
      return response;
      // console.log(response);
    } catch {
      alert('Location not found.');
    }
  } 

  async function callAsync(place) {
    const data = await getInfo(place);
    document.getElementById('location').textContent = data.location.name;
    document.getElementById('country').textContent = data.location.country;
    document.getElementById('condition').textContent = data.current.condition.text;
    document.getElementById('conditionImg').src = data.current.condition.icon;
    document.getElementById('temp').textContent = `${data.current.temp_f}°F/${data.current.temp_c}°C`;
    console.log(data);
  }
  callAsync('tokyo');

  return {getInfo, callAsync};
})();



export {api};