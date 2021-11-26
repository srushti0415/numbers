let a = 2;
while (a <= 100) {
    let b = 2;
    let primenum = false;
    while (b < a) {
        if (a % b == 0) {
            primenum = true;
        }
        b++
    }
    if (primenum == false) {
        console.log(a, "its a prime number")
    }
    a++;
}
