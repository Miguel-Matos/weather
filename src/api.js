import { content } from ".";

const api = (() => {
  const url = 'https://api.weatherapi.com/v1/current.json?key=02c5ebd19167484e92c102243233004&q='
  let value = url + 'tokyo';

  async function getInfo() {
    try {
      const weather = await fetch(value, {mode: 'cors'});
      const response = await weather.json();
      return response;
      // console.log(response);
    } catch {
      alert('Location not found.');
    }
  } 

  async function callAsync() {
    const data = await getInfo();
    document.getElementById('location').textContent = data.location.name;
    console.log(data);
  }
  callAsync();

  return {getInfo, callAsync};
})();

export {api};