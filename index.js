let x = process.argv.slice(2);
let add = Number(0); sub=1; mult=2; divide=1; sin:0; cos:0; tan=0; random:3;

for(let a=0; a<x.length; a++){
    add += + x[a];
    sub =+ sub-x[a];
    mult *=+ x[a];
    divide =+ x[a]/divide;
    sin = Math.sin(x[a]);
    cos = Math.cos(x[a]);
    tan = Math.tan(x[a]);
    random = Math.random()*x[a];
}
console.log(add);
console.log(sub);
console.log(mult);
console.log(divide);
console.log(sin);
console.log(cos);
console.log(tan);
console.log(random);