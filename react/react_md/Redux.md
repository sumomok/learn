# Redux核心概念

React-->ui解决方案

action reducer store

## MVC
他是一个ui的解决方案，用于降低UI，以及UI关联数据的复杂度

**传统的服务器端的MVC**

环境：
1. 服务端需要响应一个完整的html
2. 该html中包含页面需要的数据
3. 浏览器仅承担渲染页面的作用

以上的这种方式叫做**服务端渲染**，即服务器端将完整的页面组装好之后，一起发送给客户端。
服务器端需要处理ui中要用到的数据，并且要将数据嵌入到页面中，最终生成一个完整的html

为了解决这个问题的复杂度，出现了mvc架构

**contorller**:处理请求，组装这次请求需要的数据
**MODEL**：需要用于UI渲染的数据模型
**View**：视图，用于将模型组装到界面中

**前端MVC的模式的困难**

react 解决了 数据->视图的问题
但是 控制器->数据 难以解决（同一数据可能有不同的更改方式，不好更改的同时还不利于维护）
1. 前端的controller要比服务器情况复杂的多，因为前端中的controller处理的是用户的操作，而用户操作场景是复杂的
2. 对于组件化的框架（vue，react），它们使用的是单向数据流。若需要共享数据，则必须将数据提升到顶层，然后一层层的传递，这样会导致对数据的操作难以监控，容易导致调试错误的困难，以及数据还原的困难，并且，若开发一个大中型项目，共享的数据很多，会导致上下文中的数据编的非常复杂。
## 前端需要一个独立的数据解决方案
    用于降低数据复杂度

**Flux**
标准：只能包括 type,payload,error,meta 四个属性
facebook提出的数据解决方案，它最大的历史意义，在于它引入action 充当一个交互和数据模型间的中间层，

action 就是一个普通对象，用于描述要干什么

示例：
```js
var action = {
    type:"login",
    payload:{
        loginId:"admin",
        password:"123"
    }
}
```
其中 type表明了 这个action要做什么，附带的数据是什么 （类似于定义接口，断开了与操作的耦合）

store 表示数据仓库，用于存储共享数据，还可以根据不同的action更改仓库中的数据

**Redux**

引入了 reducer 的概念  在 action 与 store 中间再加一层处理层 根据action来处理store中的数据，处理完毕之后 store再次存储结果
## Action

1. action 是一个plain-object 对象（平面对象）
    1. 他的__proto__指向Object.prototype (即直接赋值{}或者new object得到的对象)（通过其他构造函数形成的对象会报错）
2. action 必须有type属性，该属性用于描述操作类型
    1. type类型无要求
3. 通常,使用payload属性来表示附加属性（无强制要求）
4. 在大型项目中，由于操作类型非常多，为了避免硬编码（hard code 即 判断时写死的字符串 例：if(type === "set")其中"set"即为硬编码），会将action的类型存放到一个或者一些单独的文件中（样板代码）。
5. 为了方便传递action，通常会使用action创建函数（action createor）来创建action
    1. action创建函数应为无副作用的纯函数
        1. 不能以任何形式改动参数
        2. 不可有异步
        3. 不可以对外部环境中的数据造成影响
6. 为了方便利用action创建函数来分发（触发）action，redux提供了一个函数（bindActionCreators），该函数用于增强action创建函数的功能，使他不仅可以创建action，并且创建后悔自动完成分发
## reducer

reducer 是用来改变数据的函数

1. 一个数据仓库 有且仅有一个reducer，并在通常情况下，一个工程文件只有一个仓库，因此，一个系统只有一个reducer
2. 为了方便管理，通常会将reducer放到单独的文件中。
3. reducer调用的时机
    1. 当创建了一个store时，会调用一次reducer
        1. 创建仓库，不传递任何默认状态时，可以利用创建时调用reducer的特性和给第一个参数state默认值的形式，来初始化数据仓库中的数据
    2. 用过store.dispatch，分发一个action的时候，此时，会调用reducer
4. reducer内部通常使用switch来判断type值（代码简单，高效）
5. **reducer**必须是一个没有副作用的纯函数（redux并没有明确要求（无法判断是不是纯函数），但公司会要求必须是纯函数）
    1. 纯函数有利于测试和调试
    2. 有利于还原数据
    3. 有利于将来和react结合时的优化
    4. 具体要求
        1. 不能改变参数
        2. 不能有异步
        3. 不能对外部环境造成影响
