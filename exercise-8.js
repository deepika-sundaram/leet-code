/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {


    let stack=[];
    for(let i=0;i<s.length;i++)
    {
        s[i]==="*"? stack.pop():stack.push(s[i])
    }

    return stack.join('')
    
};