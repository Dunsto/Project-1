
const problemArray = [];

function buildProblemArray() {

    let charInput;

    while (charInput !== '=') {
        if (typeof charInput === 'number') {
            problemArray.push(charInput);
        } else {
            switch (charInput) {
                case '*':
                 
        }
            }
            problemArray.push(charInput);
            charInput = prompt('Next char in problem?');
        }
    }

    function sortProblemArray() {

    }