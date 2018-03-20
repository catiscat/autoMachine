const PatternMixin = require('./PatternMixin');
const NFARulebook = require('./../NFARulebook');
const FARule = require('./../FARule');
const NFADesign = require('./../NFADesign');

class Concatenate {
  constructor(first, second){
    this.first = first;
    this.second = second;
  }

  to_nfa_design(){
    let first_nfa_design = this.first.to_nfa_design();
    let second_nfa_design = this.second.to_nfa_design();

    let start_state = first_nfa_design.start_state;
    let accept_states = second_nfa_design.accept_states;
    let rules = [...first_nfa_design.rulebook.rules, ...second_nfa_design.rulebook.rules];

    let extra_rules = [...first_nfa_design.accept_states].map((state)=>{
      return new FARule(state, null, second_nfa_design.start_state);
    });

    let rulebook = new NFARulebook(rules.concat(extra_rules));
    return new NFADesign(start_state, accept_states, rulebook);
  }

  to_string(){
    return [this.first, this.second].map((pattern)=>{
      return pattern.bracket(this.precedence());
    }).join('');
  }

  precedence(){
    return 1;
  }
}

Object.assign(Concatenate.prototype, PatternMixin);

module.exports = Concatenate;
