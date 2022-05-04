class Ninja {
  constructor(name, health, speed = 3, stength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = stength;
  }
  sayName() {
    console.log("Ninja name is" + this.name);
  }
  showStats() {
    console.log("Ninja name is " + this.name);
    console.log("Ninja heath is " + this.health);
    console.log("Ninja speed is " + this.speed);
    console.log("Ninja strength is " + this.strength);
  }
  drinkShake() {
    this.health += 10;
  }
}
class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, stength = 10, wisdom = 10) {
    super(name, health, speed, stength);
    this.wisdom = wisdom;
  }

  speakWisdom() {
    this.drinkShake();
    console.log("What one programmar can do in one month");
  }
}

const sensi1 = new Sensei("mostafa");
sensi1.speakWisdom();
sensi1.showStats();

// const ninja1 = new Ninja("youmna", 100);
// ninja1.sayName();
// ninja1.drinkShake();
// ninja1.showStats();
