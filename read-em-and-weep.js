function read(hand) {
    return {
        and: function(fn) {
            fn.call(hand);
        }
    };
}

var em = ['A♠', 'K♠', 'Q♠', 'J♠', '10♠'];
var weep = function() {
    var royal = 'A♠, K♠, Q♠, J♠, 10♠';
    console.log(this.join(', ') === royal ? 'Boo hoo.' : "I've seen better.");
};

read(em).and(weep);
// => Boo hoo.
