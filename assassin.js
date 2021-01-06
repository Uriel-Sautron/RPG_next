class Assassin extends Character {
    constructor(name = "Carl", hp = 6, dmg = 6, mana = 20) {
        super(name, hp, dmg, mana, status);
    }

    shadowHit() {
        this.dmg = 7;
        this.mana -= 20;
        // lors du prochain tour ne prends pas de dmg
        // si adv != mort this.hp -= 7
    }
}