6. 由于在大中型项目中，操作比较复杂，数据结构也比较复杂，一般会对reducer进行细分
    删除：数组的filter方法
    修改：map方法
    原则是不能修改原来的state
## Store 数据仓库

通过createStore方法创建的对象

该对象成员
- dispatch  分发action
- getState  得到仓库中当前的状态
- replaceReducer 替换当前的reducer
- subscribe 注册一个监听器，监听器是一个无参函数，当分发一个action后 触发该监听器
## Redux中间件 （middleware）
### 中间件
中间件：类似于插件，可以在不影响原本功能、且不改动原来代码的基础上，对其功能进行增强，在redux中，中间件主要用于增强dispatch函数。

实现redux中间件的基本原理，是更改仓库中的dispatch函数

redux中间件的书写：
- 中间件本身就是一个函数，该函数接受一个store参数，表示创建的仓库，该仓库并非一个完整的仓库对象，仅包含getState，dispatch,该函数运行的事件是创建仓库之后运行。
 - 由于创建仓库后需要自动运行设置的中间件函数，因此，需要在创建仓库时，告诉仓库有哪些中间件
 - 需要调用 applyMiddleware函数，将函数的返回结果作为createStore的第二或第三个参数。

 中间件函数必须返回一个dispatch创建函数

 applyMiddleware函数，用于记录有哪些中间件，他会返回一个函数
  该函数用于记录创建仓库的方法，然后又返回一个函数
### redux-logger
  日志记录工具，建议传入中间件时将此放到参数的最后一位
  https://www.npmjs.com/package/redux-logger
### 副作用处理的中间件
  #### redux-thunk
  用来处理action中返回为函数的情况，如果返回对象，跳过此中间件直接运行下一个中间件
  原理：通过判断action是否是一个函数，来处理action为异步的情况
  #### redux-promise
  原理：
  1. 先判断action是否是一个标准的flux对象，如果不是，
    1. 判断action是否是一个promise，
        1. 如果是 在.then(dispatch)中调用dispatch（从中间件首层函数参数中解构出 dispatch）并且后面跟.catch(error=>dispatch({
        ...action,
        payload:error,
        error:true
        }))用来处理出错的问题 
        2. 如果不是 则直接next(action)交给下一个中间件或原始dispatch来处理）
  2. 如果是一个flux对象，
    1. 判断action.payload 是否是一个promise
        1. 如果是一个promise 则 action.then(dispatch).catch(error=>dispatch({
            ...action,
            payload:error,
            error:true
        }))
        2. 如果不是一个promise 则直接next(action)
  #### 迭代器、可迭代协议、生成器（es6复习）
    以上两个中间件均用来解决副作用问题
    - redux-thunk 需要改动action，可接收action是一个函数
    - redux-promise 需要改动action，可接收action是一个promise对象，或action的payload是一个promise对象
1. 以上两个中间件的问题
    会导致redux不在纯净，不符合redux设计初衷（全部为平面对象和纯函数）
2. redux-saga** 
    就是用来解决上述问题，而且可以用模块化的方式解决副作用，并且非常强大
    redux-saga是建立在es6的生成器基础上的，要熟练的使用saga，必须理解生成器
3. 迭代
    类似于遍历
    遍历：有多个数组组成的集合数据结构（map,set,array等其他类数组），需要从该结构中一次去除数据进行某种处理
    迭代：按照某种逻辑，依次取出下一个数据进行处理。
    区别：迭代不需要一个具体的集合来进行
4. 迭代器 iterator
    js语言规定，如果一个对象具有next方法，并且next方法满足一定的约束，该对象是一个迭代器
    value：为任意值，下一个数据的值
    done：bool类型，表示是否迭代完成
    通过迭代器的next方法，可以依次取出数据，并根据done属性，判定是否迭代结束
5. 迭代器创建函数 iterator creator

    他是指一个函数，调用该函数，返回一个iterator，
    则该函数称为迭代器创建函数
6. 可迭代协议

    ES6中出现for-of循环，该循环就是用于迭代某个对象的。因此 for-of要求对象必须可迭代

    可迭代协议用于约束一个对象，如果一个对象满足下面的规范，则该对象满足可迭代协议，则它就是可迭代
    
    可迭代协议：
    1. 对象必须有个知名符号属性（Symbol.iterator）
    2. 该属性必须是一个无参的迭代器创建函数

    **for-of 原理**
    调用对象的[Symbol.iterator]属性，得到一个关于该对象的迭代器，不断调用next方法，并将value值当做值传递给for-of中声明的变量，当返回值的属性done为true时停止循环，

