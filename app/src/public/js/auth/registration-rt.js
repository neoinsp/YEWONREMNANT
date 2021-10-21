'use strict';

console.log('hi?!');

// 정보 가져오기
// 회원 일반
const name = document.getElementById('name');
const email = document.getElementById('email');
const pw = document.getElementById('pw');
const confirmPw = document.getElementById('confirm-pw');
const tel = document.getElementById('tel');
const chNum = document.getElementById('ch-num');

const gender = document.getElementById('gender');
const department = document.getElementById('department');
const chOffice = document.getElementById('ch-office');
const school = document.getElementById('school');
const grade = document.getElementById('grade');
const internship = document.getElementById('internship');

const address = document.getElementById('address');
const addressDetail = document.getElementById('address_detail');

const tr1 = document.getElementById('address_detail');
const tr2 = document.getElementById('address_detail');
const tr3 = document.getElementById('address_detail');
const tr4 = document.getElementById('address_detail');
const tr5 = document.getElementById('address_detail');

//가족정보
// 가족 1
const f1Rel = document.getElementById('f1-rel');
const f1Rel = document.getElementById('f1-rel');
const f1birDate = document.getElementById('f1-bir-date');
const f1Rel = document.getElementById('f1-ch-office');
const f1Rel = document.getElementById('f1-job');
const f1Rel = document.getElementById('f1-tel');
// 가족 2
const f2Rel = document.getElementById('f2-rel');
const f2Rel = document.getElementById('f2-rel');
const f2birDate = document.getElementById('f2-bir-date');
const f2Rel = document.getElementById('f2-ch-office');
const f2Rel = document.getElementById('f2-job');
const f2Rel = document.getElementById('f2-tel');
// 가족 3
const f3Rel = document.getElementById('f3-rel');
const f3Rel = document.getElementById('f3-rel');
const f3birDate = document.getElementById('f3-bir-date');
const f3Rel = document.getElementById('f3-ch-office');
const f3Rel = document.getElementById('f3-job');
const f3Rel = document.getElementById('f3-tel');
// 가족 4
const f4Rel = document.getElementById('f4-rel');
const f4Rel = document.getElementById('f4-rel');
const f4birDate = document.getElementById('f4-bir-date');
const f4Rel = document.getElementById('f4-ch-office');
const f4Rel = document.getElementById('f4-job');
const f4Rel = document.getElementById('f4-tel');
// 가족 5
const f5Rel = document.getElementById('f5-rel');
const f5Rel = document.getElementById('f5-rel');
const f5birDate = document.getElementById('f5-bir-date');
const f5Rel = document.getElementById('f5-ch-office');
const f5Rel = document.getElementById('f5-job');
const f5Rel = document.getElementById('f5-tel');
// 가족 6
const f6Rel = document.getElementById('f6-rel');
const f6Rel = document.getElementById('f6-rel');
const f6birDate = document.getElementById('f6-bir-date');
const f6Rel = document.getElementById('f6-ch-office');
const f6Rel = document.getElementById('f6-job');
const f6Rel = document.getElementById('f6-tel');


const btn = document.getElementById('button');

btn.addEventListener('click', registration);

function registration() {

  if (!name.value) return alert('이름을 입력해주세요');
  if (!email.value) return alert('Email을 입력해주세요');
  if (!pw.value) return alert('비밀번호를 입력해주세요');
  if (!confirmPw.value) return alert('비밀번호를 확인해주세요');
  if (!tel.value) return alert('전화번호를 입력해주세요');
  if (!chNum.value) return alert('교인번호를 입력해주세요');

  if (!gender.value) return alert('성별을 입력해주세요');
  if (!department.value) return alert('소속기관을 입력해주세요');
  if (!chOffice.value) return alert('직분을 입력해주세요');
  if (!school.value) return alert('학교명을 입력해주세요');
  if (!grade.value) return alert('학년을 입력해주세요');
  if (!internship.value) return alert('인턴쉽 분야를 선택해주세요');

  if (!address.value) return alert('주소를 입력해주세요');
  if (!addressDetail.value) return alert('세부주소를 입력해주세요');

  {
    // 회원 일반
    console.log(name)
    console.log(email)
    console.log(pw)
    console.log(confirmPw)
    console.log(tel)
    console.log(chNum)

    console.log(gender)
    console.log(department)
    console.log(chOffice)
    console.log(school)
    console.log(grade)
    console.log(internship)

    console.log(address)
    console.log(addressDetail)

    console.log(tr1)
    console.log(tr2)
    console.log(tr3)
    console.log(tr4)
    console.log(tr5)

    //가족정보
    // 가족 1
    console.log(f1Rel);
    console.log(f1Rel);
    console.log(f1birDate);
    console.log(f1Rel);
    console.log(f1Rel);
    console.log(f1Rel);
    // 가족 2
    console.log(f2Rel);
    console.log(f2Rel);
    console.log(f2birDate);
    console.log(f2Rel);
    console.log(f2Rel);
    console.log(f2Rel);
    // 가족 3
    console.log(f3Rel);
    console.log(f3Rel);
    console.log(f3birDate);
    console.log(f3Rel);
    console.log(f3Rel);
    console.log(f3Rel);
    // 가족 4
    console.log(f4Rel);
    console.log(f4Rel);
    console.log(f4birDate);
    console.log(f4Rel);
    console.log(f4Rel);
    console.log(f4Rel);
    // 가족 5
    console.log(f5Rel);
    console.log(f5Rel);
    console.log(f5birDate);
    console.log(f5Rel);
    console.log(f5Rel);
    console.log(f5Rel);
    // 가족 6
    console.log(f6Rel);
    console.log(f6Rel);
    console.log(f6birDate);
    console.log(f6Rel);
    console.log(f6Rel);
    console.log(f6Rel);
  }



  // const req = {
  //   id: id.value,
  //   name: name.value,
  //   pw: pw.value,
  // };

  // // console.log(req);
  // // console.log(JSON.stringify(req));

  // fetch('/auth/registration', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(req),
  // })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     if (res.success) {
  //       console;
  //       location.href = '/auth/login';
  //     } else {
  //       alert(res.msg);
  //     }
  //   })
  //   .catch((err) => {
  //     console.error(new Error('회원가입 중 에러 발생'));
  //   });
}
