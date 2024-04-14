export default class Character {
    constructor(name, type) {
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
            throw new Error('Имя персонажа не должно быть меньше 2 символов и не больше - 10 символов')
          }

        if ( heroes.includes(type) ) {
             this.type = type 
        } else {
             throw new Error('Такого героя не существует!')
          }

        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
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











