let el=document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();

function calculateAge() {
    let birthDate = new Date(el.value);

    let age;

    if (today.getMonth() > birthDate.getMonth() || 
    (today.getMonth() == birthDate.getMonth() && 
    today.getDate() >= birthDate.getDate())) {//today 달이 더 미래인 경우
        age = today.getFullYear() - birthDate.getFullYear();  // 오늘 년도 - 생일 년도
    }
    else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`;

    return age;
}

elSubmit.addEventListener('click', calculateAge);

