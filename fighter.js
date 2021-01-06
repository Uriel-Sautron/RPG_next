class Fighter extends Character {
    constructor(hp = 12, dmg = 4, mana = 40) {
        super(hp, dmg, mana);
    }

    darkVision = () => {
        this.dmg = 5;
        this.mana -= 20;
        // reduit dmg recue de 2 pendant 1 tour
    }
}