const PatternMixin = require('./PatternMixin');

class Choose{
  constructor(first, second){
    this.first = first;
    this.second = second;
  }

  to_string(){
    return [this.first,this.second].map((pattern)=>{
      return pattern.bracket(this.precedence());
    }).join('|');
  }

  precedence(){
    return 0;
  }
}

Object.assign(Choose.prototype, PatternMixin);

module.exports = Choose;
