import Zombie from '../class/Zombie';

test('Правильно создается объект', () => {
    const zombie = new Zombie('Nick');
    const correct = {
       name: 'Nick',
       type: 'Zombie',
       health: 100,
       level: 1,
       attack: 40,
       defence: 10
    };

    expect(zombie).toEqual(correct);
});