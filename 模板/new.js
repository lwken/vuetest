
var Home={
    template:"<p>{{msg}}</p>",
    data:function () {
       return{
           msg:"首页"
       }
    }
};
var bookList = [
    { id: 1, name: '三国演义' },
    { id: 2, name: '水浒传' },
    { id: 3, name: '红楼梦' },
    { id: 4, name: '西游记' },
]


var About={
    template: "<p>关于我们</p>"
};

var router=new VueRouter({
    routes:[{
        path:"/home",
        component:Home
    },{
        path: "/about",
        component: About
    }]
});
var app=new Vue({
    el:"#app",
    router:router,
    data:{
        bookList:bookList
    }
});













var myapp=new Vue({
    el:"#app"
})