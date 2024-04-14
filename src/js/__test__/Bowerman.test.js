import Bowerman from '../class/Bowerman';

test('Правильно создается объект', () => {
    const bowerman = new Bowerman('Nick');
    const correct = {
       name: 'Nick',
       type: 'Bowerman',
       health: 100,
       level: 1,
       attack: 25,
       defence: 25
    };

    expect(bowerman).toEqual(correct);
});