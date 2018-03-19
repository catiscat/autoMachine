const DFARulebook = require('./DFARuleBook');
const FARule = require('./FARule');
const DFA = require('./DFA');
const DFADesign = require('./DFADesign');

const NFARulebook = require('./NFARulebook');
const NFA = require('./NFA');
const NFADesign = require('./NFADesign');
const Repeat = require('./Regex/Repeat');
const Choose = require('./Regex/Choose');
const Concatenate = require('./Regex/Concatenate');
const Literal = require('./Regex/Literal');


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
    // rulebook = new NFARulebook([
    //   new FARule(1,'a',1), new FARule(1,'b',1), new FARule(1,'b',2),
    //   new FARule(2,'a',3), new FARule(2,'b',3),
    //   new FARule(3,'a',4), new FARule(3,'b',4)
    // ]);

    // let nextstates = rulebook.next_states(new Set([1]),'b');
    // nextstates = rulebook.next_states(new Set([1,2]), 'a');
    // nextstates = rulebook.next_states(new Set([1,3]), 'b');

    // nfa = new NFA(new Set([1]), new Set([4]), rulebook);
    // let accept = nfa.accepting();
    // nfa.read_character('b');

    // nfa = new NFA(new Set([1]), new Set([4]), rulebook);
    // nfa.read_string('bbbb');
    // accept = nfa.accepting();

    // nfa_design = new NFADesign(1, new Set([4]), rulebook);
    // accept = nfa_design.accepts('bab');

    // accept = nfa_design.accepts('bbabb')
    // console.log(accept);

    rulebook = new NFARulebook([
      new FARule(1, null, 2), new FARule(1, null, 4),
      new FARule(2,'a', 3),
      new FARule(3,'a', 2),
      new FARule(4,'a', 5),
      new FARule(5,'a', 6),
      new FARule(6,'a', 4)
    ]);

    // nextstates = rulebook.next_states(new Set([1]), null);
    // nextstates = rulebook.follow_free_moves(new Set([1]));
    // console.log(nextstates);

    nfa_design = new NFADesign(1,new Set([2,4]), rulebook);
    // states = rulebook.next_states(new Set([1]), null);
    // states = rulebook.next_states(new Set([2,4]), 'a');
    // states = rulebook.next_states(new Set([3,5]), 'a');

    accept = nfa_design.accepts('aa');
    accept = nfa_design.accepts('aaaaaa');

    // console.log(accept);
    // accept = nfa_design.accepts('')

    var pattern = new Repeat(
      new Choose(
        new Concatenate(new Literal('a'), new Literal('b')),
        new Literal('a')
      )
    );

    console.log(pattern);
  }


run();
