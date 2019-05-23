new Vue({
    el : ".container",
    data : {
        //创建一个数组
        array : [
            //创建一个对象 三个值 name age email
            {name:"Tom",age:20,email:"tom@itany.com"},
            {name:"Jack",age:30,email:"Jack@itany.com"}
        ],
        //创建一个空对象
        user : {},
        //创建一个方法
        nowIndex : -1
    },
    methods : {
        //
        Add : function(){
            //点击这个方法让arr’ay里面的数据添加到空的对象里面
            this.array.push(this.user);
            this.user = {};
            // console.log(this.user)

        },
        Del : function(){
            //判断如果 nowIndex等于-1
            if(this.nowIndex == -1){
                //让array数组为空
                this.array = [];
            }else{
                this.array.splice(this.nowIndex,1);
            }
        }
    }
})
