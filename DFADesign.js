const DFA = require('./DFA');

module.exports = class DFADesign{
  constructor(start_state, accept_states, rulebook){
    this.start_state = start_state;
    this.accept_states = accept_states;
    this.rulebook = rulebook;
  }

  to_dfa(){
    return new DFA(this.start_state, this.accept_states, this.rulebook);
  }

  accepts(string){
    return this.to_dfa().read_string(string).accepting();
  }
}
