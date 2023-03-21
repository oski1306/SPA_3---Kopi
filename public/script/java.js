///////////////////////////////////////////////////////////////// Router \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import About  from './templates/About.js'
import Portfolio from './templates/Portfolio.js'
import Contact from './templates/Contact.js'
import PortfolioDetailed from './templates/PortfolioDetailed.js'
import PortfolioDetailed2 from './templates/PortfolioDetailed2.js'

const redirect = url =>{
    history.pushState(null, null, url);
    router();
}

const router = async() =>{
    const routes = [
        {
            path: '/',
            view : About
        },
        {
            path: '/portfolio',
            view : Portfolio
        },
        {
            path: '/contact',
            view : Contact
        },
        {
            path:'/portDetailed',
            view: PortfolioDetailed
        },
        {
            path:'/portDetailed2',
            view: PortfolioDetailed2
        }
    ];
    const potentialMatches = routes.map(route =>{
        return{
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if(!match){
        match = {
            route : routes[0]
        }
    }

    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getPage();
};

window.addEventListener('popstate',router);

document.addEventListener("DOMContentLoaded",()=>{
    document.body.addEventListener('click', e =>{
        if (e.target.matches('[data-link]')){
            e.preventDefault();
            redirect(e.target.href);
        }
    })
    router();
})


///////////////////////////////////////////////////////////////// Translate Module \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const defLocalization = "en";


let localization;

let translate = {};

document.addEventListener("DOMContentLoaded", ()=>{
    setLocale(defLocalization);
    langSwitcher(defLocalization);
});

function langSwitcher(initialValue){
    const switcher = 
    document.querySelector("[changeLanguage]");
    switcher.value = initialValue;
    switcher.onchange = (e) => {
        setLocale(e.target.value);
    }
}

async function setLocale(newLocalization){
    if (newLocalization=== localization) return;
    const newTranslate =
     await fetchTranslateFor(newLocalization);
    localization = newLocalization;
    translate = newTranslate;
    translatePage();
}

async function fetchTranslateFor(newLocalization){
    const response = await fetch("./script/templates/lang/" + newLocalization + ".json");
    return await response.json();
}

function translatePage(){
    document
    .querySelectorAll("[translateKey]")
    .forEach(translateTxt);
}

function translateTxt(word){
    const key = word.getAttribute("translateKey");
    const translation = translate[key];
    word.innerText = translation;
};
