
var bookList = [
    { id: 1, name: '三国演义' },
    { id: 2, name: '水浒传' },
    { id: 3, name: '红楼梦' },
    { id: 4, name: '西游记' },
]

var app=new Vue({
    el: "#app",
    data: {
        bookList: bookList
    },
    methods: {
        btn: function () {
            $(function () {
                var btn1 = document.getElementsByClassName("name");
                var btn2 = document.getElementsByTagName("tr");
                var btn3 = $("tr").children().find().eq(2);
                console.log(btn3);
                for (one of btn1) {
                    console.log(one)
                }

            })
        }
    }
});













