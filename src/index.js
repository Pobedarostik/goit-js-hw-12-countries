import './sass/main.scss';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import fullCountry from '../fullCountry.hbs';
import onlyName from '../onlyName.hbs';
import errors from '../error.js'

const refs = {
    input: document.querySelector('#search'),
    container: document.querySelector('.container'),
};


// const handlerSubmit = (e) => {
//     e.preventDefault()
//     const value = refs.input.value
//     fetch(`https://restcountries.eu/rest/v2/name/${value}`)
//         .then(response => response.json())
//         .then(data => renderColection(data))
//         .catch(err => console.log(err))
// };

const handlerSubmit = (e) => {

    fetchCountries(refs.input.value)
        .then(data => createItem(data))
        .catch(err => console.log(err))
    
};


function createItem(countries) {
    if (countries.length === 1) {
        const markup = fullCountry(countries);
        refs.container.innerHTML = markup;
        refs.input.value = '';
    } else if  (countries.length >= 2 && countries.length <= 10) {
        const markup = onlyName(countries);
        refs.container.innerHTML = markup;
        refs.input.value = '';
    } else {
        errors.errorOnCountry();
        refs.container.innerHTML = "";
    };
    
}

refs.input.addEventListener('input', debounce(handlerSubmit, 500));