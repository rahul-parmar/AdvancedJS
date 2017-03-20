var Observer=function(){
        this.observers=[];
       
    }
    Observer.prototype={
        register:function(cb){
            this.observers.push(cb);
       
           
           
        },
        notify:function(data){
            for(var observer of this.observers){
       
                observer(data);
            }
           
        }
       
    }
   
    module.exports=Observer;