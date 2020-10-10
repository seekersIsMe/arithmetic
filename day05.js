var moveZeroes = function(nums) {
    var start = 0
    for(var i=0;i<nums.length - start;i++){
        if(nums[i] ===0){
            start +=1
            var len = nums.length -1
            console.log(len)
            for(var j =i;j<len;j++){
                nums[j]= nums[j+1]
                console.log(j)
                nums[j+1] = 0
            }
            i--
        }
    }
    return nums
};
let ary = [1,0,1]
let result = moveZeroes(ary)
console.log(result)