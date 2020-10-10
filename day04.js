var findKthBit = function(n, k) {
    var initStr = '0'
    for(var j=0;j<n;j++){
        initStr = ex(initStr)
    }
    function ex (s) {
        return s+'1'+reverse(invert(s))
    }
    function reverse(s) {
        var a = s.split('')
        return a.reverse().join('')
    }
    function invert (s) {
        var ary = s.split('')
        for(var i =0;i<ary.length;i++) {
            ary[i] = Number(!Boolean(Number(ary[i])))
        }
        return ary.join('')
    }
    return initStr.charAt(k-1)
};
let sa= findKthBit(4,11)
console.log(sa)