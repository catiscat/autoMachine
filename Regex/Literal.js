const PatternMixin = require('./PatternMixin');
const FARule = require('./../FARule');
const NFARulebook = require('./../NFARulebook');
const NFADesign = require('./../NFADesign');

 class Literal{
  constructor(character){
    this.character = character;
  }

  to_nfa_design(){
    let start_state = new Object();
    let accept_state = new Object();
    let rule = new FARule(start_state, this.character, accept_state);
    let rulebook = new NFARulebook([rule]);
    return new NFADesign(start_state, new Set([accept_state]), rulebook);
  }

  to_string(){
    return this.character;
  }

  precedence(){
    return 3;
  }
}

Object.assign(Literal.prototype, PatternMixin);

module.exports = Literal;
