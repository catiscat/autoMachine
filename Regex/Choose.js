const PatternMixin = require('./PatternMixin');
const FARule = require('./../FARule');
const NFADesign = require('./../NFADesign');
const NFARulebook = require('./../NFARulebook');

class Choose{
  constructor(first, second){
    this.first = first;
    this.second = second;
  }

  to_nfa_design(){
    let first_nfa_design = this.first.to_nfa_design();
    let second_nfa_design = this.second.to_nfa_design();

    let start_state = new Object();
    let accept_states = [ ...first_nfa_design.accept_states, ...second_nfa_design.accept_states ];
    let rules = [...first_nfa_design.rulebook.rules,...second_nfa_design.rulebook.rules];
    let extra_rules = [first_nfa_design, second_nfa_design].map((nfa_design)=>{
      return new FARule(start_state, null, nfa_design.start_state);
    });
    let rulebook = [...rules, ...extra_rules];
    return new NFADesign(start_state, new Set(accept_states), new NFARulebook(rulebook));
  }

  to_string(){
    return [this.first,this.second].map((pattern)=>{
      return pattern.bracket(this.precedence());
    }).join('|');
  }

  precedence(){
    return 0;
  }
}

Object.assign(Choose.prototype, PatternMixin);

module.exports = Choose;
