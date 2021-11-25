// let b = 2;
// let c = 1;

// function perfectNumber(a) {
//     while (b < a) {
//         if (a % b == 0) {
//              c = c + b ;
//             console.log("it's  not a prime number")
//         }
//         b++;
//     }
//     if (c == a) {
//         console.log("its a prime no")
//     }

// }
// perfectNumber(6);

let a = 5;
while (a < 10000) {
let b = 2;
let sum = 1;
    while (b < a) {
        if (a % b == 0) {
            sum = sum + b;
        }
        b++;
    }
      if (a == sum) {
        console.log(a, "it is a perfect number ")
    }
    a++;

}