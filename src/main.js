import './style/style.scss';
import timer from './JavaScript/timer.js';
import fillContent from './JavaScript/content.js';
const body = document.querySelector('body');
body.innerHTML = fillContent();
timer()
