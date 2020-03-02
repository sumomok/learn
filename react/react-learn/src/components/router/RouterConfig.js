import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
import CompD from './CompD';
import CompE from './CompE';
export default [
    {
        path: "/A",
        component: CompA,
        name: "A",
        children: [{
            path: "/B",
            component: CompB,
            exact: true,
            name: "B",
        }, {
            path: "/C",
            component: CompC,
            exact: true,
            name: "C",
        }, {
            path: "/D",
            component: CompD,
            exact: true,
            name: "D",
        }]
    },
    { path: '/', name: "E", component: CompE, exact: true, },
]