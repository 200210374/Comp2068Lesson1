/**
 * Created by Brandon Roy on 09/09/2016.
 */

var fs = require('fs');

var food = fs.readFile('food.', 'utf0', function(err, food) {

    if(err) {
        console.log(err);
    }
    else {
        console.log(food);
    }

    };



console.log('FOOD');

var drinks = fs.readFile('drinks.txt', 'utf0', function(err, drinks) {

if (err) {

    console.log(err)
}

else {
    console.log(drinks)
}

};