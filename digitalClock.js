function addSegments(digitId){
    let digit = document.getElementById(digitId);
    for(let i = 0; i < 7; i++){
        let newSegment = document.createElement("div");
        newSegment.setAttribute("class", `segment segment${i} off`);
        digit.appendChild(newSegment);
    }
}

function updateDigit(digitId, value){
    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];
    let digitSegments = document.getElementById(digitId).childNodes;
    let state = segmentStates[value];
    digitSegments.forEach((segment, segmentId) => {
        if(state[segmentId]){
        segment.classList.toggle("off");
        }
    });
}




function init(){
    document.querySelectorAll("div div").forEach((div, index)=>{
        if(index != 2){
            addSegments(div.id);
        }
    });
}


function main(){

    init();
    updateDigit("hours-tens", 2);
}


main();
