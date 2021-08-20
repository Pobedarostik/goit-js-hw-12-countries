import errors from '../error.js'
export default function fetchCountries(searchQuery) {
  return  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => response.json())
        .catch(err => errors.errorOnPromise(err))
};

