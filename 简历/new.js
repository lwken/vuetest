

var activities=[
    {
        content: '市场部    产品/品牌主管 ',
        timestamp: "2012年/08月–至今 ",
        size:'large',
        type:'primary',
        icon:"el-icon-user-solid",
        top:"维他奶（上海）有限公司",
        text:"工作职责是品类管理（现有产品线管理及新品上市）和品牌建设及维护。通过市场运作，使品牌形成较高认知度及美誉度，提及知名度占90%以上。与此同时，产品利益点得到良好传播，产品渗透率稳步提升，年销量涨幅超过25%，稳居品类市场份额占第一。"
    },
    {
        content: '综合管理部    品牌宣传',
        timestamp: " 2009年/11月–2012年 /08月 ",
        size:'large',
        type:'primary',
        icon:"el-icon-s-promotion",
        color:'#0bbd87',
        text:'根据品牌定位，制定全年内宣及外宣策略。对内负责企业文化建设项目的具体组织、协调、联络及执行。对外负责撰写新闻、通讯等稿件，报送行业媒体及社会刊物，扩大公司在整个社会的曝光度和影响力；负责参与建立新闻应急处置预案，积极维护公司品牌形象；开展舆情监测工作，并做好相关媒体公关工作。',
        top:'中国东方航空集团公司地产板块'

    },
    {
        content: '项目经历',
        timestamp: " 2013年/10月–2014/12月",
        size:'large',
        type:'primary',
        icon:"el-icon-more",
        color:'#0bbd87',
        top:'高端系列新品上市',
        text:'基于行业发展趋势，准确抓住消费者内心诉求，适时推出维Vitasoy高端系列产品，以期抢占高端奶市场份额。新品上市后，受到较好的消费者反馈。线上投放 迅速建立品牌知名度，线下则与消费者深度沟通。产品上市短短数月内已完成亿元销额，在部分城市，铺货及市场份额已超越众多知名品牌。'

    },
    {
        content: '项目经历',
        timestamp: "2020-5-28 11:26:11",
        size:'large',
        type:'primary',
        icon:"el-icon-loading",
        color:'#0bbd87',
        top:'高端系列新品上市',
        text:'基于行业发展趋势，准确抓住消费者内心诉求，适时推出维Vitasoy高端系列产品，以期抢占高端奶市场份额。新品上市后，受到较好的消费者反馈。线上投放 迅速建立品牌知名度，线下则与消费者深度沟通。产品上市短短数月内已完成亿元销额，在部分城市，铺货及市场份额已超越众多知名品牌。'
    },

]



var app=new Vue({
    el:"#app",
    data:{

        reverse:true,
        activities:activities,
        list:[
            {id:'PS切图',url:"image/1.jpeg"},
            {id:'网页制作',url:"image/02.jpg."},
            {id:'前端功能',url:"image/01.jpg"},
            {id:'h5页面',url:"image/03.jpg"},
        ]
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true);

    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.handleScroll, true)
    },
    methods: {
        handleScroll() {
            var scrollT = this.$refs.contentbox.scrollTop;
            this.scrollY = scrollT;
            if($('#top').height<this.scrollY){
                $('#nav').addClass("newcss")
            }
            else{
                $('#nav').removeClass("newcss")
            }
        }
    }
});















