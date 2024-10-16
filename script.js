let answer = !false // NOT
answer = true && false; // AND
answer = true && true;
answer = false || true; // or
answer = true && false || true && !false && !(true || false);
answer = true ^ true; //XOR

answer = 1 == 2;
answer = '01' == 1; // checks values
answer = '1' === 1; // checks types then values
answer = '' == 0;
answer = 'false' == false;
answer = 1 != 2; // not equals
answer = '2' !== 2;
answer = 2 < 10;
answer = 2 > 10;
answer = 10 > 10;
answer = 10 < 10;
answer = 10 <= 10;
answer = 10 >= 10;
console.log(answer);