module.exports = class NFARulebook{
  constructor(rules){
    this.rules = rules || [];
  }
  //use set to avoide repeated states
  next_states(states, character){
     let statesList = [];
     states.forEach((state)=>{
      statesList = statesList.concat(this.follow_rules_for(state, character) );
    });
    return new Set(statesList);
  }

  //get every single next state
  follow_rules_for(state, character){
    const rules = this.rules_for(state, character) || [];
    const follow_rules = rules.map((rule)=>{
      return rule.follow();
    });
    return follow_rules;
  }

  //return rules that matches the given state & character
  rules_for(state, character){
    return this.rules.filter((rule)=>{
      return rule && rule.applies_to(state, character);
    });
  }

  follow_free_moves(states){
    let more_states = this.next_states(states, null);
    let difference = new Set(
      [...more_states].filter(x => !states.has(x)));
    if(difference.size<1){
      return states;
    }else{
      return this.follow_free_moves(new Set([...states,...more_states]));
    }
  }

}
