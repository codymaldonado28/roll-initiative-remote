import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Key } from 'protractor';
import { of, throwError } from 'rxjs';


@Component({
  selector: 'app-pick-attributes',
  templateUrl: './pick-attributes.component.html',
  styleUrls: ['./pick-attributes.component.css'],
})


export class PickAttributesComponent implements OnInit, OnChanges {
  @Output() add = new EventEmitter<any>();
  @Input() classIndex: any;
  @Input() newCharacter: any;
  characterClass: any;
  classSkills: any;
  characterSkills: any;
  allSpells: any;
  classSpells: any;
  characterSpells: any;
  spellLimit: number;
  characterClassMap: any;
  characterLevel: number;
  classFeatures: any;
  errors:any;
  stats:any;
  constructor(
    private _httpService: HttpService,
    private _router : Router,
  ) { }

  ngOnInit() {
    this.stats={
      'strength': null,
      'dexterity': null,
      'constitution': null,
      'intelligence': null,
      'wisdom': null,
      'charisma': null
    };
    this.characterSkills = [];
    this.classSkills = [];
    this.getOneClass(this.classIndex)
    this.classSpells = [];
    this.characterSpells = [];
    this.spellLimit = 4;
    this.characterLevel = 1;
    this.classFeatures = [];
    this.getAllFeatures();
    this.getAllSpells();
  }
  ngOnChanges() {
    this.getOneClass(this.classIndex);
    this.getAllSpells();
    this.getAllFeatures();
    this.stats={
      'strength': null,
      'dexterity': null,
      'constitution': null,
      'intelligence': null,
      'wisdom': null,
      'charisma': null
    };
    this.errors=[];
  }
  getOneClass(classIndex) {
    this.classSpells = [];
    this.characterSkills = [];
    this.classSkills = [];
    let obs = this._httpService.getOneClass(classIndex)
    obs.subscribe(data => {
      console.log(data)
      this.characterClass = data;
      for (var skill of this.characterClass['proficiency_choices'][0]['from']) {
        this.classSkills.push({
          name: skill.name,
          added: false
        })
      }
      console.log(this.classSkills)
    })
    this.getAllSpells();
  }
  addSkill(skill) {
    if (this.characterSkills.length < this.characterClass['proficiency_choices'][0]['choose']) {
      this.characterSkills.push(skill);
    }
    else {
      let canceled = this.characterSkills[this.characterSkills.length - 1];
      this.characterSkills.splice(this.characterSkills.length - 1, 1);
      this.characterSkills.push(skill);
      canceled.added = false;
    }
    this.newCharacter.skills=this.characterSkills
    this.emitCharacter();
    console.log(this.characterSkills)
    skill.added = true
  }
  cancelSkill(skill) {
    for (var i = 0; i < this.characterSkills.length; i++) {
      if (this.characterSkills[i] == skill) {
        this.characterSkills[i].added = false;
        this.characterSkills.splice(i, 1);
      }
      console.log(this.characterSkills)
      this.newCharacter.skills=this.characterSkills
      this.emitCharacter();
    }
  }
  getAllSpells() {
    console.log('get all spells running')
    this.characterSpells = [];
    let character_class_name = this.classIndex
    console.log(character_class_name)
    for (let i = 0; i <= this.characterLevel; i++) {
      this.classSpells.push([])
      let obs = this._httpService.getAllSpellsForClass(character_class_name)
      obs.subscribe(data => {
        for (var spell of data['results']) {
          let obs2 = this._httpService.filterSpellsByLevel(spell['url'])
          obs2.subscribe(data2 => {
            if (data2['level'] <= this.characterLevel){
              this.classSpells[data2['level']].push({
                name: data2['name'],
                added: false
              })
            } 
          })
        }
      })
    }
    this.characterSpells=[];
    for(let i=0; i<=this.characterLevel; i++){
      this.characterSpells.push([])
    }
    console.log("class spells:", this.classSpells)
  }
  getAllFeatures() {
    this.classFeatures = [];
    let character_class_name = (this.characterClassMap[this.classIndex])
    console.log(character_class_name)
    let obs = this._httpService.getAllFeaturesForClassAndLevel(character_class_name, this.characterLevel)
    obs.subscribe(data => {
      console.log(data)
      for (var feature of data['results']) {
        var test = true;
        for (var f of this.classFeatures) {
          if (feature.name == f.name) {
            test = false
          }
        }
        if (test == true)
          this.classFeatures.push(feature)
      }
      console.log(data['results'])
      console.log(this.classFeatures)
    })
  }
  addSpell(spell,level) {
    console.log(level)
    console.log(this.characterSpells)
      if ( this.characterSpells[level].length<this.spellLimit ){
      this.characterSpells[level].push(spell);
    }
    else {
      let canceled = this.characterSpells[level][this.characterSpells[level].length - 1];
      this.characterSpells[level].splice(this.characterSpells[level].length - 1, 1);
      this.characterSpells[level].push(spell);
      canceled.added = false;
    }
    this.newCharacter.spells=this.characterSpells;
    this.emitCharacter();
    console.log(this.characterSpells)
    spell.added = true
  }
  cancelSpell(spell, level) {
    for (let i = 0; i < this.characterSpells.length; i++) {
      if (this.characterSpells[level][i] == spell) {
        this.characterSpells[level][i].added = false;
        this.characterSpells[level].splice(i, 1);
      }
      console.log(this.characterSpells)
      this.newCharacter.spells=this.characterSpells;
      this.emitCharacter();
    }
  }
  addStat(stat, value){
    console.log(stat)
      if(value == this.stats.strength){
        this.stats.strength=null;
    }
      else if(value == this.stats.dexterity){
        this.stats.dexterity=null;
    }
      else if(value == this.stats.constitution){
        this.stats.constitution=null;
    }
      else if(value == this.stats.intelligence){
        this.stats.intelligence=null;
    }
      else if(value == this.stats.wisdom){
        this.stats.wisdom=null;
    }
      else if(value == this.stats.charisma){
        this.stats.charisma=null;
    }
    this.stats[stat]=value;
    console.log(this.stats)
    this.characterSkills.stats=this.stats;
    this.newCharacter.stats=this.stats;
    this.emitCharacter()
  }
  createCharacter() {
    this.errors = []
    this.newCharacter.spells=this.characterSpells
    this.newCharacter.skills=this.characterSkills
    this.newCharacter.stats=this.stats
    console.log(this.newCharacter)
    if(this.newCharacter.name==''){
      this.errors.push('You need a name')
    }
    if(this.newCharacter.description==''){
      this.errors.push('You need a description')
    }
    if(this.newCharacter.race==''){
      this.errors.push('You need a race')
    }
    if(this.newCharacter.skills.length != this.characterClass['proficiency_choices'][0]['choose']){
      this.errors.push(`You can have ${this.characterClass['proficiency_choices'][0]['choose']} skills but you only have ${this.newCharacter.skills.length}`)
    }
    if(this.newCharacter.stats.strength == null || this.newCharacter.stats.dexterity==null || this.newCharacter.stats.constitution==null || this.newCharacter.stats.intelligence==null || this.newCharacter.stats.wisdom==null || this.newCharacter.stats.charisma==null){
      this.errors.push("You are missing an input for your stats")
    } 
    else{
    let obs = this._httpService.createCharacter(this.newCharacter)
    obs.subscribe(data => {
      if (data['results']) {
        console.log(data)
        this.newCharacter = {
          name: '',
          description: '',
          race: '',
          character_class: '',
          inventory: [],
          stats: {},
          spells: [],
          skills:[]
        }
        console.log('character was created', data)
        this._router.navigate(['/characters'])
      }
      else if (data['errors']) {
        for (var key in data['errors']) {
          this.errors.push(data['errors'][key]['message']);
        }
      }
    })
    }
  }
  emitCharacter(){
    console.log('emitting', this.newCharacter)
    this.add.emit(this.newCharacter);
  }
}
