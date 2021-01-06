class Fighter extends Character {
    constructor(name = "Grace", hp = 12, dmg = 4, mana = 40) {
        super(name, hp, dmg, mana, status);
    }

    darkVision() {
        this.dmg = 5;
        this.mana -= 20;
        // reduit dmg recue de 2 pendant 1 tour
    }
}