class Fighter extends Character {
    constructor(name = "Grace", hp = 12, dmg = 4, mana = 40, status = "playing", specialAttack = "Dark Vision", specialActiveted = false) {
        super(name, hp, dmg, mana, status, specialActiveted);
        this.specialAttack = specialAttack
        this.protect = false
    }

    special = victim => {
        let dmgReceived = 5;
        if (victim.protect === true) {
            dmgReceived -= 2
        }
        victim.hp -= dmgReceived;
        this.mana -= 20;
        this.protect = true
            // reduit dmg recue de 2 pendant 1 tour
        console.log(`========== Special of ${this.name} ==========`);
        console.log("");
        console.log(`${this.name} receives +20mana`);
        console.log(`${this.name} is attacking ${victim.name}. He deals him ${dmgReceived} damages`)
    }
}