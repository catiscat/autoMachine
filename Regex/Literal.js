const PatternMixin = require('./PatternMixin');

 class Literal{
  constructor(character){
    this.character = character;
  }

  to_string(){
    return this.character;
  }

  precedence(){
    return 3;
  }
}

Object.assign(Literal.prototype, PatternMixin);

module.exports = Literal;
