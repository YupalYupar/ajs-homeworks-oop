export default class Character {
    constructor(name, type) {
        const types = ["Bowman", "Daemon", "Magician", "Swordsman", "Undead", "Zombie"];
        if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('проверте название персонажа');
        }
        if (!types.includes(type)) {
            throw new Error('не правильный тип персонажа');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        }

    levelUp() {
        if (this.health <= 0) {
            throw new Error("Нельзя повысить левел умершего")
        }
        this.level += 1;
        this.health = 100;
        this.attack *= 1.2;
        this.defence *= 1.2;
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            throw new Error('he will not be back')
        }
    }
}