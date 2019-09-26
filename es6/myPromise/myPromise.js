function MyPromise(fun) {
    var self = this;
    self.status = 'pending';
    self.rejvalue = null;
    self.resvalue = null;
    self.resolveArr = [];
    self.rejectArr = [];
    self.rejError = '';
    function resolve(val) {
        setTimeout(function () {
            if (self.status == 'pending') {
                self.status = 'fulfilled'
                self.resvalue = val;
                self.resolveArr.forEach(function (ele) {
                    ele();
                });

            }
        })
    }
    function reject(val) {
        setTimeout(function () {
            if (self.status == 'pending') {
                self.status = 'rejected'
                self.rejvalue = val;
                self.rejectArr.forEach(function (ele) {
                    ele();
                });
            }
        })
    }
    try {
        fun(resolve, reject)
    } catch (e) {
        setTimeout(function () {
            if (self.status == 'pending') {
                self.status = 'rejected'
                self.resvalue = e;
            }
        })
    }

}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    var self = this;
    if (!onFulfilled) {
        onFulfilled = function (val) {
            return val;
        }
    }
    if (!onRejected) {
        onRejected = function (val) {
            return val;
        }
    }
    var nextPromis = new MyPromise(function (res, rej) {
        switch (self.status) {
            case 'fulfilled':
                setTimeout(function () {
                    try {
                        var nextFulfilled = onFulfilled(self.resvalue);
                        checkPromise(nextPromis, nextFulfilled, res, rej);
                        // res(nextFulfilled);
                    }
                    catch (e) {
                        self.rejError = e;
                        rej(e)

                    }
                })
                break;
            case 'rejected':
                setTimeout(function () {
                    try {
                        var nextRejected = onRejected(self.rejvalue);
                        checkPromise(nextPromis, nextRejected, res, rej);
                    } catch (e) {
                        self.rejError = e;
                        rej(e)
                    }
                })
                break;
            case 'pending':
                if (typeof onFulfilled == 'function') {
                    self.resolveArr.push(function () {
                        setTimeout(function () {
                            try {
                                var nextFulfilled = onFulfilled(self.resvalue);
                                checkPromise(nextPromis, nextFulfilled, res, rej);
                            }
                            catch (e) {
                                self.rejError = e;
                                rej(e)
                            }
                        })
                    });
                }
                if (typeof onRejected == 'function') {
                    self.rejectArr.push(function () {
                        setTimeout(function () {
                            try {
                                var nextRejected = onRejected(self.rejvalue);
                                checkPromise(nextPromis, nextRejected, res, rej);
                            } catch (e) {
                                self.rejError = e;
                                rej(e)
                            }
                        })
                    });
                }
                break;

            default:
                break;
        }
    })

    return nextPromis;
}
MyPromise.prototype.race = function (PromiseArr) {
    return new MyPromise(function (res, rej) {
        PromiseArr.forEach(function (promise, index) {
            promise.then(res, rej);
        })
    })
}
MyPromise.prototype.all = function (PromiseArr) {
    var self = this;
    return new MyPromise(function (res, rej) {
        var resultArr = [];
        PromiseArr.forEach(function (promise, index) {
            promise.then(res, rej);
            if (self.status = 'rejected') {
                return rej(rejvalue);
            } else {
                resultArr.push(rejvalue);
                self.status = 'pending';
            }
        })
        res(resultArr);
    })
}
function checkPromise(nextPromis, returnValue, res, rej) {
    if (returnValue instanceof MyPromise) {
        returnValue.then(function (val) {
            res(val);
        }, function (val) {
            rej(val);
        })
    } else {
        res(returnValue);
    }
}
MyPromise.prototype.catch = function (fun) {
    this.then(undefined,fun);
}