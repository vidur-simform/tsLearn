"use strict";
const year = document.getElementById('myele');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
