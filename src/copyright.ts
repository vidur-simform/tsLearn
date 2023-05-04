const year = document.getElementById('myele') as HTMLSpanElement;
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime',thisYear );
year.textContent = thisYear;