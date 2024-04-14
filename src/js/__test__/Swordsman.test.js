import Swordsman from '../class/Swordsman';

test('Правильно создается объект', () => {
    const swordsman = new Swordsman('Nick');
    const correct = {
       name: 'Nick',
       type: 'Swordsman',
       health: 100,
       level: 1,
       attack: 40,
       defence: 10
    };

    expect(swordsman).toEqual(correct);
});