console.log('app quit control installed')
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  //now the app is ready to work



var appState;

function quit() {
  appState = setInterval(function(){
      if (  $('.page-current').hasClass('home') && $('.home').hasClass('app-exit-true') && $( ".tab-link-home" ).hasClass('tab-link-active')) {

      navigator.app.exitApp();
      $('.title').text('Closing!');
      }
    });
     
}

function stay() {
  clearInterval(appState);
}


document.addEventListener('backbutton', function (evt) {

  if (jQuery(".modal-in").css('display') == 'block'){
    // if there are any modals open... stop the app quiting 
      $('.home').removeClass('app-exit-true');
  }
  
  if (  $( ".tab-link-home" ).hasClass('tab-link-active'))
    {
      $('.home').addClass('app-exit-true');
      /*function exit_true() {
        setTimeout(function(){ alert("Hello"); }, 3000);
      }*/
    }

  if (  $('.page-current').hasClass('home') && $('.home').hasClass('app-exit-true') /*&& $( ".tab-link-home" ).hasClass('tab-link-active')*/) {

    navigator.app.exitApp();
    
    }

});
     //will check the permission to quit the app every five seconds on Backbutton event

         // Now safe to use device APIs
     function changeTitle() {
      setInterval(function(){ 

        if (  $( ".tab-link-home" ).hasClass('tab-link-active'))
        {
          $('.title').text('');
        }
        if (  $( ".tab-link-hubs" ).hasClass('tab-link-active'))
        {
          $('.title').text('Hubs');
        }
        if (  $( ".tab-link-add" ).hasClass('tab-link-active'))
        {
          $('.title').text('Add post');
        }
        if (  $( ".tab-link-chats" ).hasClass('tab-link-active'))
        {
          $('.title').text('Chats');
        }
        if (  $( ".tab-link-profile" ).hasClass('tab-link-active'))
        {
          $('.title').text('Profile');
        }
        
       }, 500);
    }
    changeTitle();
    
            

$(function(){

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#blah').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }
  
  $("#imgInp").on('change', function() {
    readURL(this);
  });

 

  $( ".likeIt" ).on('click',function()  {

    $(this).children('.f7-icons').toggleClass('w3-text-pink');

  });

  $( ".openSearch" ).on('click',function()  { //this opens as a popup/modal
    stay();
    $('.home').removeClass('app-exit-true');
    $('.tab-link-hubs')[0].click();//this stops the app from quiting accidentally
  });

  /* clearTimeout(quitApp,5000); 
    clearTimeout(canQuit,5000); */

  $( ".tab-link-home" ).on('click',function(){

    $('.home').addClass('app-exit-true');
    $('.title').text('');

  });

 
  $( ".tab-link-hubs" ).on('click',function(){
    $('.home').removeClass('app-exit-true');
    $('.title').text('Hubs');
    if (  $('.page-current').hasClass('home') && $('.home').hasClass('app-exit-true')) {
    } stay();

    if (jQuery(".modal-in").css('display') == 'block'){
      // if there are any modals open... disable app quiting if any is found 
      document.addEventListener('backbutton', function (evt) {
        $('.tab-link-home')[0].click();
        $('.home').removeClass('app-exit-true');
      }, false);

    } else {
      document.addEventListener('backbutton', function (evt) {
        $('.tab-link-home')[0].click();
        $('.home').removeClass('app-exit-true');
      }, false);
      $('.home').removeClass('app-exit-true');
      stay();
    }

  });

  $( ".tab-link-add" ).on('click',function(){
    $('.home').removeClass('app-exit-true');
    $('.title').text('Add post');
    if (  $('.page-current').hasClass('home') && $('.home').hasClass('app-exit-true')) {
    } stay();
    document.addEventListener('backbutton', function (evt) {
      $('.tab-link-home')[0].click();
      $('.home').removeClass('app-exit-true');
    }, false);
    
  });

  $( ".tab-link-chats" ).on('click',function(){
    $('.home').removeClass('app-exit-true');
    $('.title').text('Chats');
    if (  $('.page-current').hasClass('home') && $('.home').hasClass('app-exit-true')) {
    } stay();
    document.addEventListener('backbutton', function (evt) {
      $('.tab-link-home')[0].click();
      $('.home').removeClass('app-exit-true');
    }, false);
    
  });

  $( ".tab-link-profile" ).on('click',function(){
    $('.home').removeClass('app-exit-true');
    $('.title').text('Profile');
    if (  $('.page-current').hasClass('home') && $('.home').hasClass('app-exit-true')) {
    } stay();
    document.addEventListener('backbutton', function (evt) {
      $('.tab-link-home')[0].click();
      $('.home').removeClass('app-exit-true');
    }, false);
    
  });

});

} 
