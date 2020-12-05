console.log('connection check installed')
setInterval(() => {
  
    if(navigator.connection.type === 'none') {
      if($('.the-error-msg').hasClass('conn-error-ignored')) {
        //alert('still ignored');
      } else {
        $('.no-internet')[0].click();
      }
      $( ".sheet-close" ).html('Ignore');
        $('.page-current').addClass('conn-was-lost');
        $('.the-error-msg').html('You seem to be Offline :(').addClass('text-color-pink');
          setTimeout(function(){ 

            $('.page-current').addClass('conn-was-lost');
            //$('.sheet-close')[0].click();
    
          }, 3000);

          $( ".sheet-close" ).on('click',function()  {
            $('.the-error-msg').addClass('conn-error-ignored');
          });

    }
    if ( navigator.connection.type != 'none' && $('.page-current').hasClass('conn-was-lost')) {
      $( ".sheet-close" ).html('');
      $('.page-current').removeClass('conn-was-lost');
      $('.the-error-msg').removeClass('text-color-pink').addClass('text-color-green');
      $('.no-internet')[0].click();
      setTimeout(function(){ 

        $('.page-current').removeClass('conn-was-lost');
        $('.sheet-close')[0].click();
        $('.the-error-msg').removeClass('conn-error-ignored');
      }, 3000);

      $('.the-error-msg').html('Back Online :)');    
    }
        
  }, 5000);
