import Undead from '../class/Undead';

test('Правильно создается объект', () => {
    const undead = new Undead('Nick');
    const correct = {
       name: 'Nick',
       type: 'Undead',
       health: 100,
       level: 1,
       attack: 25,
       defence: 25
    };

    expect(undead).toEqual(correct);
});