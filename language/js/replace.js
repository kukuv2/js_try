var a = 'Yes. aa; .aa bb;bb'

var result = a.replace(/[,.;:"~!@#$%\^&*()\-_+=\[\]|\\{}<>?\/]/g,function(match,offset,string){
    if(!/\s/.test(string.substr(offset-1,1))){
        match = ' ' + match
    }
    if(!/\s/.test(string.substr(offset+1,1))){
        match = match + ' '
    }
    return match
})
console.log(result);
console.log(result.split(' '));
