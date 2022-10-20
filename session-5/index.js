function getgrade(total){
    switch (true) {
        case total > 90:
            console.log('A+');
            break;
            case total >= 80:
                console.log('A');
                break;
            case total >= 70:
                console.log('B');
            case total >= 60:
                console.log('C');
            case total >=50:
                console.log('D');
            case total >= 40:
                console.log('E');
            case total >= 30:
                console.log('F');
                default:
                    console.log('You have failed!');
                    break;
    
    }
}
getgrade(70);



// function getGrade(total){
//     if (total > 90) {
//         console.log('A+')
//     } 
//     else if (total >= 80 && total <= 90){
//         console.log('A')
//     } 
//     else if (total >= 70 && total <= 80){
//         console.log('B')
//     }
//      else if (total >= 60 && total <= 70){
//         console.log('C')
//     }
//     else if (total >= 50 && total <= 60){
//         console.log('D')
//     }
//     else if (total >= 40 && total <= 50){
//         console.log('E')
//     } 
//     else if (total >= 30 && total <= 40){
//         console.log('F')
//     }
//      else{
//         console.log('Fail!')
//     }
// }
// console.log(getGrade(29))
//