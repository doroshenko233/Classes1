import Character from '../Character';
import Bowerman from '../class/Bowerman';

test('Проверка на ошибки в name', () => {
    expect(() => {
      new Character('')
    }).toThrow(new Error('Имя персонажа не должно быть меньше 2 символов и не больше - 10 символов'));
});

test('Проверка на ошибки в type', () => {
    expect(() => {
      new Character('Nick', '')
    }).toThrow(new Error('Такого героя не существует!'));
});

test('Правильно создаться объект', () => {
   const warior = new Character('Nick', 'Bowerman'); 
   const correct = {
     name: 'Nick',
     type: 'Bowerman',
     health: 100,
     level: 1,
     attack: undefined,
     defence: undefined
   };

   expect(warior).toEqual(correct);
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


