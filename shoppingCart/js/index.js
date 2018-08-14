/**
 * Created by mengchengchang on 2018/7/16.
 */
//import axios from 'axios'
//Vue.prototype.$http = axios

new Vue({
    el:"#app",
    data:{
        title:"",
        totalMoney:0,
        productList:[],
        checkAllFlag:false,
        ajaxdata:[]
    },
    filters:{
        formatMoney:function(value,item){
            return "￥" + value.toFixed(2) + item;
        }
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getData();
            this.getDataAjax();
        })
    },
    methods:{
        getData:function(){
            this.title="购物车"
            var _this=this;
            this.$http.get("http://132.232.41.183:8080/shoppingCart/data/data.json").then(function(res){
                if(res.statusText=="OK"){
                    console.log(res.body);
                    _this.productList=res.body.allData;
                }
            })
        },
        getDataAjax:function(){
            var _this=this;
            this.$http.get("http://132.232.41.183:8080/shoppingCart/data/flasktest.py").then(function(res){
                console.log(res.body);
                _this.ajaxdata.push(res.body);
            })
        },
        changeAmount: function (item,way) {
            console.log(1);
            if(way>0){
                item.productAmount++;
            }else {
                item.productAmount--;
                if(item.productAmount<1){
                    item.productAmount=1;
                }
            }
            this.allPrice();
        },
        changeCheck: function (item) {
            if(typeof item.checked == "undefined"){
                this.$set(item,"checked",true);
            }else {
                item.checked = !item.checked;
                if(item.checked==false){
                    this.checkAllFlag=false;
                }
            }
            var thisFlag=true;
            this.productList.forEach(function(item,index){
                if(typeof item.checked == "undefined"||item.checked==false){
                    thisFlag=false;
                }
            })
            if(thisFlag){
                this.checkAllFlag=true;
            }
            this.allPrice();
        },
        checkAll:function(flag){
            var flags=!flag;
            this.checkAllFlag = !this.checkAllFlag;
            var _this=this;
            if(flags){
                this.productList.forEach(function(item,index){
                    if(typeof item.checked == "undefined"){
                        _this.$set(item,"checked",true);
                    }else {
                        item.checked = true;
                    }
                })
            }else {
                this.productList.forEach(function(item,index){
                    if(typeof item.checked == "undefined"){
                        _this.$set(item,"checked",true);
                    }else {
                        item.checked = false;
                    }
                })
            }
            this.allPrice();
        },
        allPrice:function(){
            this.totalMoney=0;
            var _this=this;
            this.productList.forEach(function(item,index){
                if(item.checked){
                    _this.totalMoney+=item.productAmount*item.price;
                }
            })
        }
    }
})


