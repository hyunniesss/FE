var star = '';
for(var i in 10){
    console.log('I = ', i);
    for(var j in i){
        console.log('J = ', j);
        star += '*';
    }
    star += '\n';
}
console.log(star);