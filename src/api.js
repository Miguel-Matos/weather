
const api = (() => {
  const url = 'https://api.weatherapi.com/v1/current.json?key=02c5ebd19167484e92c102243233004&q='
  let value = url + 'tokyo';
  async function getInfo() {
    try {
      const weather = await fetch(value, {mode: 'cors'});
      const response = await weather.json();
      console.log(response);
    } catch {
      alert('Location not found.');
    }
  } 

  return {getInfo}
})();

export {api};