'use strict';

console.log('hi?!');

const id = document.getElementById('id');
const name = document.getElementById('name');
const pw = document.getElementById('pw');
const confirmPw = document.getElementById('confirm-pw');
const btn = document.getElementById('button');

btn.addEventListener('click', registration);



function registration() {
  
  if(!id.value) return alert('이매일 계정을 입력해주세요');
  if(!name.value) return alert('이름을 입력해주세요');
  if(!pw.value) return alert('비밀번호를 입력해주세요');
  if(!confirmPw.value) return alert('비밀번호를 확인해주세요');
  if(pw.value !== confirmPw.value) return alert('동일한 비밀번호를 입력해주세요');

  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };
  
  // console.log(req);
  // console.log(JSON.stringify(req));

  fetch('/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console;
        location.href = '/auth/login';
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error('회원가입 중 에러 발생'));
    });
}
