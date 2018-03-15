module.exports = class DFA{
  constructor(current_state, accpet_states, rulebook){
    this.current_state = current_state;
    this.accpet_states = accpet_states;
    this.rulebook = rulebook;
  }

  accepting(){
    return this.accpet_states.includes(this.current_state);
  }

  read_character(character){
    this.current_state = this.rulebook.nextState(this.current_state, character);
  }

  read_string(string){
    for(let i=0; i< string.length; i++){
      this.read_character(string[i]);
    }
    return new DFA(this.current_state,this.accpet_states,this.rulebook);
  }
}
