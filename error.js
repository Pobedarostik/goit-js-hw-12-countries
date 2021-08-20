import { alert, error } from './node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

export default {
  errorOnCountry() {
    error({
      text: 'Too many matches found! Please enter a more spesific query!',
      delay: 2000,
    });
  },
  errorOnPromise(err) {
    error({
      text: err,
      delay: 2000,
    });
  },
};