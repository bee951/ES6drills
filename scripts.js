function favMovie(movie='The Room',name="world") {
    console.log(`my name is ${name} and my favorite movie is ${movie}`);
}
favMovie()
//console logs my name is world and my favorite movie is The Room
//arrow Functions
let favMovie2=(movie='The Room',name="world") =>console.log(`my name is ${name} and my favorite movie is ${movie}`);
favMovie2()
let getFirstName = (pname) => {
    var nameset=pname.split(' ')
    console.log(`${nameset[0]}`)
};
let getFirstNamecb=pname=>console.log(`${pname.split(' ')[0]} cb`);
let mname="Ben Easterwood";
getFirstName(mname);
getFirstNamecb(mname);
let parprop=(x,y)=>console.log({
    exponent: x**y,
    product: x*y
});
parprop(3,2)
//Spread Syntax
function divider(name, location, favFood) {
    console.log(name)
    console.log(location)
    console.log(favFood)
}
let arr=["Ben","Irondale","Ice Cream"]
divider(...arr)
function butterknife(arr){ 
    let strg=[...arr];
    for (let index = 0; index < strg.length; index++) {
        console.log(arr[index])
        
    }
}
let st='Benjamin Easterwood'
butterknife(st)