var removeDuplicates = function(nums) {
    for(var i = 0;i<nums.length;i++) {
        var curItem = nums[i]
        nums.splice(i,1)
        if(nums.indexOf(curItem) === -1) {
            nums.splice(i,0,curItem)
        } else {
            i--
        }
    }
    return nums
};
let ary = [1,1,2,2,1]
// console.log('结果',removeDuplicates(ary)) 

var removeElement = function(nums, val) {
   let i = 0
   for(var j =0;j<nums.length;j++){
       if(nums[j] !== val){
        nums[i] = nums[j]
        i++
       }
   }
   return {
        i,
       nums
   }
};
let obj = removeElement([3,2,2,3],3)
console.log(obj.nums.slice(0,obj.i))
// [3,2,2,3] 3 0 0
// [3223] 1 1
// [2223] 2 2
// [2223]  3 3
// [112233]
// [112233]
// [212]
// [123]