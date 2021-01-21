// https://github.com/Timittra/assignment
//conversion of kilometer to meter (first function)
function kilometerToMeter(kilometer){
    var meter = 0;

    //comparing with the value 2^53=9007199254740992 as it is the maximum safe intiger value. Extending this value may not give accrate output.
    if((kilometer>=0) && (kilometer<=2^53)){
        meter = kilometer * 1000; 
    }
    else{
        //console.log("Wrong input! Thus returning the default value.");
    }
    return meter;
}

//   var result = kilometerToMeter(9.7);
//   console.log(result);


//total budget calculator (second function)
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop){
    var totalBudget = 0;
    if((numberOfWatch>=0) && (numberOfPhone>=0) && (numberOfLaptop>=0)){
    var watchBudget = numberOfWatch * 50;
    var phoneBudget = numberOfPhone * 100;
    var laptopBudget = numberOfLaptop * 500;
    totalBudget = watchBudget + phoneBudget + laptopBudget;
    }
    else{
       // console.log("Invalid input! Thus returning the default value.")
    }
    return totalBudget;
}

//  var result = budgetCalculator(10,6,2);
//  console.log(result);


//calculation of hotel cost (third function)
function hotelCost(numberOfDay){
    var totalCost = 0;
    if(numberOfDay>0){
        if(numberOfDay<=10){
            totalCost = numberOfDay * 100;
        }
        else if(numberOfDay<=20){
            var firstShift = 10 * 100;
            var remainDays = numberOfDay - 10;
            var secondShift = remainDays * 80;
            totalCost = firstShift + secondShift;
        }
        else{
            var firstShift = 10 * 100;
            var secondShift = 10 * 80;
            var remainDays = numberOfDay - 20;
            var thirdShift = remainDays * 50;
            totalCost = firstShift + secondShift + thirdShift;
        }
    }
    else{
       // console.log("Returning default value!");
    }
    return totalCost;
}

//  var result = hotelCost(-1);
//  console.log(result);

//finding the largest name of my friend (fourth function)
function megaFriend(nameOfFriend){
    var friend = [0];
    var i=0;
    while(i<nameOfFriend.length){
        var names = nameOfFriend[i];
        if(friend.length < names.length){
            friend = names;
        }
        else if(friend.length == names.length){
           // console.log('returning the earlist value');
        }
        else{
           // console.log("return default value");
        }
        i++;
    }
    return friend;
}

// var result = megaFriend(['shashi', 'hridi', 'duti', 'timittra', 'samaya', 'LeonelAndressMessi']);
// console.log(result);