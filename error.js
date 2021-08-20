import { alert, error } from './node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

export default {
  errorOnCountry() {
    error({
      text: 'Too many matches found! Please enter a more spesific query!'
    });
  },
  errorOnPromise(err) {
    error({
      text: err
    });
  },
};