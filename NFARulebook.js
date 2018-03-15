module.exports = class NFARulebook{
  constructor(rules){
    this.rules = rules;
  }
  //use set to avoide repeated states
  next_states(states, character){
     let statesList = [];
     states.forEach((state)=>{
      statesList = [...statesList, ...this.follow_rules_for(state, character)];
    });
    return new Set(statesList);
  }

  //get every single next state
  follow_rules_for(state, character){
    const rules = this.rules_for(state, character);
    return rules.map((rule)=>{
      return rule.follow();
    });
  }

  //return rules that matches the given state & character
  rules_for(state, character){
    return this.rules.filter((rule)=>{
      return rule.applies_to(state, character);
    });
  }

}
