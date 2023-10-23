
function saturdayFun(item) {
    if(item===undefined){
        item= 'roller-skate';
    }
    return (`This Saturday, I want to ${item}!`);
}

function mondayWork(item){
    if(item===undefined){
        item= 'go to the office';
    }
    return (`This Monday, I will ${item}.`);
}

function wrapAdjective(wrap = '*') {
    
    return function(item = 'unique') {
        return `You are ${wrap} ${item} ${wrap}`;
    }}
    wrapAdjective('*')('a hard worker');
    wrapAdjective('||')('a dedicated programmer');
   // wrapAdjective('*')('a hard worker');
    //wrapAdjective('||')('a dedicated programmer')

//    function wrapAdjective(flair) {
//     return function(adjective = 'unique') {
//         if(flair = '*') {
//             adjective = 'a hard worker';
//         }
//         else if(flair = '||') {
//             adjective = 'a dedicated programmer';
//         }
//         return `You are ${flair[0]}${adjective}${flair[flair.length - 1]}`;
//     }
    
//    }


