(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-md\">\n  <nav class=\"navbar navbar-light\" style=\"background-color: #fff;\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"/assets/img/D&Dlogo_stacked.jpg\" width=\"105\" height=\"30\" class=\"d-inline-block align-top\"\n        alt=\"Dungeons and Dragons Character Creator\">\n      Character Creator\n    </a>\n  </nav>\n  <header>\n    <h1>\n      Roll Initiative\n    </h1>\n  </header>\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/character-sheet/character-sheet.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/character-sheet/character-sheet.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\" style=\"display:block;\">\n        <h2>Character Sheet</h2>\n        <div id=\"character_info\">\n            <p>Name: {{oneCharacter.name}}</p>\n            <p>Class: Level {{oneCharacter.character_class.length}} {{oneCharacter.character_class}}</p>\n            <p>Race: {{oneCharacter.race}}</p>\n            <p>Experience: {{oneCharacter.exp}}</p>\n            {{\"Skill: \"+ allSkills[2].name}}\n            {{oneCharacter.skills[1].name}}\n\n        </div>\n    </div>\n    <!--end of row-->\n\n    <div class=\"row\">\n        <div class=\"col\" id=\"stats_and_skills\">\n            <div id=\"str\" class=\"stat_block\">\n                <h3>STR</h3>\n                <p>{{oneCharacter.stats[0].strength}}</p>\n                <h3>Mod</h3>\n                <p>\n                    {{(oneCharacter.stats[0].strength - 10.1) / 2 | number:'1.0-0'}}\n\n                </p>\n                <h4>Save: {{(oneCharacter.stats[0].strength - 10.1) / 2 | number:'1.0-0'}}</h4>\n                <h4>Skills</h4>\n                <ul>\n                    <li>Athletics:\n                        {{(listOfProf[3] * ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].strength - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                </ul>\n            </div>\n            <div id=\"dex\" class=\"stat_block\">\n                <h3>DEX</h3>\n                <p>{{oneCharacter.stats[0].dexterity}}</p>\n                <h3>Mod</h3>\n                <p>\n                    {{(oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}\n\n                </p>\n                <h4>Save: {{(oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}</h4>\n                <h4>Skills</h4>\n                <ul>\n                    <li>Acrobatics:\n                        {{(listOfProf[0]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Sleight of Hand:\n                        {{(listOfProf[15]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Stealth:\n                        {{(listOfProf[16]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                </ul>\n\n            </div>\n            <div id=\"con\" class=\"stat_block\">\n                <h3>CON</h3>\n                <p>{{oneCharacter.stats[0].constitution}}</p>\n                <h3>Mod</h3>\n                <p>\n                    {{(oneCharacter.stats[0].constitution - 10.1) / 2 | number:'1.0-0'}}\n\n                </p>\n                <h4>Save: {{(oneCharacter.stats[0] - 10.1) / 2 | number:'1.0-0'}}</h4>\n            </div>\n            <div id=\"int\" class=\"stat_block\">\n                <h3>INT</h3>\n                <p>{{oneCharacter.stats[0].intelligence}}</p>\n                <h3>Mod</h3>\n                <p>\n                    {{(oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\n\n                </p>\n                <h4>Save: {{(oneCharacter.stats[0] - 10.1) / 2 | number:'1.0-0'}}</h4>\n                <h4>Skills</h4>\n                <ul>\n                    <li>Arcana:\n                        {{(listOfProf[2]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>History:\n                        {{(listOfProf[5]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Investigation:\n                        {{(listOfProf[8]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Nature:\n                        {{(listOfProf[10]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Religion:\n                        {{(listOfProf[14]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                </ul>\n            </div>\n            <div id=\"wis\" class=\"stat_block\">\n                <h3>WIS</h3>\n                <p>{{oneCharacter.stats[0].wisdom}}</p>\n                <h3>Mod</h3>\n                <p>\n                    {{(oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\n\n                </p>\n                <h4>Save: {{(oneCharacter.stats[0] - 10.1) / 2 | number:'1.0-0'}}</h4>\n                <h4>Skills</h4>\n                <ul>\n                    <li>Animal Handling:\n                        {{(listOfProf[1]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Insight:\n                        {{(listOfProf[6]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Medicine:\n                        {{(listOfProf[9]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Perception:\n                        {{(listOfProf[11]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Survival:\n                        {{(listOfProf[17]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                </ul>\n            </div>\n            <div id=\"cha\" class=\"stat_block\">\n                <h3>CHA</h3>\n                <p>{{oneCharacter.stats[0].charisma}}</p>\n                <h3>Mod</h3>\n                <p>\n                    {{(oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\n\n                </p>\n                <h4>Save: {{(oneCharacter.stats[0] - 10.1) / 2 | number:'1.0-0'}}</h4>\n                <h4>Skills</h4>\n                <ul>\n                    <li>Deception:\n                        {{(listOfProf[4]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Intimidation:\n                        {{(listOfProf[7]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Performance:\n                        {{(listOfProf[12] * ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n                    <li>Persuasion:\n                        {{(listOfProf[13]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n        <!--end of stats_and_skills column-->\n\n        <div class=\"col\" id=\"combat\">\n            <div>\n                <h3>Proficiency Bonus </h3>\n                <p>{{ ((oneCharacter.character_class.length)+7)/4 | number:'1.0-0'}}</p>\n            </div>\n            <div>\n                <h3>Initiative</h3>\n                <p>{{ (oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}</p>\n            </div>\n            <div>\n                <h3>AC</h3>\n                <div>{{ 10+(oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}</div>\n            </div>\n            <div>\n                <h3>Max Health</h3>\n                <p>{{ characterHP + (oneCharacter.stats[0].constitution - 10.1) / 2 | number:'1.0-0'}}</p>\n            </div>\n            <div>\n                <h3>Skill Proficiencies</h3>\n                <div *ngFor=\"let skill of oneCharacter.skills\">\n                    {{skill.name}}\n\n                </div>\n            </div>\n        </div>\n        <!--end of combat column-->\n\n        <div class=\"col\" id=\"features_and_spells\">\n            <div id=\"features\">\n                <h3>Features</h3>\n                <ul *ngFor=\"let f of classFeatures\">\n                    <li>{{f.name}}</li>\n                </ul>\n            </div>\n            <!--end of features-->\n            <div id=\"spells\">\n                <h3>Spells</h3>\n                <div *ngFor=\"let level of oneCharacter.spells\">\n                    <div *ngFor=\"let spell of level\">\n                        <p>{{spell.name}}</p>\n                    </div>\n                </div>\n            </div>\n            <!--end of spells-->\n        </div>\n        <!--end of features column-->\n\n    </div>\n    <!--end of row-->\n\n</div>\n<!--end of container-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<ng-sidebar-container style=\"height: 100vh; width: 100%; display: inline-block; vertical-align: top;\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"create.component.css\">\n</head>\n    <ng-sidebar [(opened)]=\"_opened\" position=\"left\"\n        style=\"display: inline-block;width:100px; height: 100%; margin:20px;padding:5px; padding-top: 30%;\">\n        <ul>\n            <li style='margin-top: 50px;'>Name: {{newCharacter.name}}</li>\n            <li>Race: {{newCharacter.race}}</li>\n            <li>Class: {{newCharacter.character_class}}</li>\n        </ul>\n        <span>Skills:</span>\n        <ul *ngFor='let skill of newCharacter.skills'>\n            <li>{{skill.name}}</li>\n        </ul>\n        <span>Stats:</span>\n        <ul>\n            <li>Strength: {{newCharacter.stats.strength}}</li>\n            <li>Dexterity: {{newCharacter.stats.dexterity}}</li>\n            <li>Constitution: {{newCharacter.stats.constitution}}</li>\n            <li>Intelligence: {{newCharacter.stats.intelligence}}</li>\n            <li>Wisdom: {{newCharacter.stats.wisdom}}</li>\n            <li>Charisma: {{newCharacter.stats.charisma}}</li>\n\n        </ul>\n    </ng-sidebar>\n    <div ng-sidebar-content style='margin-left: 200px;'>\n\n        <body>\n            <div *ngFor='let err of errors'>\n                <p>{{err}}</p>\n            </div>\n            <form (submit)=\"createCharacter()\">\n                <label>Name: </label>\n                <input type=\"text\" name=\"newCharacter.name\" [(ngModel)]=\"newCharacter.name\" /><br>\n                <label>Bio/Description:</label><br>\n                <textarea type=\"textarea\" rows=\"4\" cols=\"50\" name=\"newCharacter.description\"\n                    [(ngModel)]=\"newCharacter.description\"></textarea><br>\n                <div *ngIf='newCharacter'>\n                    <h3>Chosen Race: {{newCharacter.race}}</h3>\n                    <img (click)=\"chooseRace('Dwarf', 'dwarf')\" src=\"../../assets/img/Dwarf.png\" alt=\"Dwarf\">\n                    <img (click)=\"chooseRace('Elf', 'elf')\" src=\"../../assets/img/Elf.png\" alt=\"Elf\">\n                    <img (click)=\"chooseRace('Halfling', 'halfling')\" src=\"../../assets/img/Halfling.png\" alt=\"Halfling\">\n                    <img (click)=\"chooseRace('Human', 'human')\" src=\"../../assets/img/human.png\" alt=\"human\">\n                    <img (click)=\"chooseRace('Dragonborn', 'dragonborn')\" src=\"../../assets/img/Dragonborn.png\" alt=\"dragonborn\">\n                    <img (click)=\"chooseRace('Gnome', 'gnome')\" src=\"../../assets/img/Gnome.png\" alt=\"Gnome\">\n                    <img (click)=\"chooseRace('Half-Elf', 'half-elf')\" src=\"../../assets/img/Half-elf.png\" alt=\"Half-elf\">\n                    <img (click)=\"chooseRace('Half-orc', 'half-orc')\" src=\"../../assets/img/Half-orc.png\" alt=\"Half-Orc\">\n                    <img (click)=\"chooseRace('Tiefling', 'tiefling')\" src=\"../../assets/img/Tiefling.png\" alt=\"Tiefling\">\n                    <div *ngIf='oneRace'>\n                        <b>Alignment:</b> {{this.oneRace.alignment}}<br>\n                        <b>Age:</b> {{this.oneRace.age}}<br>\n                        <b>Size:</b> {{this.oneRace.size}}, {{this.oneRace.size_description}}\n                    </div>\n                </div>\n                <div *ngIf='newCharacter.race'>\n                    <h3>Chosen Class: {{newCharacter.character_class}}</h3>\n                    <img (click)=\"chooseClass('Barbarian', 'barbarian')\" src=\"../../assets/img/Barbarian.png\" alt=\"Barbarian\">\n                    <img (click)=\"chooseClass('Bard', 'bard')\" src=\"../../assets/img/Bard.png\" alt=\"Bard\">\n                    <img (click)=\"chooseClass('Cleric', 'cleric')\" src=\"../../assets/img/Cleric.png\" alt=\"Cleric\">\n                    <img (click)=\"chooseClass('Druid', 'druid')\" src=\"../../assets/img/Druid.png\" alt=\"Druid\">\n                    <img (click)=\"chooseClass('Fighter', 'fighter')\" src=\"../../assets/img/Fighter.png\" alt=\"Fighter\">\n                    <img (click)=\"chooseClass('Monk', 'monk')\" src=\"../../assets/img/Monk.png\" alt=\"Monk\">\n                    <img (click)=\"chooseClass('Paladin', 'paladin')\" src=\"../../assets/img/Paladin.png\" alt=\"Paladin\">\n                    <img (click)=\"chooseClass('Ranger', 'ranger')\" src=\"../../assets/img/Ranger.png\" alt=\"Ranger\">\n                    <img (click)=\"chooseClass('Rogue', 'rogue')\" src=\"../../assets/img/Rogue.png\" alt=\"Rogure\">\n                    <img (click)=\"chooseClass('Sorcerer', 'sorcerer')\" src=\"../../assets/img/Sorcerer.png\" alt=\"Sorcerer\">\n                    <img (click)=\"chooseClass('Warlock', 'warlock')\" src=\"../../assets/img/Warlock.png\" alt=\"Warlock\">\n                    <img (click)=\"chooseClass('Wizard', 'wizard')\" src=\"../../assets/img/Wizard.png\" alt=\"Wizard\">\n                </div>\n            </form>\n            <div class=\"root\">\n                <app-pick-attributes *ngIf=\"classIndex\" [classIndex]=\"classIndex\" [newCharacter]='newCharacter'\n                    (add)=\"onUpdate($event)\"></app-pick-attributes>\n            </div>\n        </body>\n    </div>\n</ng-sidebar-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n<button [routerLink]=\"['/characters/create']\">Create a new Hero</button><br>\n\n<table class=\"table table-striped\">\n    <thead class=\"thead-dark\">\n    <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Race</th>\n        <th scope=\"col\">Class</th>\n        <th scope=\"col\">Description</th>\n        <th scope=\"col\">Actions</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr scope=\"row\" *ngFor=\"let character of allCharacters\">\n        <td>{{character.name}}</td>\n        <td>{{character.race}}</td>\n        <td>{{character.character_class}}</td>\n        <td>{{character.description}}</td>\n        <td>\n            <button [routerLink]=\"['/character/show', character._id]\">View Sheet</button><br>\n            <button [routerLink]=\"['/character', character._id]\">Enhance a Hero</button><br>\n            <button (click) =\"destroyOneCharacter(character._id)\">Retire</button><br>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n</div><!--end of container-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pick-attributes/pick-attributes.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pick-attributes/pick-attributes.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf='characterClass'>\n    <h1>Class: {{characterClass.name}}</h1>\n    <div>\n        <h4>Hit-Die: {{characterClass['hit_die']}}</h4>\n        <h4>Saving-Throws</h4>\n        <div>\n            <ul *ngFor=\"let throw of characterClass['saving_throws']\">\n                <li>{{throw.name}}</li>\n            </ul>\n        </div>\n        <div *ngIf='classFeatures.length>0'>\n            <h4>Class Features:</h4>\n            <ul *ngFor='let f of classFeatures'>\n                <li>{{f.name}}</li>\n            </ul>\n        </div>\n        <div>\n            <h4>Class Proficiencies</h4>\n            <ul *ngFor=\" let pros of characterClass['proficiencies']\">\n                <li>{{pros.name}}</li>\n            </ul>\n        </div>\n    </div>\n    <h2>Choose Your Attributes</h2>\n    <h3>Choose {{characterClass['proficiency_choices'][0]['choose']}} Skills:</h3>\n    <div style='vertical-align: top; display: inline-block' *ngFor=\"let skill of  classSkills\">\n        <button style='margin:3px' *ngIf='skill.added==false' (click)='addSkill(skill)'>{{skill.name}}</button>\n        <button style='background-color: red; margin:3px; color:white' *ngIf='skill.added==true'\n            (click)='cancelSkill(skill)'>{{skill.name}}</button>\n    </div>\n</div>\n<div *ngIf='classSpells'>\n    <div *ngFor=\"let level of classSpells; let i = index\" [attr.data-index]='i'>\n        <div *ngIf=\"level.length>0\">\n            <h3>Pick {{spellLimit}} Spells from level {{i}} spells</h3>\n            <div style='vertical-align: top; display: inline-block' *ngFor='let spell of level'>\n                <button style='margin:3px' *ngIf='spell.added==false'\n                    (click)='addSpell(spell, i)'>{{spell.name}}</button>\n                <button style='margin:3px; background-color: red; color: white' *ngIf='spell.added==true'\n                    (click)='cancelSpell(spell, i)'>{{spell.name}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div>\n    <h4>Choose Stats:</h4>\n    <div>\n        <span *ngIf= 'stats.strength == null'>Strength: </span>\n        <span *ngIf= 'stats.strength != null' style=\"color: red; text-decoration: underline;\">Strength: is {{stats.strength}}</span>\n\n        <button *ngIf= 'stats.strength!=8' style='margin:10px;' (click)='addStat(\"strength\", 8 )'>8</button>\n        <button *ngIf= 'stats.strength == 8' style='background-color: red; color:white;' (click)='addStat(\"strength\", 8)'>8</button>\n\n        <button *ngIf= 'stats.strength!=10' style='margin:10px;' (click)='addStat(\"strength\", 10 )'>10</button>\n        <button *ngIf= 'stats.strength == 10' style='background-color: red; color:white;' (click)='addStat(\"strength\", 10)'>10</button>\n\n        <button *ngIf= 'stats.strength!=12' style='margin:10px;' (click)='addStat(\"strength\", 12 )'>12</button>\n        <button *ngIf= 'stats.strength == 12' style='background-color: red; color:white;' (click)='addStat(\"strength\", 12)'>12</button>\n\n        <button *ngIf= 'stats.strength!=13' style='margin:10px;' (click)='addStat(\"strength\", 13 )'>13</button>\n        <button *ngIf= 'stats.strength == 13' style='background-color: red; color:white;' (click)='addStat(\"strength\", 13)'>13</button>\n\n        <button *ngIf= 'stats.strength!=14' style='margin:10px;' (click)='addStat(\"strength\", 14 )'>14</button>\n        <button *ngIf= 'stats.strength == 14' style='background-color: red; color:white;' (click)='addStat(\"strength\", 14)'>14</button>\n\n        <button *ngIf= 'stats.strength!=15' style='margin:10px;' (click)='addStat(\"strength\", 15 )'>15</button>\n        <button *ngIf= 'stats.strength == 15' style='background-color: red; color:white;' (click)='addStat(\"strength\", 15)'>15</button>\n    </div>\n    <div>\n        <span *ngIf= 'stats.dexterity == null'>Dexterity: </span>\n        <span *ngIf= 'stats.dexterity != null' style=\"color: red; text-decoration: underline;\">Dexterity: is {{stats.dexterity}}</span>\n\n        <button *ngIf= 'stats.dexterity!=8' style='margin:10px;' (click)='addStat(\"dexterity\", 8 )'>8</button>\n        <button *ngIf= 'stats.dexterity == 8' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 8)'>8</button>\n\n        <button *ngIf= 'stats.dexterity!=10' style='margin:10px;' (click)='addStat(\"dexterity\", 10 )'>10</button>\n        <button *ngIf= 'stats.dexterity == 10' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 10)'>10</button>\n\n        <button *ngIf= 'stats.dexterity!=12' style='margin:10px;' (click)='addStat(\"dexterity\", 12 )'>12</button>\n        <button *ngIf= 'stats.dexterity == 12' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 12)'>12</button>\n\n        <button *ngIf= 'stats.dexterity!=13' style='margin:10px;' (click)='addStat(\"dexterity\", 13 )'>13</button>\n        <button *ngIf= 'stats.dexterity == 13' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 13)'>13</button>\n\n        <button *ngIf= 'stats.dexterity!=14' style='margin:10px;' (click)='addStat(\"dexterity\", 14 )'>14</button>\n        <button *ngIf= 'stats.dexterity == 14' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 14)'>14</button>\n\n        <button *ngIf= 'stats.dexterity!=15' style='margin:10px;' (click)='addStat(\"dexterity\", 15 )'>15</button>\n        <button *ngIf= 'stats.dexterity == 15' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 15)'>15</button>\n        \n        \n    </div>\n    <div>\n        <span *ngIf= 'stats.constitution == null'>Constitution: </span>\n        <span *ngIf= 'stats.constitution != null' style=\"color: red; text-decoration: underline;\">Constitution: is {{stats.constitution}}</span>\n\n        <button *ngIf= 'stats.constitution!=8' style='margin:10px;' (click)='addStat(\"constitution\", 8 )'>8</button>\n        <button *ngIf= 'stats.constitution == 8' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 8)'>8</button>\n\n        <button *ngIf= 'stats.constitution!=10' style='margin:10px;' (click)='addStat(\"constitution\", 10 )'>10</button>\n        <button *ngIf= 'stats.constitution == 10' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 10)'>10</button>\n\n        <button *ngIf= 'stats.constitution!=12' style='margin:10px;' (click)='addStat(\"constitution\", 12 )'>12</button>\n        <button *ngIf= 'stats.constitution == 12' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 12)'>12</button>\n\n        <button *ngIf= 'stats.constitution!=13' style='margin:10px;' (click)='addStat(\"constitution\", 13 )'>13</button>\n        <button *ngIf= 'stats.constitution == 13' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 13)'>13</button>\n\n        <button *ngIf= 'stats.constitution!=14' style='margin:10px;' (click)='addStat(\"constitution\", 14 )'>14</button>\n        <button *ngIf= 'stats.constitution == 14' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 14)'>14</button>\n\n        <button *ngIf= 'stats.constitution!=15' style='margin:10px;' (click)='addStat(\"constitution\", 15 )'>15</button>\n        <button *ngIf= 'stats.constitution == 15' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 15)'>15</button>\n        \n    </div>\n    <div>\n        <span *ngIf= 'stats.intelligence == null'>Intelligence: </span>\n        <span *ngIf= 'stats.intelligence != null' style=\"color: red; text-decoration: underline;\">Intelligence: is {{stats.intelligence}}</span>\n\n        <button *ngIf= 'stats.intelligence!=8' style='margin:10px;' (click)='addStat(\"intelligence\", 8 )'>8</button>\n        <button *ngIf= 'stats.intelligence == 8' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 8)'>8</button>\n\n        <button *ngIf= 'stats.intelligence!=10' style='margin:10px;' (click)='addStat(\"intelligence\", 10 )'>10</button>\n        <button *ngIf= 'stats.intelligence == 10' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 10)'>10</button>\n\n        <button *ngIf= 'stats.intelligence!=12' style='margin:10px;' (click)='addStat(\"intelligence\", 12 )'>12</button>\n        <button *ngIf= 'stats.intelligence == 12' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 12)'>12</button>\n\n        <button *ngIf= 'stats.intelligence!=13' style='margin:10px;' (click)='addStat(\"intelligence\", 13 )'>13</button>\n        <button *ngIf= 'stats.intelligence == 13' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 13)'>13</button>\n\n        <button *ngIf= 'stats.intelligence!=14'  style='margin:10px;' (click)='addStat(\"intelligence\", 14 )'>14</button>\n        <button *ngIf= 'stats.intelligence == 14' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 14)'>14</button>\n\n        <button *ngIf= 'stats.intelligence!=15' style='margin:10px;' (click)='addStat(\"intelligence\", 15 )'>15</button>\n        <button *ngIf= 'stats.intelligence == 15' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 15)'>15</button>\n        \n    </div>\n    <div>\n        <span *ngIf= 'stats.wisdom == null'>Wisdom: </span>\n        <span *ngIf= 'stats.wisdom != null' style=\"color: red; text-decoration: underline;\">Wisdom: is {{stats.wisdom}}</span>\n\n        <button *ngIf= 'stats.wisdom!=8' style='margin:10px;' (click)='addStat(\"wisdom\", 8 )'>8</button>\n        <button *ngIf= 'stats.wisdom == 8' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 8)'>8</button>\n\n        <button *ngIf= 'stats.wisdom!=10' style='margin:10px;' (click)='addStat(\"wisdom\", 10 )'>10</button>\n        <button *ngIf= 'stats.wisdom == 10' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 10)'>10</button>\n\n        <button *ngIf= 'stats.wisdom!=12'  style='margin:10px;' (click)='addStat(\"wisdom\", 12 )'>12</button>\n        <button *ngIf= 'stats.wisdom == 12' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 12)'>12</button>\n\n        <button *ngIf= 'stats.wisdom!=13' style='margin:10px;' (click)='addStat(\"wisdom\", 13 )'>13</button>\n        <button *ngIf= 'stats.wisdom == 13' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 13)'>13</button>\n\n        <button *ngIf= 'stats.wisdom!=14' style='margin:10px;' (click)='addStat(\"wisdom\", 14 )'>14</button>\n        <button *ngIf= 'stats.wisdom == 14' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 14)'>14</button>\n\n        <button *ngIf= 'stats.wisdom!=15' style='margin:10px;' (click)='addStat(\"wisdom\", 15 )'>15</button>\n        <button *ngIf= 'stats.wisdom == 15' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 15)'>15</button>\n    </div>\n    <div>\n        <span *ngIf= 'stats.charisma == null'>Charisma: </span>\n        <span *ngIf= 'stats.charisma != null' style=\"color: red; text-decoration: underline;\">Charisma: is {{stats.charisma}}</span>\n\n        <button *ngIf= 'stats.charisma!=8' style='margin:10px;' (click)='addStat(\"charisma\", 8 )'>8</button>\n        <button *ngIf= 'stats.charisma == 8' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 8)'>8</button>\n\n        <button *ngIf= 'stats.charisma!=10' style='margin:10px;' (click)='addStat(\"charisma\", 10 )'>10</button>\n        <button *ngIf= 'stats.charisma == 10' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 10)'>10</button>\n\n        <button *ngIf= 'stats.charisma!=12' style='margin:10px;' (click)='addStat(\"charisma\", 12 )'>12</button>\n        <button *ngIf= 'stats.charisma == 12' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 12)'>12</button>\n\n        <button *ngIf= 'stats.charisma!=13' style='margin:10px;' (click)='addStat(\"charisma\", 13 )'>13</button>\n        <button *ngIf= 'stats.charisma == 13' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 13)'>13</button>\n\n        <button *ngIf= 'stats.charisma!=14' style='margin:10px;' (click)='addStat(\"charisma\", 14 )'>14</button>\n        <button *ngIf= 'stats.charisma == 14' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 14)'>14</button>\n\n        <button *ngIf= 'stats.charisma!=15' (click)='addStat(\"charisma\", 15 )'>15</button>\n        <button *ngIf= 'stats.charisma == 15' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 15)'>15</button>\n    </div>\n</div>\n<div *ngIf= 'errors'>\n    <div *ngFor= 'let err of errors'>\n        <p style='color:red; font-size: large;'>{{err}}</p>\n    </div>\n</div>\n<button style='background-image: linear-gradient(rgb(235, 222, 153),gold,gold, rgb(235, 222, 153)); box-shadow: 5px 5px rgb(41, 36, 9); color: white; width:300px; height: 100px;margin-top:20px; margin-left: 30%; border-radius: 5px; ' (click)='createCharacter()'>Create Character</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stat/stat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stat/stat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div *ngFor=\"let err of errors\">\n    <p style=\"color:red;\">{{err}}</p>\n</div>\n<form (submit)=\"updateCharacter()\">\n    <label for=\"STR\">STR\n        <input type=\"radio\" name=\"STR\" value=\"9\"> 9\n        <input type=\"radio\" name=\"STR\" value=\"10\"> 10\n        <input type=\"radio\" name=\"STR\" value=\"12\"> 12\n        <input type=\"radio\" name=\"STR\" value=\"13\"> 13\n        <input type=\"radio\" name=\"STR\" value=\"14\"> 14\n        <input type=\"radio\" name=\"STR\" value=\"15\"> 15<br>\n    </label>\n    <label for=\"DEX\">DEX\n        <input type=\"radio\" name=\"DEX\" value=\"9\"> 9\n        <input type=\"radio\" name=\"DEX\" value=\"10\"> 10\n        <input type=\"radio\" name=\"DEX\" value=\"12\"> 12\n        <input type=\"radio\" name=\"DEX\" value=\"13\"> 13\n        <input type=\"radio\" name=\"DEX\" value=\"14\"> 14\n        <input type=\"radio\" name=\"DEX\" value=\"15\"> 15<br>\n    </label>\n    <label for=\"CON\">CON\n        <input type=\"radio\" name=\"CON\" value=\"9\"> 9\n        <input type=\"radio\" name=\"CON\" value=\"10\"> 10\n        <input type=\"radio\" name=\"CON\" value=\"12\"> 12\n        <input type=\"radio\" name=\"CON\" value=\"13\"> 13\n        <input type=\"radio\" name=\"CON\" value=\"14\"> 14\n        <input type=\"radio\" name=\"CON\" value=\"15\"> 15<br>\n    </label>\n    <label for=\"INT\">INT\n        <input type=\"radio\" name=\"INT\" value=\"9\"> 9\n        <input type=\"radio\" name=\"INT\" value=\"10\"> 10\n        <input type=\"radio\" name=\"INT\" value=\"12\"> 12\n        <input type=\"radio\" name=\"INT\" value=\"13\"> 13\n        <input type=\"radio\" name=\"INT\" value=\"14\"> 14\n        <input type=\"radio\" name=\"INT\" value=\"15\"> 15<br>\n    </label>\n    <label for=\"WIS\">WIS\n        <input type=\"radio\" name=\"WIS\" value=\"9\"> 9\n        <input type=\"radio\" name=\"WIS\" value=\"10\"> 10\n        <input type=\"radio\" name=\"WIS\" value=\"12\"> 12\n        <input type=\"radio\" name=\"WIS\" value=\"13\"> 13\n        <input type=\"radio\" name=\"WIS\" value=\"14\"> 14\n        <input type=\"radio\" name=\"WIS\" value=\"15\"> 15<br>\n    </label>\n    <label for=\"CHA\">CHA\n        <input type=\"radio\" name=\"CHA\" value=\"9\"> 9\n        <input type=\"radio\" name=\"CHA\" value=\"10\"> 10\n        <input type=\"radio\" name=\"CHA\" value=\"12\"> 12\n        <input type=\"radio\" name=\"CHA\" value=\"13\"> 13\n        <input type=\"radio\" name=\"CHA\" value=\"14\"> 14\n        <input type=\"radio\" name=\"CHA\" value=\"15\"> 15<br>\n    </label>\n    <input type=\"submit\">\n    </form> ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./character-sheet/character-sheet.component */ "./src/app/character-sheet/character-sheet.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");







var routes = [
    { path: '', redirectTo: '/characters', pathMatch: "full" },
    { path: 'characters', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'character/show/:id', component: _character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_4__["CharacterSheetComponent"] },
    { path: 'characters/create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/characters/create' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./character-sheet/character-sheet.component */ "./src/app/character-sheet/character-sheet.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _stat_stat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stat/stat.component */ "./src/app/stat/stat.component.ts");
/* harmony import */ var _pick_attributes_pick_attributes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pick-attributes/pick-attributes.component */ "./src/app/pick-attributes/pick-attributes.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _stat_stat_component__WEBPACK_IMPORTED_MODULE_13__["StatComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_10__["CharacterSheetComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_12__["CreateComponent"],
                _pick_attributes_pick_attributes_component__WEBPACK_IMPORTED_MODULE_14__["PickAttributesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"].forRoot()
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/character-sheet/character-sheet.component.css":
/*!***************************************************************!*\
  !*** ./src/app/character-sheet/character-sheet.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n    margin-bottom: 10px;\n}\n#character_info{\n    border: 1px solid black;\n    padding: 20px;\n}\n#stats_and_skills{\n    display: inline-block;\n    text-align: center;\n}\n#combat{\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n    margin-left: 30px;\n}\n.stat_block{\n    padding: 20px;\n    border: 1px solid black;\n}\n#features_and_spells{\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n    margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLXNoZWV0L2NoYXJhY3Rlci1zaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXItc2hlZXQvY2hhcmFjdGVyLXNoZWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI2NoYXJhY3Rlcl9pbmZve1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4jc3RhdHNfYW5kX3NraWxsc3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2NvbWJhdHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4uc3RhdF9ibG9ja3tcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuI2ZlYXR1cmVzX2FuZF9zcGVsbHN7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/character-sheet/character-sheet.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/character-sheet/character-sheet.component.ts ***!
  \**************************************************************/
/*! exports provided: CharacterSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheetComponent", function() { return CharacterSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CharacterSheetComponent = /** @class */ (function () {
    function CharacterSheetComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.allSkills = [];
        this.listOfProf = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
    }
    CharacterSheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getOneCharacterFromService(params['id']);
            _this.getAllSkillsFromService();
        });
        this.classFeatures = [];
        this.firstLevelClass = this.oneCharacter.character_class[0];
        this.totalLevel = this.oneCharacter.character_class.length;
    };
    CharacterSheetComponent.prototype.getOneCharacterFromService = function (id) {
        var _this = this;
        var observable = this._httpService.getOneCharacter(id);
        observable.subscribe(function (data) {
            _this.oneCharacter = data['results'];
            _this.getAllFeatures();
            _this.getAllSkillsFromService();
            console.log("I'm here now");
            _this.getHpFromClass(_this.oneCharacter.character_class[0]);
            console.log(_this.listOfProf);
            _this.profCheck();
        });
    };
    CharacterSheetComponent.prototype.profCheck = function () {
        console.log(this.oneCharacter.skills[0].name);
        console.log("Skill: " + this.allSkills[2].name);
        for (var i = 0; i < this.oneCharacter.skills.length; i++) {
            for (var j = 0; j < this.allSkills.length; j++) {
                if (this.oneCharacter.skills[i].name == "Skill: " + this.allSkills[j].name) {
                    this.listOfProf[j] = 1;
                    console.log("We found a match!");
                }
            }
        }
    };
    CharacterSheetComponent.prototype.getAllSkillsFromService = function () {
        var _this = this;
        var obs = this._httpService.getAllSkills();
        obs.subscribe(function (data) {
            if (data['results']) {
                _this.allSkills = data['results'];
                console.log(_this.allSkills);
            }
        });
    };
    CharacterSheetComponent.prototype.getAllFeatures = function () {
        var _this = this;
        this.classFeatures = [];
        var character_class_name = this.oneCharacter.character_class[0];
        var character_level = this.oneCharacter.character_class.length;
        console.log(character_level);
        console.log(character_class_name);
        for (var i = character_level; i > 0; i--) {
            var obs = this._httpService.getAllFeaturesForClassAndLevel(character_class_name.toLowerCase(), character_level);
            obs.subscribe(function (data) {
                var e_1, _a, e_2, _b;
                console.log(data);
                try {
                    for (var _c = (e_1 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data['results'])), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var feature = _d.value;
                        var test = true;
                        try {
                            for (var _e = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.classFeatures)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var f = _f.value;
                                if (feature.name == f.name) {
                                    test = false;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (test == true)
                            _this.classFeatures.push(feature);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                console.log(data['results']);
                console.log(_this.classFeatures);
            });
        }
    };
    CharacterSheetComponent.prototype.getHpFromClass = function (x) {
        console.log(x);
        if (x == "Barbarian") {
            this.characterHP = 12;
        }
        else if (x == "Bard") {
            this.characterHP = 8;
        }
        else if (x == "Cleric") {
            this.characterHP = 8;
        }
        else if (x == "Druid") {
            this.characterHP = 8;
        }
        else if (x == "Fighter") {
            this.characterHP = 10;
        }
        else if (x == "Monk") {
            this.characterHP = 8;
        }
        else if (x == "Paladin") {
            this.characterHP = 10;
        }
        else if (x == "Ranger") {
            this.characterHP = 10;
        }
        else if (x == "Rogue") {
            this.characterHP = 8;
        }
        else if (x == "Sorcerer") {
            this.characterHP = 6;
        }
        else if (x == "Warlock") {
            this.characterHP = 8;
        }
        else if (x == "Wizard") {
            this.characterHP = 6;
        }
        else {
            this.characterHP = 0;
        }
        console.log(this.characterHP);
    };
    CharacterSheetComponent.prototype.sumHp = function () {
        console.log();
        this.totalLevel = this.getHpFromClass(this.oneCharacter.character_class[0]);
    };
    CharacterSheetComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    CharacterSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-character-sheet',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-sheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/character-sheet/character-sheet.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-sheet.component.css */ "./src/app/character-sheet/character-sheet.component.css")).default]
        })
    ], CharacterSheetComponent);
    return CharacterSheetComponent;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    width: 150px;\n    height: 200px;\n    border: 1px solid slategray;\n    margin: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyYXk7XG4gICAgbWFyZ2luOiAycHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this._opened = true;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.errors = [];
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.getAllClasses();
        this.getAllRaces();
        this.newCharacter = {
            name: '',
            description: '',
            race: '',
            character_class: '',
            inventory: [],
            stats: []
        };
    };
    CreateComponent.prototype.createCharacter = function () {
        var _this = this;
        this.errors = [];
        var obs = this._httpService.createCharacter(this.newCharacter);
        obs.subscribe(function (data) {
            if (data['results']) {
                _this.newCharacter = {
                    name: '',
                    description: '',
                    race: '',
                    character_class: '',
                    inventory: [],
                    stats: []
                };
                console.log(data);
            }
            else if (data['errors']) {
                for (var key in data['errors']) {
                    _this.errors.push(data['errors'][key]['message']);
                }
            }
        });
    };
    CreateComponent.prototype.getAllRaces = function () {
        var _this = this;
        var obs = this._httpService.getAllRaces();
        obs.subscribe(function (data) {
            if (data['results']) {
                _this.allRaces = data['results'];
            }
        });
    };
    CreateComponent.prototype.getAllClasses = function () {
        var _this = this;
        var obs = this._httpService.getAllClasses();
        obs.subscribe(function (data) {
            if (data['results']) {
                _this.allClasses = data['results'];
            }
        });
    };
    CreateComponent.prototype.chooseRace = function (race, raceIndex) {
        this.race = null;
        this.newCharacter.race = race;
        this.race = race;
        this.raceIndex = raceIndex;
        this.getARace(raceIndex);
    };
    CreateComponent.prototype.getARace = function (raceIndex) {
        var _this = this;
        var obs = this._httpService.getARace(raceIndex);
        obs.subscribe(function (data) {
            if (data) {
                _this.oneRace = data;
            }
        });
    };
    CreateComponent.prototype.chooseClass = function (character_class, classIndex) {
        this.playAudio(character_class);
        this.newCharacter.character_class = character_class;
        this.classIndex = classIndex;
    };
    CreateComponent.prototype.playAudio = function (character_class) {
        var audio = new Audio();
        audio.src = "../../assets/audio/" + character_class + ".mp3";
        audio.load();
        audio.play();
    };
    CreateComponent.prototype.onUpdate = function (event) {
        console.log('newCharacter', event);
        this.newCharacter = event;
    };
    CreateComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CreateComponent.prototype, "add", void 0);
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")).default]
        })
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllCharactersFromService();
    };
    HomeComponent.prototype.getAllCharactersFromService = function () {
        var _this = this;
        var observable = this._httpService.getAllCharacters();
        observable.subscribe(function (data) {
            if (data['results']) {
                _this.allCharacters = data['results'];
            }
        });
    };
    HomeComponent.prototype.destroyOneCharacter = function (id) {
        var _this = this;
        var observable = this._httpService.destroyCharacter(id);
        observable.subscribe(function (data) {
            if (data['results']) {
                _this.getAllCharactersFromService();
            }
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllCharacters = function () {
        return this._http.get('/api/characters');
    };
    HttpService.prototype.getOneCharacter = function (id) {
        return this._http.get("/api/character/" + id);
    };
    HttpService.prototype.createCharacter = function (newCharacter) {
        return this._http.post('/api/character/create', newCharacter);
    };
    HttpService.prototype.updateCharacter = function (updateCharacter) {
        return this._http.put("/api/character/update/" + updateCharacter._id, updateCharacter);
    };
    HttpService.prototype.destroyCharacter = function (id) {
        return this._http.delete("/api/character/destroy/" + id);
    };
    HttpService.prototype.getAllRaces = function () {
        return this._http.get('http://www.dnd5eapi.co/api/races');
    };
    HttpService.prototype.getAllClasses = function () {
        return this._http.get('http://www.dnd5eapi.co/api/classes');
    };
    HttpService.prototype.getOneClass = function (class_index) {
        return this._http.get("http://www.dnd5eapi.co/api/classes/" + class_index);
    };
    HttpService.prototype.getOneRace = function (race_index) {
        return this._http.get("http://www.dnd5eapi.co/api/classes/" + race_index);
    };
    HttpService.prototype.getAllSpellsForClass = function (name) {
        return this._http.get("http://www.dnd5eapi.co/api/classes/" + name + "/spells");
    };
    HttpService.prototype.getAllFeaturesForClassAndLevel = function (name, level) {
        return this._http.get("http://www.dnd5eapi.co/api/features/" + name + "/level/" + level);
    };
    HttpService.prototype.getARace = function (raceIndex) {
        return this._http.get("http://www.dnd5eapi.co/api/races/" + raceIndex);
    };
    HttpService.prototype.getAllSkills = function () {
        return this._http.get('http://www.dnd5eapi.co/api/skills');
    };
    HttpService.prototype.filterSpellsByLevel = function (url) {
        return this._http.get("http://www.dnd5eapi.co" + url);
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pick-attributes/pick-attributes.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pick-attributes/pick-attributes.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpY2stYXR0cmlidXRlcy9waWNrLWF0dHJpYnV0ZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pick-attributes/pick-attributes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pick-attributes/pick-attributes.component.ts ***!
  \**************************************************************/
/*! exports provided: PickAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickAttributesComponent", function() { return PickAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PickAttributesComponent = /** @class */ (function () {
    function PickAttributesComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PickAttributesComponent.prototype.ngOnInit = function () {
        this.stats = {
            'strength': null,
            'dexterity': null,
            'constitution': null,
            'intelligence': null,
            'wisdom': null,
            'charisma': null
        };
        this.characterSkills = [];
        this.classSkills = [];
        this.getOneClass(this.classIndex);
        this.classSpells = [];
        this.characterSpells = [];
        this.spellLimit = 4;
        this.characterLevel = 1;
        this.classFeatures = [];
        this.getAllFeatures();
        this.getAllSpells();
    };
    PickAttributesComponent.prototype.ngOnChanges = function () {
        this.getOneClass(this.classIndex);
        this.getAllSpells();
        this.getAllFeatures();
        this.stats = {
            'strength': null,
            'dexterity': null,
            'constitution': null,
            'intelligence': null,
            'wisdom': null,
            'charisma': null
        };
        this.errors = [];
    };
    PickAttributesComponent.prototype.getOneClass = function (classIndex) {
        var _this = this;
        this.classSpells = [];
        this.characterSkills = [];
        this.classSkills = [];
        var obs = this._httpService.getOneClass(classIndex);
        obs.subscribe(function (data) {
            var e_1, _a;
            console.log(data);
            _this.characterClass = data;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.characterClass['proficiency_choices'][0]['from']), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var skill = _c.value;
                    _this.classSkills.push({
                        name: skill.name,
                        added: false
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log(_this.classSkills);
        });
        this.getAllSpells();
    };
    PickAttributesComponent.prototype.addSkill = function (skill) {
        if (this.characterSkills.length < this.characterClass['proficiency_choices'][0]['choose']) {
            this.characterSkills.push(skill);
        }
        else {
            var canceled = this.characterSkills[this.characterSkills.length - 1];
            this.characterSkills.splice(this.characterSkills.length - 1, 1);
            this.characterSkills.push(skill);
            canceled.added = false;
        }
        this.newCharacter.skills = this.characterSkills;
        this.emitCharacter();
        console.log(this.characterSkills);
        skill.added = true;
    };
    PickAttributesComponent.prototype.cancelSkill = function (skill) {
        for (var i = 0; i < this.characterSkills.length; i++) {
            if (this.characterSkills[i] == skill) {
                this.characterSkills[i].added = false;
                this.characterSkills.splice(i, 1);
            }
            console.log(this.characterSkills);
            this.newCharacter.skills = this.characterSkills;
            this.emitCharacter();
        }
    };
    PickAttributesComponent.prototype.getAllSpells = function () {
        var _this = this;
        console.log('get all spells running');
        this.characterSpells = [];
        var character_class_name = this.classIndex;
        console.log(character_class_name);
        for (var i = 0; i <= this.characterLevel; i++) {
            this.classSpells.push([]);
            var obs = this._httpService.getAllSpellsForClass(character_class_name);
            obs.subscribe(function (data) {
                var e_2, _a;
                try {
                    for (var _b = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data['results'])), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var spell = _c.value;
                        var obs2 = _this._httpService.filterSpellsByLevel(spell['url']);
                        obs2.subscribe(function (data2) {
                            if (data2['level'] <= _this.characterLevel) {
                                _this.classSpells[data2['level']].push({
                                    name: data2['name'],
                                    added: false
                                });
                            }
                        });
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        }
        this.characterSpells = [];
        for (var i = 0; i <= this.characterLevel; i++) {
            this.characterSpells.push([]);
        }
        console.log("class spells:", this.classSpells);
    };
    PickAttributesComponent.prototype.getAllFeatures = function () {
        var _this = this;
        this.classFeatures = [];
        var character_class_name = (this.characterClassMap[this.classIndex]);
        console.log(character_class_name);
        var obs = this._httpService.getAllFeaturesForClassAndLevel(character_class_name, this.characterLevel);
        obs.subscribe(function (data) {
            var e_3, _a, e_4, _b;
            console.log(data);
            try {
                for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](data['results']), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var feature = _d.value;
                    var test = true;
                    try {
                        for (var _e = (e_4 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.classFeatures)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var f = _f.value;
                            if (feature.name == f.name) {
                                test = false;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    if (test == true)
                        _this.classFeatures.push(feature);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
            console.log(data['results']);
            console.log(_this.classFeatures);
        });
    };
    PickAttributesComponent.prototype.addSpell = function (spell, level) {
        console.log(level);
        console.log(this.characterSpells);
        if (this.characterSpells[level].length < this.spellLimit) {
            this.characterSpells[level].push(spell);
        }
        else {
            var canceled = this.characterSpells[level][this.characterSpells[level].length - 1];
            this.characterSpells[level].splice(this.characterSpells[level].length - 1, 1);
            this.characterSpells[level].push(spell);
            canceled.added = false;
        }
        this.newCharacter.spells = this.characterSpells;
        this.emitCharacter();
        console.log(this.characterSpells);
        spell.added = true;
    };
    PickAttributesComponent.prototype.cancelSpell = function (spell, level) {
        for (var i = 0; i < this.characterSpells.length; i++) {
            if (this.characterSpells[level][i] == spell) {
                this.characterSpells[level][i].added = false;
                this.characterSpells[level].splice(i, 1);
            }
            console.log(this.characterSpells);
            this.newCharacter.spells = this.characterSpells;
            this.emitCharacter();
        }
    };
    PickAttributesComponent.prototype.addStat = function (stat, value) {
        console.log(stat);
        if (value == this.stats.strength) {
            this.stats.strength = null;
        }
        else if (value == this.stats.dexterity) {
            this.stats.dexterity = null;
        }
        else if (value == this.stats.constitution) {
            this.stats.constitution = null;
        }
        else if (value == this.stats.intelligence) {
            this.stats.intelligence = null;
        }
        else if (value == this.stats.wisdom) {
            this.stats.wisdom = null;
        }
        else if (value == this.stats.charisma) {
            this.stats.charisma = null;
        }
        this.stats[stat] = value;
        console.log(this.stats);
        this.characterSkills.stats = this.stats;
        this.newCharacter.stats = this.stats;
        this.emitCharacter();
    };
    PickAttributesComponent.prototype.createCharacter = function () {
        var _this = this;
        this.errors = [];
        this.newCharacter.spells = this.characterSpells;
        this.newCharacter.skills = this.characterSkills;
        this.newCharacter.stats = this.stats;
        console.log(this.newCharacter);
        if (this.newCharacter.name == '') {
            this.errors.push('You need a name');
        }
        if (this.newCharacter.description == '') {
            this.errors.push('You need a description');
        }
        if (this.newCharacter.race == '') {
            this.errors.push('You need a race');
        }
        if (this.newCharacter.skills.length != this.characterClass['proficiency_choices'][0]['choose']) {
            this.errors.push("You can have " + this.characterClass['proficiency_choices'][0]['choose'] + " skills but you only have " + this.newCharacter.skills.length);
        }
        if (this.newCharacter.stats.strength == null || this.newCharacter.stats.dexterity == null || this.newCharacter.stats.constitution == null || this.newCharacter.stats.intelligence == null || this.newCharacter.stats.wisdom == null || this.newCharacter.stats.charisma == null) {
            this.errors.push("You are missing an input for your stats");
        }
        else {
            var obs = this._httpService.createCharacter(this.newCharacter);
            obs.subscribe(function (data) {
                if (data['results']) {
                    console.log(data);
                    _this.newCharacter = {
                        name: '',
                        description: '',
                        race: '',
                        character_class: '',
                        inventory: [],
                        stats: {},
                        spells: [],
                        skills: []
                    };
                    console.log('character was created', data);
                    _this._router.navigate(['/characters']);
                }
                else if (data['errors']) {
                    for (var key in data['errors']) {
                        _this.errors.push(data['errors'][key]['message']);
                    }
                }
            });
        }
    };
    PickAttributesComponent.prototype.emitCharacter = function () {
        console.log('emitting', this.newCharacter);
        this.add.emit(this.newCharacter);
    };
    PickAttributesComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PickAttributesComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PickAttributesComponent.prototype, "classIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PickAttributesComponent.prototype, "newCharacter", void 0);
    PickAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pick-attributes',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pick-attributes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pick-attributes/pick-attributes.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pick-attributes.component.css */ "./src/app/pick-attributes/pick-attributes.component.css")).default]
        })
    ], PickAttributesComponent);
    return PickAttributesComponent;
}());



/***/ }),

/***/ "./src/app/stat/stat.component.css":
/*!*****************************************!*\
  !*** ./src/app/stat/stat.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXQvc3RhdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/stat/stat.component.ts":
/*!****************************************!*\
  !*** ./src/app/stat/stat.component.ts ***!
  \****************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StatComponent = /** @class */ (function () {
    function StatComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.errors = [];
    }
    StatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getEditCharacter(params['id']);
        });
    };
    StatComponent.prototype.getEditCharacter = function (id) {
        var _this = this;
        var obs = this._httpService.getOneCharacter(id);
        obs.subscribe(function (data) {
            if (data['results']) {
                _this.editCharacter = data['results'];
            }
        });
    };
    StatComponent.prototype.updateCharacter = function () {
        var _this = this;
        this.errors = [];
        var obs = this._httpService.updateCharacter(this.editCharacter);
        obs.subscribe(function (data) {
            if (data['results']) {
                _this._router.navigate(['/']);
            }
            else if (data['errors']) {
                for (var key in data['errors']) {
                    _this.errors.push(data['errors'][key]['message']);
                }
            }
        });
    };
    StatComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    StatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stat',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stat/stat.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stat.component.css */ "./src/app/stat/stat.component.css")).default]
        })
    ], StatComponent);
    return StatComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Source\MEAN\roll_initiative-master\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map