```javascript
    var jsobj = {
        next(){
            return {
                value:xxx,
                done:true/false //指
            }
        }
    }
```
7. 生成器

    由构造函数generator创建的函数，该对象既是一个迭代器，也是一个可迭代对象

**generator构造函数不提供给开发者使用，仅作为浏览器渲染引擎使用**

    如何使用：

    在function关键字和函数名之间加 * 来声明一个生成器
```js
// 这样就创建了一个生成器函数，调用函数返回一个generator
function * test(){
    yield; // 只能在生成器中使用
}
```
    生成器函数的特点：

1. 调用生成器函数会，会返回一个生成器，而不是只能函数体（生成器函数的函数体执行，受到生成器的控制）
2. 每当调用生成器的next方法，生成器函数就会从上一个yield的位置运行到下一个yield的位置
    1. yield关键字只能在生成器函数内部使用，其他地方报错
    2. 他表示暂停，在yield后跟数值，会将该数值传递给next()执行结果中 (yield 1; => {value:1,done:false})
    3. 如果没有下一个yield，到了函数结束，则生成器的next方法得到的结果中done为true 
        1. 如果结束后依旧反复调用next 则永远返回{value:undefined}
    4. 生成器在调用next的时候，可以传参数，作为上一次yield的返回值
        1. 生成器第一次调用next函数时，传递参数没有任何意义
    5. 生成器带有一个throw方法，该方法与next的效果相同，唯一区别在于：
        1. next方法传递的参数会被返回一个正常值
        2. throw方法传递的参数是一个错误对象，会导致生成器函数内部发生一个错误。
    6. 生成器带有一个return方法，该方法会直接结束生成器函数
    7. 若需要在生成器内部调用其他生成器，注意：如果直接调用，得到的是一个生成器，如果yield * 生成器函数() 则会
    深入到生成器内部调用内层生成器的函数体


  #### redux-saga
    特点：
    - 纯净
    - 功能强大
    - 比较灵活

    中文文档 https://redux-saga-in-chinese.js.org/

    在saga任务中，如果yield了一个普通数据，saga不会进行任何操作，仅仅将数据传递给yield表达式（把得到的数据放到next的参数中），因此，在saga中，yield一个普通数据无意义

    saga 需要在yield后放指令，（saga effect），如果放的是saga指令，saga中间件会根据不同的指令进行特殊处理，以控制整个任务的流程。
    **一旦生成器函数运行完成，saga中间件将失效（不完全失效，将action传递给下一个中间件）**
    **指令前边必须在前面加yield，否则无效果**
    指令
    - take指令（阻塞）
        监听某个action，如果action发生了，则会进行下一步处理，take指令仅监听一次。
    - all指令（阻塞）
        该函数传入一个数组，数组中放入生成器，saga会等待所有的生成器全部完成后才会进一步处理
    - takeEvery指令（不阻塞，但循环监听）
        不断的监听某个action，当某个action到达之后，运行一个函数
    - delay指令 （阻塞，控制阻塞多少秒）
        延迟多少毫秒
    - put指令 （不阻塞）
        重新分发一个action，相当于在yield后执行了dispatch一个action（注意：saga执行过程中如果对结果有修改会默认冻结已监听的分发action后通过reducer得到的结果，将结果变为只能分发该action时才可以修改，所以只能用saga来监听一些不生成结果的action，通过put指令来触发正常的action）
    - call指令 （可能阻塞）
        用于副作用函数（通常是异步）调用，如果要改变this 则第一个参数是this，将要执行的函数放入数组中，成为第二个参数
    - apply指令 （可能阻塞）
        与call作用相同，与原生apply用法相同
    - select指令（可能阻塞）可以传一个函数，通过这个函数对仓库中的数据进行筛选
        用于得到当前仓库中的数据
    - cps指令（可能阻塞）
        用于调用传统的回调函数的异步
    - fork 指令
        用于开启一个新的任务，该任务不会阻塞，该函数需要传递一个生成器函数
    - cancel 指令
        
    - cancelled 指令
    - race 指令

