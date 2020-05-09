
var tablelist={
    data(){
        const item={
           date:2020-5-8,
           name:'木木',
           address:'广东广州海珠市二宫'
}
   return {
            tableData: Array(20).fill(item)
   }
    }
}
var Ctor=Vue.extend(tablelist);
new Ctor().$mount('#app')