// import '../assets/css/style.css';
import "/assets/css/style.scss";
import react from "../assets/img/react.png"
import _ from 'lodash';
import {ghetto, reverseSentence} from "./stringz/stringUtilz";


function component() {
    const element = document.createElement('div');

   let content = _.join(['Hello', 'webpack'], ' ');

   content = ghetto(content);

   element.innerHTML = content;
   element.innerHTML += '<br>'+ghetto(reverseSentence('My taylor is richer than yours'));


   //ajout d'une image balise en HTML
    const img = document.createElement('img');
    img.src = react;
    img.alt = 'react logo';

    element.append(img);

    return element;
}

document.body.appendChild(component());