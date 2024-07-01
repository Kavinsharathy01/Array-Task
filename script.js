var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload= function(){
    var res = JSON.parse(request.response);
    console.log(res);
//  Get All the countries and region using filter method 


    var data = res.filter((ele)=>ele.region == "Asia");
    console.log(res);

//Get the countries with population less than 2 lakhs using filter method 

var popu = res.filter((ele)=>ele.population<200000);
console.log(popu);

// Print the total population of countries using reduce method


var ceurope = res.filter((ele)=>ele.region="Europe");
var cpopu = ceurope.reduce((acc,cv)=>acc+cv.population,0);
console.log(cpopu);

// Print the following details Using forEach method (name,capital,flag)

arr = ['Thailand','Bangkok','Bhat'];
arr1 =  ['Vietnam','Hanoi','Dong'];
arr.forEach(quit => {
    console.log(quit)
    arr1.forEach(capital => 
        console.log(capital))

});


};


