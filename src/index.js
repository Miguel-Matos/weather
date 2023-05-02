import './input.css';
import '../dist/output.css';
import { api } from './api';

// api.getInfo();

const form = (() => {
  const form = document.createElement('form');
  form.classList.add('flex', 'flex-col', 'pt-10', 'pb-8', 'items-center');
  const search = document.createElement('input');
  search.classList.add('border', 'rounded-xl', 'p-2', 'w-4/5', 'sm:w-96', 'focus:bg-slate-100', 'hover:bg-slate-100');
  search.type = 'text';
  search.placeholder = 'Location';
  search.setAttribute('id', 'search');
  form.appendChild(search);

  const submit = document.createElement('button');
  submit.classList.add('bg-white', 'w-32', 'rounded-xl', 'mt-8', 'hover:shadow-xl')
  submit.textContent = "Get Weather";
  submit.setAttribute('id', 'submit');
  form.appendChild(submit);

  // const cf = document.createElement('button');
  // cf.textContent = "C/F";
  // cf.setAttribute('id', 'cf');
  // form.appendChild(cf);

  // document.body.appendChild(form);

  return {search, submit, form};
})();

const content = (() => {
  const daWeather = document.createElement('h1');
  daWeather.textContent = "Da Weather";
  daWeather.classList.add('text-white', 'text-4xl', 'p-2');
  
  const location = document.createElement('h2');
  location.classList.add('text-7xl');
  location.setAttribute('id', 'location');

  const country = document.createElement('h4');
  country.classList.add('text-2xl', 'mt-2');
  country.setAttribute('id', 'country');

  const condition = document.createElement('p');
  condition.classList.add('text-2xl')
  condition.setAttribute('id', 'condition');
  
  const conditionImg = document.createElement('img');
  conditionImg.setAttribute('id', 'conditionImg');
  conditionImg.classList.add('w-72');

  const temp = document.createElement('p');
  temp.classList.add('text-4xl')
  temp.setAttribute('id', 'temp');

  const core = document.createElement('div');
  core.classList.add('flex', 'flex-col', 'items-center', 'text-white', 'gap-3')

  const body = document.querySelector('body', 'text-white');
  
  // document.body.appendChild(daWeather);
  body.appendChild(form.form);
  body.appendChild(core);
  core.appendChild(location);
  core.appendChild(country);
  core.appendChild(conditionImg);
  core.appendChild(temp);
  core.appendChild(condition);


  return {daWeather, location, country, condition, conditionImg, temp, body};
})();

const getWeather = (() => {
  // let f = true;
  let place = 'tokyo';

  form.submit.addEventListener('click', (e) => {
    if (form.search.value !== '') {
      e.preventDefault();

      let value = form.search.value;
      place = value;
      api.callAsync(value);
      form.search.value = '';
    }

  });

  // setInterval(() => {
  //   api.callAsync(place);
  // }, 3000);
  
  return {place};
})();

export {content, form, getWeather}