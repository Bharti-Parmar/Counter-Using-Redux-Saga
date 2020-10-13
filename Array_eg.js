import React from 'react';

// 1). for object
const obj = { a: 1, b: 2 };
// still the same object outside, but the contents have changed
obj.b = 3;

// 2). for array
const arr = ['a', 'b'];
// In the same way, we can change the contents of this array
arr.push('c');
arr[1] = 'd';

function Array_eg(props) {
    return (
        <div>
            <h4>Updated value of obj : </h4>{obj.b}
            <h4>After pushing 'd' : </h4> {arr.push('d')}
            <h4>Array : </h4>{arr[0] + ',' + arr[1] +  ',' + arr[2] + ',' +  arr[3]}
        </div>
    );
}

export default Array_eg;