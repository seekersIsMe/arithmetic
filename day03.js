var makeGood = function(s) {
    var list = s.split('')
   var result = del(list,list.length)
   function del(ary,l){
       for(var i =0;i< ary.length - 1;i++){
           if(ary[i].toLowerCase() === ary[i+1].toLowerCase() &&ary[i+1] !==ary[i]){
                   ary.splice(i,2)
                   i--
            }
       }
       if(l !== ary.length){
          return del(ary,ary.length)
        } else{
            return ary.join('')
        }
   }
  return result
};
let str = "leEeetcode"
let s = makeGood(str)
console.log(s)