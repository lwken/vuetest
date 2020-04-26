export default {
    data() {
        return {
            dialogVisible: false
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    }
};

var bookList = [
    { id: 1, name: '三国演义' },
    { id: 2, name: '水浒传'},
    { id: 3, name: '红楼梦'},
    { id: 4, name: '西游记'},
]

var app=new Vue({
    el: "#app",
    data: {
        bookList: bookList,
        msg:"",

        dialogVisible: true,
    },
    methods: {
        btn: function (book,index) {
            console.log(book.name,book.id);
            this.bookList.splice(index,1);
        },
        add:function () {
         this.bookList.push({
             id:5,
             name:'金瓶梅',
         })
        },
        btn1:function(book){
            if ( book.flagname == undefined ) {
                this.$set(book, 'flag', false)
            }

                book.flag=true;
                console.log(book)
      },
      btn2:function(book){
                console.log("失去焦点")
                book.flag=false
            
      },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    // done();
                })
                .catch(_ => {});
        }        

  },


});













