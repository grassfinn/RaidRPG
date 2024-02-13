import CreatePlayer from "./createPlayer";

export default class CreateEnemy extends CreatePlayer {
  constructor(name, att = 10, def = 10, spd = 10) {
    super();
    this.name = name;
    this.att = att;
    this.def = def;
    this.spd = spd;
  }
}
