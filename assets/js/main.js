let _dropProf = document.getElementsByClassName('dropProf')[0]
let _ul = document.querySelectorAll('.leftMenuSide > ul >li')
let _rightSide = document.getElementsByClassName('rightSide')[0]
// let _rightTable = document.getElementsByTagName('table')[0]
let _logoLogin = document.getElementsByClassName('logoLogin')[0]
var _rightTable = document.getElementsByTagName('table')[0]

// console.log(_logoLogin);

// Drop Down Mwnu Profile
let m = 1;
_dropProf.addEventListener('click', () => {
  let _sec = document.createElement('section')
  _sec.className = "row d-flex dropMenu position-absolute bg-white justify-content-center"
  _sec.innerHTML = `
    <div class="profile1 d-flex">
                  <img
                    src="./assets/CSS/img/mePic.png"
                    class="h-75 w-25 object-fit-cover rounded mt-3"
                    alt=""
                  />
                  <div class="right ps-4 ">
                    <p class=" mt-5 fw-bold mb-1">Maryzah Hoseini</p>
                  <span class="">marzyhoseini74@gmail.com</span>
                  </div>
                </div>
                <ul class="menu list-unstyled pt-4 fw-bold">
                  <li class="ps-5 pt-3 pb-3"><i class="bi bi-person-fill pe-3 "></i>Account</li>
                  <li class="ps-5 pt-3 pb-3"><i class="bi bi-gear-fill pe-3 "></i>Setting</li>
                  <li class="ps-5 pt-3 pb-3"><i class="bi bi-currency-dollar pe-3"></i>Billing</li>
                  <li class="ps-5 pt-3 pb-3"><i class="bi bi-power pe-3 "></i>Logout</li>
                </ul>
    `
  if (m % 2) {
    _dropProf.appendChild(_sec)
  } else {
    document.getElementsByClassName('dropMenu')[0].remove()
  }
  m++
})


// Page Dashboard
_ul[6].addEventListener('click', () => {
  console.log(_ul[6]);

  let _ul1 = document.createElement('ul')
  _ul1.className = 'list-unstyled subMenuPage ps-5'
  _ul1.innerHTML = `
  <li class="mt-4">Login</li>
  <li class="mt-4">Register</li>
  <li class="mt-4">Forget Password</li>
  `
  if (m % 2) {
    console.log(_ul[6]);


    _ul[6].appendChild(_ul1)
    let _newLi = document.querySelectorAll('.subMenuPage > li')
    _newLi[0].addEventListener('click', () => {
      location.assign('/assets/Login/index-login.html')

    })
    _newLi[1].addEventListener('click', () => {
      location.assign('/assets/Login/index-register.html')
    })
    _newLi[2].addEventListener('click', () => {
      location.assign('/assets/Login/index-forgottPass.html')
    })

  } else {
    document.getElementsByClassName('subMenuPage')[0].remove()
  }
  m++


  // let _newLiLogin = document.querySelectorAll('.subMenuPage > li')
  console.log(_newLi[0]);
})


// console.log(_rightSide);
//  function newTable() {


// }




//  Create Table in Right Side
fetch('https://64bebda85ee688b6250cdf59.mockapi.io/api/v1/users', {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
}).then(res => {
  if (res.ok) {
    // console.log(res.json());
    return res.json();
  }
  // handle error
}).then(tasks => {
  tasks.map(val => {
    let _newTab = document.createElement('tbody')
    _newTab.innerHTML = `
                <tbody>
                  <tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.username}</td>
                    <td>${val.email}</td>
                    <td>${val.pass}</td>
                  </tr>
                </tbody>
                  `
    _rightTable.appendChild(_newTab)

  })
  // Do something with the list of tasks

}).catch(error => {
  // handle error
})
