import './sass/main.scss';
import fetchCountries from './fetchCountries';
const refs = {
    button: document.querySelector('#button'),
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
    e.preventDefault()
    fetchCountries(refs.input.value)
    .then(data => renderColection(data))
    .catch(err => console.log(err))
}
function createItem({capital, population, languages, name, flag}) {
    // const article =  `
    //     <article>
    //         <img src='${strDrinkThumb}' alt='${strDrink}' />
    //         <p>${strDrink}</p>
    //     </article>
    // `
        const article =    `<p>
   Capital: ${capital}
    </p>
    <p>
    Population: ${population}
    </p>
    <p>
   Languages: ${languages[0]}
    </p>
   <p>${name}<p>

    </div>
    <img src="${flag}" alt="Флаг ${name}" width="480" class="country-flag"></img>`
    refs.container.insertAdjacentHTML('beforeend', article)
}

function renderColection(arr) {
     arr.forEach(el => createItem(el));
}

refs.button.addEventListener('click', handlerSubmit)