import React from 'react';

// 1). by using object

const obj = {
    a: 
    {
        c: 1
    },
    b: 2
}

const obj2 = {
    // copy of 'obj' array
    ...obj,
    // overwrite a
    a: {
        // copy of obj.a
        ...obj.a
    },
    // overwrite c
    c: 3
}


// 2). by using array

const arr = ['a', 'b'];
    // Creating a new copy of arr, with "c" appended to the end
const arr2 = arr.concat('c');
    // make a copy of the original array
const arr3 = arr.slice();
    // mutate the copy:
arr3.push('d');


function CopyOfArray(props) {
    return (
        <div>
           <h4>value of  " obj.b " = </h4>{obj.b} 
           <h4>value of " obj2.c " =</h4> {obj2.c}
           <h4>Arr1 = {arr} </h4>
           <h4>Creating new copy of arr, with "c" appended to the end. Now, Arr2 = </h4>{arr2} 
           <h4>Make a copy of the original array and pushing value 'd'. Now, Arr3 =</h4> {arr3}
        </div>
    );
}

export default CopyOfArray;