import {abs,add} from '@/count'
import {expect} from 'chai'

it('测试给abs传入证书，期待返回值与输入相同',()=>{
    // expect(1+1).to.be.equal(2);
    expect([abs(1),abs(0),abs(-1),abs('abc')]).to.deep.be.equal([1,0,1,NaN]) // 深度对比   对比键值对
    expect([abs(1),abs(0),abs(-1),abs('abc')]).to.be.eql([1,0,1,NaN]) // 深度对比
});
describe('add函数',()=>{
    it('测试给abs传入正数，期待返回值与输入相同',()=>{
        // expect(1+1).to.be.equal(2);
        expect([abs(1),abs(0),abs(-1),abs('abc')]).to.deep.be.equal([1,0,1,NaN]) // 深度对比   对比键值对
        expect([abs(1),abs(0),abs(-1),abs('abc')]).to.be.eql([1,0,1,NaN]) // 深度对比
    });
    it('测试给abs传入负数，期待返回值与输入相同',()=>{
        expect(abs(-1)).to.deep.be.equal(1) // 深度对比   对比键值对
    })
})