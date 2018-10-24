/*
 * Implement all your JavaScript in this file!
 */
var num;
var num1, ans, op;
$('button').click(function() {
    if (Number($(this).html()) || (Number($(this).html())) == 0) {
        if (ans) {
            ans = undefined;
            num1 = undefined;
            num = undefined;
            op = undefined;
        }
        if (!num)
            num = 0;
        num = num * 10 + Number($(this).html());
        $('#display').val(num);
    } else {
        // if ($(this).attr("id") == 'addButton') 
        if ($(this).attr("id") == 'equalsButton') {
            if (op && (num || num == 0)) {
                ans = compute(num1, num, op);
                $('#display').val(ans);
                num1 = ans;
            }

            //num = 0;
        } else if ($(this).attr("id") == 'clearButton') {

            ans = undefined;
            num1 = undefined;
            num = undefined;
            op = undefined;
            $('#display').val('');
        } else {
            console.log('operator');
            if (!num1 && (num || num == 0) && num1 != 0) {
                num1 = num;
                num = undefined;
                op = $(this).html();
            } else if (ans || ans == 0) {
                num = undefined;
                ans = undefined;
                op = $(this).html();
            } else {
                if (num1 && num) {
                    num1 = compute(num1, num, op);
                    num = undefined;
                    $('#display').val(num1);
                }
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