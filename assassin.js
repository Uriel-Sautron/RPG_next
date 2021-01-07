class Assassin extends Character {
    constructor(name = "Carl", hp = 6, dmg = 6, mana = 20, status = "playing", specialAttack = "Shadow Hit") {
        super(name, hp, dmg, mana, status);
        this.specialAttack = specialAttack
    }

    shadowHit = victim => {
        victim.hp -= 7;
        this.mana -= 20;
        // lors du prochain tour ne prends pas de dmg
        if (victim.hp > 0) {
            this.hp -= 7
        }
    }
}