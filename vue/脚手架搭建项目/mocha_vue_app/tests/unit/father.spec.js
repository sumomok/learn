import Father from '@/components/Father';
import Son from '@/components/Son';
import { shallowMount,mount } from '@vue/test-utils';
import { expect } from 'chai';


describe('Father.vue',()=>{
    it ('测试子组件触发show函数,显示信息',()=>{
        //只渲染父组件
        const wrapper = shallowMount(Father);
        // 判断某div是否被渲染
        expect(wrapper.find('.info').exists()).to.be.false;
        // 触发show事件 通过son组件去改变father组件的内容
        wrapper.find(Son).vm.$emit('show');
        // 判断show事件是否触发
        expect(wrapper.find('.info').exists()).to.be.true;
    });
    it ('执行chageAge函数，数据改变',()=>{
        const wrapper = shallowMount(Father);
        wrapper.vm.changeAge();
        expect(wrapper.vm.age).to.be.equal(16)
    })
})