export function vmodel(vm,elm,data) {
    elm.onchange = function (event) {
        elm.value = data;
    }
}