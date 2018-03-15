const DFARulebook = require('./DFARuleBook');
const FARule = require('./FARule');



 function run(){
    let rulebook = new DFARulebook(
      [
        new FARule(1,'a',2), new FARule(1,'b',1),
        new FARule(2,'a',2), new FARule(2,'b',3),
        new FARule(3,'a',3), new FARule(3,'b',3)
      ]
    );
    let rule1 = rulebook.nextState(1,'a');
    console.log(rule1);

  }


run();
