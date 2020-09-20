# Rick and Morty-API
*You can see on [RickAndMortyAPI](https://leonelmoyanoo.github.io/RickAndMortyAPI/http:// "RickAndMortyAPI")*
## About project
- Showing 6 random characters from the serie with they description avery time you refresh the page.
- Do it with **JavaScript**, **HTML** and **CSS** (Complemented with **SASS**)

## If you want to clone, this may help you
1. After clone run `npm install --save` to download all dependencies
1. The folders are distributed in
	1. **index.html** *main file,*
	1. **img/** *folder with icons (github and "Rick and Morty")*
	1. **js/** *folder with JavaScript*
		1. **utils/** *folder with functions*
			1. **function.js** *has the functions to show all description when you click on some character*
			1. **randomArray.js** *set a random array to after get the characters*
			1. **setCharacter.js** *using random array get the characters setting all the settings*
		1. **index.js** *main file,. Is not important, only has the description random image*
	1. **css/** *folder with css files, only has one but i edit only the files in SASS folder*
		1. **styles.css**
	1. **sass/** *folder with all styles*
		1. **extends.css** *classes to then @extend on styles.css*
		1. **mix.css** *functions to use with @include on styles.css*
		1. **utils.css** *some classes that help and set differents styles*
		1. **variables.css** *Variables with diferents values to not repeat or make mistakes*
		1. **styles.css** *Here import the other files to use them*

    			@import "./variables.scss";
    			@import "./utils.scss";
    			@import "./mix.scss";
    			@import "./extends.scss";

## How to run SASS
if you edit some SASS' file, run this command in root folder

`sass --watch sass/styles.scss css/styles.css`

This command will compile your scss code and put into styles.css
