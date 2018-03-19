 let PatternMixin = {

  bracket(outer_precedence){
    if(this.precedence() < outer_precedence){
      return `(${this.to_string()})`;
    }else{
      return this.to_string();
    }
  },

  inspect(){
    console.log(`\/${this.to_string()}\/`);
  }

}


module.exports = PatternMixin;
