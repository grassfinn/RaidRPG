export default class CreatePlayer {
  constructor(
    name = 'default',
    hp = 10,
    att = 10,
    def = 10,
    spd = 10,
    img = 'http://www.clker.com/cliparts/T/v/C/t/G/R/pink-square.svg.hi.png'
  ) {
    // super();
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.def = def;
    this.spd = spd;
    this.img = img;
  }

  battle(){
    console.log('I am going in to battle!')
  }

}


