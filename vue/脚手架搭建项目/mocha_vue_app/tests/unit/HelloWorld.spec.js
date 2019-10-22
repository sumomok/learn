import {expect} from 'chai';
import HelloWord from '@/components/HelloWorld';
import Vue from 'vue';
import { mount }  from '@vue/test-utils'

describe('hello word 组件测试渲染',()=>{
    it ('hello word 组件测试渲染',()=>{
        const msg = 'hello word';
        const Constructor = Vue.extend(HelloWord);
        const helloDom = new Constructor({
            propsData:{
                msg
            }
        }).$mount();
        const helloInner = helloDom.$el.getElementsByTagName('h1')[0].innerHTML;
        // expect(helloInner).to.be.include(msg);
        expect(helloInner).to.be.include(msg);
    });
    it ('hello word 组件测试渲染 vue:unit',()=>{
        const msg = 'hello word';
        const wrapper =  mount(HelloWord,{
            propsData:{
                msg
            }
        });
        const wrapperTest = wrapper.find('h1').text();
        expect(wrapperTest).to.be.include(msg);
    })
})