import './style.css'
import assertRegex from './assertRegex';

const handleButtonClick = () => {	
	const paragraphText = assertRegex(stringInput.value, regexInput.value)
	paragraph.textContent = paragraphText;
}

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const title = document.createElement("h1");
title.innerHTML = "Practica: Regex"

const regexInput = document.createElement("input");
regexInput.type = "text";
regexInput.placeholder = "Regex"

const stringInput = document.createElement("textarea");
stringInput.placeholder = "Texto a probar"



const AssertRegexButton = document.createElement("button");
AssertRegexButton.innerHTML = 'Probar Regex'
AssertRegexButton.type = "button";
AssertRegexButton.onclick = handleButtonClick

const paragraph = document.createElement('p');
paragraph.textContent = "";


mainContainer.appendChild(title);
mainContainer.appendChild(regexInput);
mainContainer.appendChild(stringInput);
mainContainer.appendChild(AssertRegexButton);
mainContainer.appendChild(paragraph);

document.body.appendChild(mainContainer);
