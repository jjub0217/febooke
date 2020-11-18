 let arr = [];



  //글쓰기 버튼
  const $writeBtn = document.querySelector('.write-btn');
  const $boardList = document.querySelector('.board-list');

 // login check
  const $loginCheck = document.querySelector('.login-check');
  const $btnGroup = document.querySelector('.btn-group');
  const $selectOption = document.querySelector('.select-option');




  $writeBtn.onclick = () => {
    if(!sessionStorage.getItem('login')){
      console.log('login이 필요합니다.')
      $loginCheck.classList.add('on');
      $btnGroup.onclick = e => {
        if (e.target.matches('.btn-yes')) location.assign('../signin.html');
        else if(e.target.matches('.btn-no')) $loginCheck.classList.remove('on');
      }
    } else {
      window.location.href = './write.html'
    }
    
  }

  window.onload = async e => {
    const res = await fetch('/board');
    arr = await res.json();
    console.log(arr); // <- 배열안에 객체

    render(arr);

  }


$selectOption.onchange = async (e) => {
  console.log(e.target.value)
  // if(최근 날짜순을 클릭했다면)
  if(e.target.value === 'least-date'){
          const res2 = await fetch('/board?_sort=id,views&_order=desc,asc');
          const least = await res2.json();
          console.log(least); // <- board db json (배열안에 객체)
          render(least);
        }
        // // if(과거 날짜순을 클릭했다면)
        else if(e.target.value === 'last-date') {
          const res3 = await fetch('/board');
          const last = await res3.json();
          console.log(last); // <- board db json (배열안에 객체)
          render(last);
  }



}

  // let copy = [...todo];
    
  // // targetId = 최근날짜 순이란 option least-date    
  // const targetId = [...$selectOption.querySelectorAll('option')].map(item => item.id);
  // console.log(targetId);
  








  const render = async (todo) => {

    

    



    let html = '';

    [...todo].forEach(list => {
      html += `<li id = "${list.id}">
      <a href="#">${list.title}</a>
      <span class="author">${list.nickname}</span>
      <time class="time">
        ${list.time}
          <span class="year"></span>
          <span class="month"></span>
          <span class="date"></span>
      </time>
      <span class="click">${list.clickcount}</span>
  </li>`}
      )
      $boardList.innerHTML = html;
  }

  // 카운터
  const counter = (function () {

    let num = 0;
  
    return {
      increase() {
        return ++num;
      }
    };
  }());



$boardList.onclick = async e => {
  
  fetch('')

  console.log(counter.increase());


}