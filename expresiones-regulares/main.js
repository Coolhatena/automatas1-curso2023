import './style.css'
import assertRegex from './assertRegex';

const displayData = (isMatch, matches) => {
	const paragraphText = ( isMatch ) ? 'Se encontró el patrón✅' : 'No se encontró el patrón ❌';
	paragraph.textContent = paragraphText;

	if ( isMatch ) {
		let matchText = "Coincidencias: ";
		matches.forEach( (match, i, array) => {
			matchText += `${match}${(i < array.length - 1)? "," : ""} `
		});
		resultInput.textContent = matchText;
	} 
	else {
		resultInput.textContent = "";
	}
}

const handleButtonClick = () => {	
	const regexResult = assertRegex(stringInput.value, regexInput.value, regexFlagsInput.value);
	const [isMatch, matches] = regexResult;
	displayData(isMatch, matches);
	console.log(matches);
}

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const title = document.createElement("h1");
title.innerHTML = "Practica: Regex"

const regexInput = document.createElement("input");
regexInput.type = "text";
regexInput.placeholder = "Regex"

const regexFlagsInput = document.createElement("input");
regexFlagsInput.type = "text";
regexFlagsInput.placeholder = "Regex flags (Ej. g, i, gi)"

const stringInput = document.createElement("textarea");
stringInput.placeholder = "Texto a probar"

const AssertRegexButton = document.createElement("button");
AssertRegexButton.innerHTML = 'Probar Regex'
AssertRegexButton.type = "button";
AssertRegexButton.onclick = handleButtonClick

const paragraph = document.createElement('p');
paragraph.textContent = "";

const resultInput = document.createElement("textarea");
resultInput.readOnly = true;
resultInput.classList.add("results")
resultInput.placeholder = "Las coincidencias apareceran aqui"


mainContainer.appendChild(title);
mainContainer.appendChild(regexInput);
mainContainer.appendChild(regexFlagsInput);
mainContainer.appendChild(stringInput);
mainContainer.appendChild(AssertRegexButton);
mainContainer.appendChild(paragraph);
mainContainer.appendChild(resultInput);

document.body.appendChild(mainContainer);
