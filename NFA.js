module.exports = class NFA{
  constructor(current_states, accept_states, rulebook){
    this.current_states = current_states;
    this.accept_states = accept_states;
    this.rulebook = rulebook;
  }
  //if there is at least one element in current_states that is accepted,then return true
  accepting(){
    let intersection = new Set(
      [...this.current_states].filter(x => this.accept_states.has(x))
    );
    return intersection.size > 0;
  }

  read_character(character){
    this.current_states = this.rulebook.next_states(this.current_states, character);
  }

  read_string(string){
    // before read_string, you should update current states
    this.update_current_states();
    for(let i=0; i< string.length; i++){
      this.read_character(string[i]);
    }
  }

  update_current_states(){
    this.current_states = this.rulebook.follow_free_moves(this.current_states);
    return this.current_states;
  }
}
