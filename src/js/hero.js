export default class Character {
    constructor(name, type, attack, defence) {
        const heroes = [
            'Bowerman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ]

        if ( name && 2 <= name.length <= 10 ) { 
            this.name = name 
        } else { 
            throw new Error('Придумайте другое имя!')
          }

        if ( heroes.includes(type) ) {
             this.type = type 
        } else {
             throw new Error('Такого героя не существует!')
          }

        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (this.health === 0) {
          throw new Error('Нельзя повысить уровень умершего!');
        }
        this.level += 1;
        this.attack += (this.attack / 100) * 20;
        this.defence += (this.defence / 100) * 20;
        this.health = 100;
    }
    
      damage(points) {
        if (this.health >= 0) {
          this.health -= points * (1 - this.defence / 100);
        }
      }
}











