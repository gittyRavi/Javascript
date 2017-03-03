// Define two simple functions
var add_2 = function(x) {
    return x + 2;
};
var double = function(x) {
    return 2 * x;
};

// map is cool function that accepts 2 arguments:
//  func    the function to call
//  list    a array of values to call func on
var map = function(func, list) {
    var output=[];              // output list
    for(idx in list) {
        output.push( func(list[idx]) ); //idx==index and push appends the value to the output list_array
                                        //after work of func is done on list[idx]
    }                                   
    return output;
}


// We use map to apply a function to an entire list
// of inputs to "map" them to a list of corresponding outputs
map(add_2, [5,6,7]) // => [7, 8, 9]
map(double, [5,6,7]) // => [10, 12, 14]
