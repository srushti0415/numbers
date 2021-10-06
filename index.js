function myfunction(a,b,c,d){
    if (a>b && a>c && a>d){
        console.log("a is max ")
    }
    else if (b>a && b>c && b>d){
        console.log("b is max")
    }
    else if (c>a && c>b && c>d){
        console.log("c is max")
    }
    else {
        console.log("d is max")
    }
}
myfunction(2,4,8,7)