const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function iterativeFib(n) {
    let [a, b] = [0, 1];
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}

const testTailRecursiveFib = jsc.forall("nat", function(n) {
    return tailRecursiveFib(n) === iterativeFib(n);
});

jsc.assert(testTailRecursiveFib);
