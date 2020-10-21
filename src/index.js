module.exports = function toReadable (number) {

    const numberArr = number.toString().split('');
    let readebleNumber = '';
    let isTeen = false;

    if ( numberArr.length === 1 && +numberArr[0] === 0 ) {
        return 'zero';
    }

    for ( let i = 0; i < numberArr.length; i++ ) {

        let readebleNumeral = '';

        if ( (numberArr.length - i)%3 === 0 || (numberArr.length - i)%3 === 1 ) {

            if (isTeen) {

                switch (+numberArr[i]) {
                    case 0:
                        readebleNumeral = 'ten ';
                        break;
                    case 1:
                        readebleNumeral = 'eleven ';
                        break;
                    case 2:
                        readebleNumeral = 'twelve ';
                        break;
                    case 3:
                        readebleNumeral = 'thirteen ';
                        break;
                    case 4:
                        readebleNumeral = 'fourteen ';
                        break;
                    case 5:
                        readebleNumeral = 'fifteen ';
                        break;
                    case 6:
                        readebleNumeral = 'sixteen ';
                        break;
                    case 7:
                        readebleNumeral = 'seventeen ';
                        break;
                    case 8:
                        readebleNumeral = 'eighteen ';
                        break;
                    case 9:
                        readebleNumeral = 'nineteen ';
                        break;
                    default:
                        readebleNumeral = '';
                }

                isTeen = false;

            } else {

                switch (+numberArr[i]) {
                    case 1:
                        readebleNumeral = 'one ';
                        break;
                    case 2:
                        readebleNumeral = 'two ';
                        break;
                    case 3:
                        readebleNumeral = 'three ';
                        break;
                    case 4:
                        readebleNumeral = 'four ';
                        break;
                    case 5:
                        readebleNumeral = 'five ';
                        break;
                    case 6:
                        readebleNumeral = 'six ';
                        break;
                    case 7:
                        readebleNumeral = 'seven ';
                        break;
                    case 8:
                        readebleNumeral = 'eight ';
                        break;
                    case 9:
                        readebleNumeral = 'nine ';
                        break;
                    default:
                        readebleNumeral = '';
                }

                if (numberArr.length - i === 3) {
                    readebleNumeral = readebleNumeral + 'hundred ';
                } else if (numberArr.length - i === 6) {
                    readebleNumeral = readebleNumeral + 'thousand ';
                } else if (numberArr.length - i === 9) {
                    readebleNumeral = readebleNumeral + 'million ';
                }

            }

        } else {

            if (+numberArr[i] === 1) {

                isTeen = true;

            } else {

                switch (+numberArr[i]) {
                    case 2:
                        readebleNumeral = 'twenty ';
                        break;
                    case 3:
                        readebleNumeral = 'thirty ';
                        break;
                    case 4:
                        readebleNumeral = 'forty ';
                        break;
                    case 5:
                        readebleNumeral = 'fifty ';
                        break;
                    case 6:
                        readebleNumeral = 'sixty ';
                        break;
                    case 7:
                        readebleNumeral = 'seventy ';
                        break;
                    case 8:
                        readebleNumeral = 'eighty ';
                        break;
                    case 9:
                        readebleNumeral = 'ninety ';
                        break;
                    default:
                        readebleNumeral = '';
                }

            }

        }

        readebleNumber = readebleNumber + readebleNumeral;

    }

    return readebleNumber.slice(0, -1);

};
