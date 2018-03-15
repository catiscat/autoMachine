const NFA = require('./NFA');

module.exports = class NFADesign{
  constructor(start_state, accept_states, rulebook){
    this.start_state = start_state;
    this.accept_states = accept_states;
    this.rulebook = rulebook;
  }

  accepts(string){
    const nfa = this.to_nfa();
    nfa.read_string(string);
    return nfa.accepting();
  }

  to_nfa(){
    return new NFA(new Set([this.start_state]), this.accept_states, this.rulebook);
  }
}

