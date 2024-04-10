import Character from '../hero';
import Bowerman from '../classBowerman';
import Swordsman from '../classSwordsman';
import Magician from '../classMagician';
import Daemon from '../classDaemon';
import Undead from '../classUndead';
import Zombie from '../classZombie'

test('Проверка на ошибки длины имени и типа героя', () => {
  
   expect(function() {
      new Bowerman('')
   }).toThrow(new Error('Придумайте другое имя!'));

   expect(function() {
      new Character('Monster', '')
   }).toThrow(new Error('Такого героя не существует!'));
});

test('Должно создаться', () => {
   
   expect(new Character('Mikhail', 'Bowerman')).toEqual({
      name: 'Mikhail',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined
   });

    expect(new Bowerman('Nick')).toEqual({
        name: 'Nick',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(new Swordsman('Nick')).toEqual({
        name: 'Nick',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });

    expect(new Magician('Nick')).toEqual({
        name: 'Nick',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(new Daemon('Nick')).toEqual({
        name: 'Nick',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(new Undead('Nick')).toEqual({
        name: 'Nick',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(new Zombie('Nick')).toEqual({
        name: 'Nick',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});


  test('Герой должен переходить на новый уровень', () => {
    const hero = new Bowerman('Nick');
    hero.health = 50;
    hero.levelUp();
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(2);
    expect(hero.attack).toBe(30);
    expect(hero.defence).toBe(30);
  });

  test('Мёртвый герой не должен переходить на новый уровень', () => {
    const hero = new Bowerman('Nick');
    hero.health = 0;
    expect(() => hero.levelUp()).toThrow(new Error('Нельзя повысить уровень умершего!'));
  });

  test('Герой должен получать урон в бою', () => {
    const hero = new Bowerman('Nick'); 
    hero.damage(60);
    expect(hero.health).toBe(55);
  });

  test('Здоровье героя не должно становиться отрицательным', () => {
    const hero = new Bowerman('Nick');
    hero.health = -10;
    hero.damage(10);
    expect(hero.health).toBe(-10);
  });


