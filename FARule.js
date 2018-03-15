module.exports = class FARule {
  constructor(state, character, nextState){
    this.state = state;
    this.character = character;
    this.nextState = nextState;
  }

  applies_to(state, character){
    return this.state == state && this.character == character;
  }

  follow(){
    return this.nextState;
  }

  toString(){
    return `<FARule [state]: ${this.state} -- [character]: ${this.character} -- [nextState]: ${this.nextState} >`
  }

  inspect(){
    console.log(this.toString());
  }
}
