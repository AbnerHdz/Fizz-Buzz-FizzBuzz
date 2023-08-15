//Here is the code that prints the numbers from 1 to 100. But for multiples of 3, instead of printing the number, print "Fizz". And for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".//

var i = 0;

while(i <= 99){
    i ++

    if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
    }else if(i % 3 == 0){
        console.log("Fizz")
    }else if(i % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }

}