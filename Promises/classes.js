//Leaning today:

/* 
1. Classes in Js 
2. Revise Callbaccks
3. Callback Hell 
4. Promises
5. Async - await
*/

// Primitive Types
/* 1. numbers
2. string
3. boolean
 */

// Complex types
/* 1. Objects
2. Arrays */

// Blueprint for creating an object(having properties and methods) 

class Rectangle {
    constructor(width, height, color) {  // Blueprint
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        console.log(`Painting with color ${this.color}`);
    }

}

const rect = new Rectangle(2, 3, 4);
// console.log(rect.area())
// rect.paint()
// console.log(rect)

// More Classes ----> Date(), Map()

// Date()
const now = new Date() 
// console.log(now)

// Map()

const map = new Map()
map.set("name", "Alice");
map.set("age", 30);
console.log(map.get('age'))