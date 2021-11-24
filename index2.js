let b = 2;
let primenum = false;

function primeNumbers(a) {
    while (b < a) {
        if (a % b == 0) {
            console.log("its not a prime number ")
            primenum = true;
        }
        b++;
    }

    // for(a=2; a< 100 ; a++);
    if (primenum == false) {
        console.log(a, "its a prime number")
        a < 100;
        a++;
    }
}

primeNumbers(1);


