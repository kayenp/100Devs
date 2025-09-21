/*
A vector type
*/
class Vec{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	plus(vec){
		return new Vec((vec.x + this.x), (vec.y + this.y));
	}
	minus(vec){
		return new Vec((vec.x - this.x), (vec.y - this.y));
	}
	get length(){
		return Math.sqrt(this.x**2 + this.y**2);
	}
}

/*
Groups
*/
class Group{
	static from(obj){
		return new Group(...obj);
	}
	constructor(obj = null){
		if (obj === null){
			this.arr = []
		} else {
			this.arr = obj;
		};
	}
	add(value){
		(this.arr.indexOf(value) === -1) ? this.arr.push(value) : "";
	}
	delete(value){
		(this.arr.indexOf(value) !== -1) ? this.arr.splice(this.arr.indexOf(value), 1) : "";
	}
	has(value){
		return (this.arr.indexOf(value) !== -1)
	}
}
let yourGroup = Group.from([8,9,10]);

/*
Iterable groups
*/
class SecondGroup {
	constructor(){
		this[0] = [];
	}

	add(value){
		(this[0].indexOf(value) === -1) ? this[0].push(value) : "";
	}
	delete(value){
		(this[0].indexOf(value) !== -1) ? this[0].splice(this[0].indexOf(value), 1) : "";
	}
	has(value){
		return (this[0].indexOf(value) !== -1)
	}
	static from(group){
		let newGroup = new this;
		for(let i = 0; i < group.length; i++){
			newGroup.add(group[i]);
		}
		return newGroup;
	}
}

class GroupIterator {
  constructor(group) {
    this.group = group;
	this.i = 0;
  }

  next() {
    if (this.group[0][this.i] == null) {
      return {done: true};
    }
    let value = this.group[0][this.i]
	this.i++;
    return {value, done: false};
  }
}
SecondGroup.prototype[Symbol.iterator] = function(){
	return new GroupIterator(this);
};

let testSecondGroup = SecondGroup.from(["x", "y", "z"]);

for(let elem of testSecondGroup){
	console.log(elem);
}
