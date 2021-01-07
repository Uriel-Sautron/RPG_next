class Fighter extends Character {
    constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status = "playing", specialAttack = "Dark Vision") {
        super(name, hp, dmg, mana, status);
        this.specialAttack = specialAttack
        this.protect = false
    }

    darkVision = victim => {
        victim.hp -= 5;
        this.mana -= 20;
        this.protect = true
            // reduit dmg recue de 2 pendant 1 tour
    }
}