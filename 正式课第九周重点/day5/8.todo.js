let vm = new Vue({
    el:"#app",
    data:{
        task:[{isSelected:false,title:"去爬山"},{isSelected:false,title:"跑步"}],
        val:''
    },
    methods:{
        addTodo(){
             this.task.push({isSelected:false,title:this.val})
             this.val="";
        },
        removeTodo(obj){
              this.task.filter(item=>item!==obj)
        },
        computed:{
            cout(){
                return this.task.filter(item=>item.isSelected).length;

            }

        }
    

    }
})