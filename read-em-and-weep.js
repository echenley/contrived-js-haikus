function read(hand) {
    var royal = 'A♠, K♠, Q♠, J♠, 10♠';
    return {
        and: function(weep) {
            return hand.join(', ') === royal ? weep : "I've seen better.";
        }
    };
}

var em = ['A♠', 'K♠', 'Q♠', 'J♠', '10♠'];
var weep = 'Boo hoo.';

read(em).and(weep);
// => 'Boo hoo.'
