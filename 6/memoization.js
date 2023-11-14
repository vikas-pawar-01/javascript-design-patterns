let cache = {};

const add = (a, b) => {

    if (cache[`${a}-${b}`]) {
        console.log(`add(${a},${b}) called from cache..`);
        return cache[`${a}-${b}`];
    }

    console.log(`add(${a},${b}) called first time..`);

    const sum = a + b;
    cache[`${a}-${b}`] = sum;

    return sum;
};

console.log(add(5, 4));
console.log(add(6, 6));
console.log(add(5, 4));
