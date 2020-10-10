/***
 * 旋转数组
 */
/// 第一种方法，环形，就是有一种特殊情况，在数组长度和移动位置k之间的最大公约数不为1，假设最大公约数为M，数组长度为L,则经过M/K轮移动后，就会回到原点，就会有问题，所以此时需要将原点向后移动一位
// 复杂度为O（n）
var rotate = function(nums, k) {
    var len = nums.length
    var count = 0
    var k = k % len
   for(var start = 0;count < len;start++) {
       var current = start
       var pre = nums[start]
       do{
        var next = (current+k) % len
        var item = nums[next]
        nums[next] = pre
        pre = item
        current = next
        count++
    }while(current!=start)
   }
   return nums
};
var ary = [1,2,3,4]
var k = 2
var result = rotate(ary,k)
// console.log(result)


// 第二种方法，暴力循环, 复杂度为O(K*N)
var ary1 = [1,2,3,4,5,6]
var k1 = 3
var rotate1 = function(nums, k) {
    var len = nums.length
    var k = k % len
    for(var i =0;i<k;i++) {
        var pre= nums[0] 
        for(var j = 0;j<len;j++){
            var tem =  nums[(j+1)%len]
            nums[(j+1)%len] = pre
            pre = tem 
        }
    }
   return nums
};
var result1 =rotate1(ary1,k1)
// console.log(result1)

// 第三种方式,反转

var ary2 = [1,2,3,4,5,6,7]
var k2 = 3
var rotate2 = function(nums, k) {
    var len = nums.length
    var k = k % len
    nums = reverse(nums, 0,len-1)
    nums = reverse(nums, 0,k-1)
    nums = reverse(nums, k, len - 1)
   return nums
};
function reverse (ary, start, end){
    var len = end - start + 1
    var count = Math.floor(len / 2) 
    for(var i = 0;i< count;i++){
        var temp = ary[start + i]
        ary[start + i] = ary[end - i]
        ary[end - i] = temp
    }
    return ary
}
var result2 =rotate2(ary2,k2)
console.log(result2)