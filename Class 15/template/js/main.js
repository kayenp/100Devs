class Object {
    constructor(label,value) {
        this.label = label;
        this.value = value;
        this.method = function () {
            this.length;
        };
    };
};

let testObj = new Object("myName", "myValue");

testObj.call(this, this);