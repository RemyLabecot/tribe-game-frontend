export class Character {

  id?: number;
  imageUrl: string;
  level: number;
  skillPoints: number;
  health: number;
  attack: number;
  defense: number;
  magik: number;
  playerId: number;


  constructor(id: number | undefined, imageUrl: string, level:number, skillPoints: number, health: number, attack: number, defense: number, magik: number, playerId: number) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.level = level;
    this.skillPoints = skillPoints;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.magik = magik;
    this.playerId = playerId;
  }

  setPlayerId(id: number) {
    this.playerId = id;
  }

  incrementHealth() {
    if(this.skillPoints > 0) {
      this.health++;
      this.decrementSkillPoint();
    }
  }

  decrementHealth(){
    if(this.health > 10) {
      this.health--;
      this.incrementSkillPoint();
    }
  }

  incrementAttack() {
    if(this.hasEnoughSkillPoints(this.attack)) {
      this.enleverLesPointsDeSkill(this.attack);
      this.attack++;
    }
  }

  decrementAttack(){
    if(this.attack > 0) {
      this.attack--;
      this.rajouterLesPointsDeSkill(this.attack);
    }
  }

  incrementDefense() {
    if(this.hasEnoughSkillPoints(this.defense)) {
      this.enleverLesPointsDeSkill(this.defense);
      this.defense++;
    }
  }

  decrementDefense(){
    if(this.defense > 0) {
      this.defense--;
      this.rajouterLesPointsDeSkill(this.defense);
    }
  }

  incrementMagik() {
    if(this.hasEnoughSkillPoints(this.magik)) {
      this.enleverLesPointsDeSkill(this.magik);
      this.magik++;
    }
  }

  decrementMagik(){
    if(this.magik > 0) {
      this.magik--;
      this.rajouterLesPointsDeSkill(this.magik);
    }
  }

  hasEnoughSkillPoints(skill: number): boolean {
    if(skill === 0) return true;
    const cost = this.costOfSkillIncrement(skill);
    return cost <= this.skillPoints;
  }

  incrementSkillPoint() {
    this.skillPoints++
  }

  enleverLesPointsDeSkill(skill: number) {
    this.skillPoints = this.skillPoints - this.costOfSkillIncrement(skill);
  }

  rajouterLesPointsDeSkill(skill: number) {
    this.skillPoints = this.skillPoints + this.costOfSkillIncrement(skill);
  }

  decrementSkillPoint() {
    if(this.skillPoints > 0) {
      this.skillPoints--;
    }
  }

  costOfSkillIncrement(skill: number): number {
    return Math.ceil(skill / 5);
  }
}
