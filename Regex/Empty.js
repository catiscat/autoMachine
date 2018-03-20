const PatternMixin = require('./PatternMixin');
const NFARulebook = require('./../NFARulebook');
const NFADesign = require('./../NFADesign');

class Empty{
  constructor(character){
    this.character = character;
  }

  to_nfa_design(){
    let start_state = new Object();
    let accept_states = [start_state];
    let rulebook = new NFARulebook();
    return new NFADesign(start_state, new Set(accept_states), rulebook);
  }

  to_string(){
    return this.character;
  }

  precedence(){
    return 3;
  }
}

Object.assign(Empty.prototype,PatternMixin);
module.exports = Empty;
