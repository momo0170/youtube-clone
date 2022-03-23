/* .title_more을 moreBtn 변수에 할당*/
const moreBtn = document.querySelector('.InfoAndNext .Info .metadata .titleAndbutton .title_more');
/* .title을 title 변수에 할당*/
const title = document.querySelector('.InfoAndNext .Info .metadata .titleAndbutton .title');

/* moreBtn이 클릭이 되면 */
moreBtn.addEventListener('click', () => {
  /* moreBtn의 클래스가 클릭이 됐는지 안됐는지 토글 */
  moreBtn.classList.toggle('clicked');

  /* title의 클래스가 클램프 하라는지 안하라는지 토글
      사용자가 moreBtn을 클릭하면 clamp를 빼줄 것이다. */
  title.classList.toggle('clamp');
});

const thumbsUp = document.querySelector('.InfoAndNext .icons button');

thumbsUp.addEventListener('click', () => {
  thumbsUp.style.color = '#03a9f4';
});


const letter = document.querySelector('.Message .list');
const letter_Btn = document.querySelector('.Message .metadata .upAnddown');


letter_Btn.addEventListener('click', () => {
  letter_Btn.classList.toggle('clicked'); // clicked가 없으면 추가, 있으면 삭제
  letter.classList.toggle('clamp'); // clamp가 없으면 추가, 있으면 삭제
});

  

