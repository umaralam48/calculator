/*
 * Implement all your JavaScript in this file!
 */
var num = 0;
var num1, ans, op;
$('button').click(function() {
    if (Number($(this).html()) || (Number($(this).html())) == 0) {
        if (ans) {
            ans = undefined;
            num1 = undefined;
            num = 0;
            op = undefined;
        }
        num = num * 10 + Number($(this).html());
        $('#display').val(num);
        if (num == 1503)
            $('#display').val('Umar is funny! Haha. :) ');

    } else {
        // if ($(this).attr("id") == 'addButton') 
        if ($(this).attr("id") == 'equalsButton') {

            ans = compute(num1, num, op);
            $('#display').val(ans);
            num1 = ans;

            //num = 0;
        } else if ($(this).attr("id") == 'clearButton') {

            ans = undefined;
            num1 = undefined;
            num = 0;
            op = undefined;
            $('#display').val('');
        } else {
            console.log('operator');
            if (!num1 && num) {
                num1 = num;
                num = 0;
                op = $(this).html();
            } else if (ans) {
                num = 0;
                ans = undefined;
                op = $(this).html();
            } else {
                num1 = compute(num1, num, op);
                num = 0;
                $('#display').val(num1);
                op = $(this).html();
            }
        }
    }
});

function compute(op1, op2, op) {
    if (op == '+')
        return op1 + op2;
    else if (op == '-')
        return op1 - op2;
    else if (op == '*')
        return op1 * op2;
    else
        return op1 / op2;

}