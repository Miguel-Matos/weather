import './input.css';
import { api } from './api';

// api.getInfo();

const form = (() => {
  const form = document.createElement('form');
  const search = document.createElement('input');
  search.type = 'text';
  search.placeholder = 'Location';
  search.setAttribute('id', 'search');
  form.appendChild(search);

  const submit = document.createElement('button');
  submit.textContent = "Get Weather";
  submit.setAttribute('id', 'submit');
  form.appendChild(submit);

  // const cf = document.createElement('button');
  // cf.textContent = "C/F";
  // cf.setAttribute('id', 'cf');
  // form.appendChild(cf);

  document.body.appendChild(form);

  return {search, submit};
})();

const content = (() => {
  const daWeather = document.createElement('h1');
  daWeather.textContent = "Da Weather";
  
  const location = document.createElement('h2');
  location.setAttribute('id', 'location');

  const country = document.createElement('h4');
  country.setAttribute('id', 'country');

  const condition = document.createElement('p');
  condition.setAttribute('id', 'condition');
  
  const conditionImg = document.createElement('img');
  conditionImg.setAttribute('id', 'conditionImg');

  const temp = document.createElement('p');
  temp.setAttribute('id', 'temp');
  
  document.body.appendChild(daWeather);
  document.body.appendChild(location);
  document.body.appendChild(country);
  document.body.appendChild(condition);
  document.body.appendChild(conditionImg);
  document.body.appendChild(temp);


  return {daWeather, location, country, condition, conditionImg, temp};
})();

const getWeather = (() => {
  // let f = true;
  let place = undefined;
  form.submit.addEventListener('click', (e) => {
    e.preventDefault();

    let value = form.search.value;
    place = value;
    api.callAsync(value);
    form.search.value = '';
  });

  // form.cf.addEventListener('click', (e) => {
  //   e.preventDefault();

  //   if (f === true) {
  //     f = false;
  //     api.callAsync(place);
  //     console.log('C');
  //   } else {
  //     f = true;
  //     api.callAsync(place);
  //     console.log('F');
  //   }
  // });

  // return {f}
})();

export {content, form, getWeather}