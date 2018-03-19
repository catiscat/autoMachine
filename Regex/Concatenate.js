const PatternMixin = require('./PatternMixin');

class Concatenate {
  constructor(first, second){
    this.first = first;
    this.second = second;
  }

  to_string(){
    return [this.first, this.second].map((pattern)=>{
      return pattern.bracket(this.precedence());
    }).join('');
  }

  precedence(){
    return 1;
  }
}

Object.assign(Concatenate.prototype, PatternMixin);

module.exports = Concatenate;
