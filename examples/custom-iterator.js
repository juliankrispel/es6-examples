var Numbers = function(nums){
    this._nums = nums;
};

Numbers.prototype[Symbol.iterator] = function(){
    var i = 0;
    var nums = this._nums;
    return {
        next: function(){
            if(nums[i] !== undefined){
                var res = { value: nums[i], done: false };
                i++;
                return res;
            }else{
                return { value: undefined, done: true };
            }
        }
    };
};

var nums = new Numbers([1,2,3,4,5]);

for(var num of nums){
    log(num);
}
