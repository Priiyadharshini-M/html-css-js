function * getMarks(){
    console.log("Step 1")
    yield 10
    console.log("Step 2")
    yield 20
    console.log("Step 3")
    yield 30
    console.log("End of function")
 }
    let markIter = getMarks()
    console.log(markIter.next())
    console.log(markIter.next())
    console.log(markIter.next())
    console.log(markIter.next()) // iteration is completed;no value is returned

    function * evenNumberGenerator(){
        let num = 0;
        while(true){
           num+=2
           yield num
        }
     }
     // display first two elements
     let iter = evenNumberGenerator();
     console.log(iter.next())
     console.log(iter.next())
     //using for of to iterate till 12
     for(let n of evenNumberGenerator()){
        if(n==12)
        {
            break;
        }
        console.log(n);
     }
