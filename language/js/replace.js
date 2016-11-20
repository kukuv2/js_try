var a = 'aa; .aa bb;bb'

var result = a.replace(/[,.;]/g,function(match,offset,string){
    if(!/\s/.test(string.substr(offset-1,1))){
        match = ' ' + match
    }
    if(!/\s/.test(string.substr(offset+1,1))){
        match = match + ' '
    }
    return match
})
console.log(result);
