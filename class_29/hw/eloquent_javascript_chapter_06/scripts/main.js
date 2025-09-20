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
let yourGroup = new Group([8,9,10]);

/*
Iterable groups
*/
class SecondGroup {
	static from(...obj){
		return new SecondGroup(...obj);
	}
	constructor(obj = null){
		if (obj === null){
			this.arr = []
		} else {
			this.arr = obj;
		};
		Group.prototype[Symbol.iterator] = function(){
			return new GroupIterator(this);
		}
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

class GroupIterator {
	constructor(group){
		this.group = group;
	}
	next(){
		if (this.group === null){
			return {done: true};
		}
		let val = this.group.arr.val;
		this.group.arr = this.group.arr.rest;
		return {val, done: false};
	}
}
let myGroup = new SecondGroup({a: 1, b: 2, c: 3});
console.log(yourGroup, myGroup);