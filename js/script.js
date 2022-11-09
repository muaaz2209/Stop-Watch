let hrs = 0
let mins = 0
let secs = 0

let intervals = 0
let numIntervals = []

function watch(state){
    if(state == "start"){
        intervals++
        numIntervals.push(intervals)
        setInterval(()=>{
            secs++
            if(secs == 60){
                secs = 0
                mins++
            }
            if(mins == 60){
                mins = 0
                hrs++
            }

            document.getElementById("hrs").innerHTML = hrs
            document.getElementById("mins").innerHTML = mins
            document.getElementById("secs").innerHTML = secs
        },1000)
    }else{
        for(x in numIntervals){
            clearInterval(x)
        }
    }
}

// function watch(state){
//     if(state == "start"){
//         intervals++
//         numIntervals.push(intervals)
//         setInterval(()=>{
//             sec++
//             if(sec == 60){
//                 sec = 0
//                 min++
//             }
//             if(min == 60){
//                 min = 0
//                 hrs++
//             }

//             document.getElementById("hrs").innerHTML = hrs
//             document.getElementById("mins").innerHTML = min
//             document.getElementById("secs").innerHTML = sec

//         },1000)
//     }else{
//         for(i of numIntervals){
//             clearInterval(i)
//         }
//     }
// }