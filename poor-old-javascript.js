var haiku = '';

var poor = {
    old: function(lang) {
        haiku += "Don't fret " + lang + ',\n';
    }
};

var trying = {
    toHelp: function() {
        return 'Haters gonna hate.';
    }
};

var inserting = function(str) {
    haiku += 'You are flawed, but so am I,\n';
};

var just = function(fn) {
    haiku += fn();
    console.log(haiku);
};


poor.old('JavaScript'),
inserting('semicolons'),
just(trying.toHelp);


/* Don't fret, JavaScript,
   You are flawed, but so am I,
   Haters gonna hate. */
