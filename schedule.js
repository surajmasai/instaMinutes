

var scheduler = [
    {
        "text": "textone",
        "dataTime": "2022-03-18 22: 26:00.000"
    },
    {
        "text": "texttwo",
        "dataTime": "2022-03-18 22: 27:00.000"
    },
    {
        "text": "textthird",
        "dataTime": "2022-03-18 14: 05:00.000"
    },
    {
        "text": "textFive",
        "dataTime": "2022-03-20 11: 18:00.000"
    },
    {
        "text": "textSix",
        "dataTime": "2022-03-19 12: 18:00.000"
    },
    {
        "text": "textSeven",
        "dataTime": "2022-03-22 13: 18:00.000"
    },
    {
        "text": "textEight",
        "dataTime": "2022-03-21 14: 18:00.000"
    },
    {
        "text": "textNine",
        "dataTime": "2022-03-19 15: 18:00.000"
    },
    {
        "text": "textTen",
        "dataTime": "2022-03-19 16: 18:00.000"
    },
    {
        "text": "textElevenqww",
        "dataTime": "2022-03-18 17: 08:00.000"
    },
];

function x(text) {
    let flag = -1
    for (let i = 0; i < scheduler.length; i++) {

        if (scheduler[i].text == text) {
            flag = 1
            let date1 = new Date(scheduler[i].dataTime)
            let date2 = new Date()
            if (date1 < date2)
                return -2
            return Math.abs(date1 - date2)
        }
    }
    if (flag == -1)
        return flag


}

// console.log(x("textone"));

function y(text) {
    let timer = x(text) // passing the data in x function for checking and he get some value;
    if (timer == -1) console.log('Invalid Text \n');
    else if (timer == -2) console.log('Invalid date \n');
    else {
        setTimeout(() => {
            let len = text.length
            setTimeout(() => {
                let result = text.toLowerCase().split("").reverse().join("")
                console.log(`actual text ${text} and the output is ${result} \n`);
            }, len * 1000)
        }, timer)
    }

}
// y("textElevenqww")


//input part
const readline = require('readline')
    .createInterface({ input: process.stdin, output: process.stdout });

function rec() {
    readline.question('enter a text  -- \n', name => {
        y(name)  //take input as text and passing the data in y function
        rec()
    });
}

rec()






