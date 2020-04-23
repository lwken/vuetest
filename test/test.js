
var bookList = [
    { id: 1, name: '三国演义' },
    { id: 2, name: '水浒传' },
    { id: 3, name: '红楼梦' },
    { id: 4, name: '西游记' },
]

var app=new Vue({
    el: "#app",
    data: {
        bookList: bookList,
        
    },
    methods: {
        btn: function (book) {
            console.log(book.name,book.id)

        },
        add:function () {
         this.bookList.push({
             id:5,
             name:'金瓶梅',
         })
        }
    }
});













