let perons = [];
let database = firebase.database();

const $singupFieldset = document.querySelector('.singup-fieldset');
const $singupName = document.querySelector('.singup-name');
const $singupNink = document.querySelector('.singup-nink');
const $signupBtn = document.querySelector('.signup-btn');
const $singupId = document.querySelector('.singup-id');
const $input = document.querySelector('input');
console.log($signupBtn)

$signupBtn.onclick = e => {
  e.preventDefault();
  if ($input.value === '') console.log('비었습니다.');

  writeUserData($singupId.value  ,{name: $singupName.value, ninkname: $singupNink.value, id: $singupId.value })
}




// // storage

// let defaultStorage = firebase.storage();
// let storageRef = firebase.storage().ref().child('/images/');



// var file = '../image/ok.png'
// storageRef.put(file).then(function(snapshot){
//   console.log(snapshot)
  
// })

