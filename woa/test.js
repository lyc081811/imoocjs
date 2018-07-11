// js-> get set

let woniu = {
    _name: '蜗牛',
    get name() {
        return _name
    }
    // set name (val) {
    //     this._name = val
    // }
}
console.log(woniu.name)
woniu.name = 'woniu'
console.log(woniu.name);
