import { propDescriptor, classDescriptor, printDescriptor } from "./Descriptor";

@classDescriptor("类A")
class A {
    @propDescriptor("属性1")
    public prop1:string = '';
    @propDescriptor("属性2")
    public prop2:string = '';
}

let t = new A();

t.prop1 = "1";
t.prop2 = "2";

printDescriptor(t)
