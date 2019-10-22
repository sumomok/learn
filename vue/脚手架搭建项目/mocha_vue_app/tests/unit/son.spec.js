import Father from '@/components/Father';
import Son from '@/components/Son';
import { shallowMount,mount } from '@vue/test-utils';
import { expect } from 'chai';
// 模拟函数（间谍函数）
import sinon from 'sinon';

describe('测试 Son.vue',()=>{
    it ('测试属性是否渲染正常',()=>{
        const name = '李浩然';
        const age = 18
        const wrapper = mount(Son);
        wrapper.setProps({name,age})
        expect(wrapper.find('.name').text()).to.be.include('李浩然');
        expect(wrapper.find('.age').text()).to.be.include('18');
    });
    it ('点击button后有没有正确执行',()=>{
        const wrapper = mount(Son);
        // 创建个间谍函数
        const spy = sinon.spy();
        // 传入间谍函数
        wrapper.setProps({fn:spy});
        wrapper.findAll('button').at(1).trigger('click');
        // 判断函数触发
        expect(spy.called).to.be.true;
    })
})