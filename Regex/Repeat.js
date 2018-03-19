const PatternMixin = require('./PatternMixin');

class Repeat{
  constructor(pattern){
    this.pattern = pattern;
  }

  to_string(){
    return this.pattern.bracket(this.precedence()) + '*';
  }

  precedence(){
    return 2;
  }

  inspect(){
    console.log(this.to_string());
  }
}

Object.assign(Repeat.prototype, PatternMixin);
module.exports = Repeat;
