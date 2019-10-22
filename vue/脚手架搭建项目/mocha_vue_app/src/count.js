export const abs = num => {
    let res = num;
    if (res < 0) {
        return -res;
    }
    if (typeof res !== 'number') {
        return NaN;

    }
    return res
}

export const add = (...rest) => rest.reduce((prev, next) => prev + next)
let rester = [1,2,3,4]