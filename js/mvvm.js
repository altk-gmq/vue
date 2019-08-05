function ZhuFeng(options = {}){
    // 将所有属性挂载到了options
    this.$options = options;
    // this._data
    var data = this._data = this.$options.data;
    observe(data);
}
// vm.$options
// 观察对象给对象增加objectDefineProperty
function Observe(data){
    for(let key in data){
        let val = data[key]
        Object.defineProperty(data,key,{
            enumerable:true,
            get(){
                return val;
            },
            set(newVal){
                if(newVal === val){
                    return
                }
                val = newVal; //以后获取值的时候，将刚才设置的值再丢回去
            }
        })
    }
}
function observe(data){
    return new Observe(data)
}