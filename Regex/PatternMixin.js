 let PatternMixin = {

  bracket(outer_precedence){
    if(this.precedence() < outer_precedence){
      return `(${this.to_string()})`;
    }else{
      return this.to_string();
    }
  },

  matches(string){
    return this.to_nfa_design().accepts(string);
  },

  inspect(){
    console.log(`\/${this.to_string()}\/`);
  }

}


module.exports = PatternMixin;
