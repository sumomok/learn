jsx支持的指令：
v-show
v-model
jsx不支持的指令

v-html-> dom元素的属性上 domPropsInnerHTML="值"即可
v-text同理

v-if ->{is?is:""}
v-for->{Array.map(item=>(要渲染的元素))}
v-on ->  <button onClick={this.handleClick} ></button>