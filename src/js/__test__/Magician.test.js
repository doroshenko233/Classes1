import Magician from '../class/Magician';

test('Правильно создается объект', () => {
    const magician = new Magician('Nick');
    const correct = {
       name: 'Nick',
       type: 'Magician',
       health: 100,
       level: 1,
       attack: 10,
       defence: 40
    };

    expect(magician).toEqual(correct);
});