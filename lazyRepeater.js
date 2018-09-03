
/**
 The makeLooper() function (make_Looper in Python) takes a string (of non-zero length) as an argument. 
 It returns a function. The function it returns will return successive characters of the string on successive invocations
 It will start back at the beginning of the string once it reaches the end.
 
 ex)
var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
 */
var counterLimit;
var counter;

function makeLooper(str) {
    if(!counterLimit)
    counterLimit = str.length
    if(!counter)
    counter = 0
    var strIndex = str[counter]
    counter++
    if (counter === counterLimit)
    counter = 0
    return strIndex
    }
 
    console.log(make_Looper("promises"));
    console.log(make_Looper("promises"));
    console.log(make_Looper("promises"));

    

