const DFARulebook = require('./DFARuleBook');
const FARule = require('./FARule');
const DFA = require('./DFA');
const DFADesign = require('./DFADesign');
const NFARulebook = require('./NFARulebook');

 function run(){
   //dfa
    let rulebook = new DFARulebook(
      [
        new FARule(1,'a',2), new FARule(1,'b',1),
        new FARule(2,'a',2), new FARule(2,'b',3),
        new FARule(3,'a',3), new FARule(3,'b',3)
      ]
    );
    let rule1 = rulebook.nextState(1,'a');
    let rule2 = rulebook.nextState(1,'b');
    let rule3 = rulebook.nextState(3,'a');

    let accept1 = new DFA(1,[1,3], rulebook).accepting();
    let accept2 = new DFA(14,[1,3], rulebook).accepting();

    let dfa = new DFA(1,[3], rulebook);
    let accept3 = dfa.accepting();
    dfa.read_character('b');
    let accept4 = dfa.accepting();

    for(let i=0; i< 3; i++){
      dfa.read_character('a');
    }
    let accept5 = dfa.accepting();
    dfa.read_character('b');
    let accept6 = dfa.accepting();


    dfa = new DFA(1, [3], rulebook);
    dfa.read_string('baaab');
    let accept7 = dfa.accepting();

    dfa_design = new DFADesign(1,[3],rulebook);
    let accept8 = dfa_design.accepts('a');
    let accept9 = dfa_design.accepts('baaab');
    let accept10 = dfa_design.accepts('baba');


    //nfa
    rulebook = new NFARulebook([
      new FARule(1,'a',1), new FARule(1,'b',1), new FARule(1,'b',2),
      new FARule(2,'a',3), new FARule(2,'b',3),
      new FARule(3,'a',4), new FARule(3,'b',4)
    ]);

    let nextstates = rulebook.next_states(new Set([1]),'b');

    console.log(nextstates);

  }


run();
