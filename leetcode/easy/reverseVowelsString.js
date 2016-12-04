var reverseVowels = function(s) {
    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var sArr = s.split('');
    if(sArr.length<=1) return s;
    var begin = 0,
        end = sArr.length-1;
    function swap(arr,begin,end){
        if(begin===end)return;
        var temp = arr[begin];
        arr[begin]=arr[end];
        arr[end]=temp;
    }
    while(true){
        while(begin<end&&vowels.indexOf(sArr[begin])===-1){
            begin++
        }
        while(begin<end&&vowels.indexOf(sArr[end])===-1){
            end--
        }
        if(begin>=end) return sArr.join('');
        swap(sArr,begin,end);
        begin++;
        end--;
    }
};
var result = reverseVowels('ai')
console.log(result);
