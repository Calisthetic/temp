console.log(Func(10, 5));
console.log(Func(4, 5));
console.log(Func(1, 5));
console.log(Func(4, 1));
console.log(Func(4, 10));
console.log(Func(8, 8));
console.log(Func(4, 5));
console.log(Func(2, 1));

function Func(width, height) {
    let mass = [];
    console.log("width: " + width);
    console.log("height: " + height);
    while (width !== 0 || height !== 0) {
        if (height < width) {
            mass.push(height);
            width -= height;
        }
        else if (width < height) {
            mass.push(width);
            height -= width;
        }
        else if (height === width) {
            mass.push(height);
            height = 0;
            width = 0;
        }
    }
    return mass;
}