// this is from https://edabit.com/challenge/TYcMysG6yy4RKEQPP

function invert(s) {
	let text_mirror="";
    let n=s.length;
    let i=n-1;
    while (i>=0) {
        let the_char=s.charAt(i);
        if (the_char==the_char.toLowerCase()) {
            the_char=the_char.toUpperCase();
        } else {
            the_char=the_char.toLowerCase();
        }
        text_mirror+=the_char;
        i-=1;
    }
    return text_mirror;
}


function invert_2(s) {
    function invert_case(the_char){
        if (the_char==the_char.toLowerCase()) {
            return the_char.toUpperCase();
        } else {
            return the_char.toLowerCase();
        };
    }
    let i=s.length-1;
    let text_mirror=[];
    while (i+1>=s.length/2) {
        let char_mirror=s.charAt((s.length-1)-i)
        text_mirror[(s.length-1)-i]=invert_case(s.charAt(i))
        text_mirror[i]=invert_case(char_mirror)
        i-=1;
    }
    return text_mirror.join('');
}

test_in="ytInIUgAsnOc";

console.time("answer time 1");
console.log(`${invert(test_in)}`);
console.timeEnd("answer time 1");
console.time("answer time 2");
console.log(`${invert_2(test_in)}`);
console.timeEnd("answer time 2");

test_in="step on NO PETS";
console.time("answer time 3");
console.log(`${invert(test_in)}`);
console.timeEnd("answer time 3");
console.time("answer time 4");
console.log(`${invert_2(test_in)}`);
console.timeEnd("answer time 4");

test_in="XeLPMoC YTiReTXeD";
console.time("answer time 5");
console.log(`${invert(test_in)}`);
console.timeEnd("answer time 5");
console.time("answer time 6");
console.log(`${invert_2(test_in)}`);
console.timeEnd("answer time 6");

