  let searshBtn = document.querySelector('#search-btn');    
  let searsBTR = document.querySelector('.search-d');
  let formBtn = document.querySelector('#login-btn');    
  let loginform = document.querySelector('.login');
  let formclose = document.querySelector('#form-close');
  let menu = document.querySelector('#menu-bar');
  let navbart = document.querySelector('.navbar');
  let videobtn = document.querySelectorAll('.vid-btn');

  let isdown = false ;


  window.onabor= () =>{
  searshBtn.classList.remove('fa-times');
  searsBTR.classList.remove('active');
  menu.classList.remove('fa-times');
  navbart.classList.remove('active');
  loginform.classList.remove('active');



  }
  searshBtn.addEventListener('click' , () =>{
  searshBtn.classList.toggle('fa-times');
  searsBTR.classList.toggle('active');
});


  formBtn.addEventListener('click' , () =>{
    if(!isdown)
    {
        loginform.classList.add('active');
        isdown=true
    }
    else{
        loginform.classList.remove('active');
        isdown = false
    }
  });

    menu.addEventListener('click' , () =>{
    menu.classList.toggle('fa-times');
    navbart.classList.toggle ('active');
    });

    videobtn.forEach(btn =>{
      btn.addEventListener('click' , ()=>{
        document.querySelector('.controles .active').classList.remove('active');
        btn.classList.add('active');
        let src =btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;

      })

      
    })
  




































  

formBtn.addEventListener('click' , () =>{
    loginform.classList.toggle('fa-times');
    loginform.classList.toggle('active');
  });



  


