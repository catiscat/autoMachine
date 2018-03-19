const PatternMixin = require('./PatternMixin');

class Empty{
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

Object.assign(Empty.prototype,PatternMixin);
module.exports = Empty;
