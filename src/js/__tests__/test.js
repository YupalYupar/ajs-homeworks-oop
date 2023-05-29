import Character  from "../character";
import Bowman from "../bowman";
import Daemon from "../daemon";
import Magician from "../magician";
import Swordsman from "../swordsman";
import Undead from "../undead";
import Zombie from "../zombie";

test("testing Character error type", () => {
    expect(() => {
        const testDummy = new Character('Pok', 'Zadanga');
    }).toThrowError('не правильный тип персонажа');
});

// test("testing Character name sring", () => {
//     expect(() => {
//         const testDummy = new Character(911, "Daemon");
//     }).toThrowError('проверте название персонажа');
// });

// test("testing Character long name", () => {
//     expect(() => {
//         const testDummy = new Character('DonaldtrumpObama', "Daemon");
//     }).toThrowError('проверте название персонажа');
// });

test("testing Character short name error", () => {
    expect(() => {
        const testDummy = new Character('P', 'Daemon');
    }).toThrowError('проверте название персонажа');
});

test("testing Character levelUp function", () => {
    const testDumy = new Daemon('Pokich', 'Daemon');
    testDumy.levelUp();
    expect(testDumy).toEqual({
        name: 'Pokich',
        type: 'Daemon',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    });
});

test("testing dead Character levelUp function error", () => {
    expect(() => {
        const testDummy = new Daemon('Pokich', 'Daemon');
    testDummy.health = 0;
    testDummy.levelUp();
    }).toThrowError("Нельзя повысить левел умершего")
});

test("testing Character damage function", () => {
    const testDummy = new Daemon('Poof', 'Daemon');
    testDummy.damage(20);
    expect(testDummy.health).toEqual(88);
});

test("testing Character damage error function", () => {
    expect(() => {
        const testDummy = new Daemon('Nuke', 'Daemon');
        testDummy.health = 0;
        testDummy.damage(5);
    }).toThrowError('he will not be back');
});

test("testing Bowman class", () => {
    const testBowman = new Bowman('Hook', 'Bowman');
    expect(testBowman).toEqual({
        name: 'Hook',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
});

test("testing Daemon class", () => {
    const testDeamon = new Daemon('Duke', 'Daemon');
    expect(testDeamon).toEqual({
        name: 'Duke',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
});

test("testing Magician class", () => {
    const testMagician = new Magician('Hendelf', 'Magician');
    expect(testMagician).toEqual({
        name: 'Hendelf',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
});

test("testing Swordsman class", () => {
    const testSwordsman = new Swordsman('Hood', 'Swordsman');
    expect(testSwordsman).toEqual({
        name: 'Hood',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
});

test("testing Undead class", () => {
    const testUndead = new Undead('Dead', 'Undead');
    expect(testUndead).toEqual({
        name: 'Dead',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
});

test("testing Zombie class", () => {
    const testZombie = new Zombie('Halfdead', 'Zombie');
    expect(testZombie).toEqual({
        name: 'Halfdead',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
});