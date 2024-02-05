function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
  
// console.log(makeLine(5))

function makeSquare(size){
    let square = "";
    for (let i=0; i<size; i++) {
        square += (makeLine(size) + "\n")
    }
    square = square.slice(0,-1)
    return square
    
}

// console.log(makeSquare(5))


function makeRectangle (width,heighth){
    let rectangle = "";
    for (let i=0; i<heighth; i++){
        rectangle+= (makeLine(width)+ "\n");
    }
    rectangle = rectangle.slice(0,-1);
    return rectangle
}

// console.log(makeRectangle(2,6))

function makeSquareFromRectangle(sideLength){
    let squareFromRectangle = makeRectangle(sideLength,sideLength);

    return squareFromRectangle;
}

//console.log(makeSquareFromRectangle(3))

function makeDownwardStairs(height) {
    let stairs = '';
    for (i=0; i<height; i++){
        stairs = (makeLine(height-i)+ "\n" + stairs);
    }
    return stairs;
}

// console.log(makeDownwardStairs(5))

function makeSpaceLine(numSpaces, numChars){
    let spaceLine = "";
    for(i=0;i<numChars;i++){
        spaceLine+="#";
    };
    for (j=0;j<numSpaces;j++){
        spaceLine = " " + spaceLine + " ";
    }
    return spaceLine
}

// console.log(makeSpaceLine(3,2))

function makeIsoscelesTriangle(height){
    let isoscelesTriangle = "";
    for (let i=0; i<height; i++){
        isoscelesTriangle += (makeSpaceLine(height -i -1, 2*i +1)+ "\n" );
    };
    isoscelesTriangle = isoscelesTriangle.slice(0,-1);
    return isoscelesTriangle
}

// console.log(makeIsoscelesTriangle(4))
function reverse(str) {
    return str.split('').reverse().join('');
 }


function makeDiamond(height){
    let topHalf = makeIsoscelesTriangle(height);
    let diamond= topHalf+"\n"+reverse(topHalf);
    return diamond;
}
console.log(makeDiamond(4))