module.exports = class DFARulebook{
  constructor(rules){
    this.rules = rules;
  }

  nextState(state, character){
    return this.rule_for(state, character).follow();
  }

  //将[state, character]的rule过滤出来
  rule_for(state, character){
    return this.rules.filter((rule)=>{
      return rule.applies_to(state, character);
    })[0];
  }
}
