import './style.css';
import { apiCall } from './apicall.js';
import { displayResult } from './display.js';
import { getInput } from './getinput.js';

const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", (e) => {
  const locationInput = getInput();

  apiCall(locationInput).then(data => {
    displayResult(data);
  }).catch(err => {
    console.error("Error fetching data: ", err);
  });
});
