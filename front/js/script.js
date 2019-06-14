//  LOADER

if(gs.is_loader == 1)
{
  $(window).on("load", function (e) {
    setTimeout(function(){
        $('#cover').fadeOut(1000);
      },1000)
  });    
}

//LOADER ENDS


//*****************************AUTO SEARCH STARTS******************************  

     $(".ss").keyup(function() {
        var search = $(this).val();
        if(search == ""){
            $(".header-searched-item-list-wrap").hide();
        }
        else {
            $.ajax({

                    type: "GET",
                    url: mainurl+'/json/suggest',
                    data:{search:search},
                    success:function(data){

                          if(!$.isEmptyObject(data[1]))
                          {
                          $(".header-searched-item-list-wrap").show();
                          $(".header-searched-item-list-wrap ul").html("");
                          var arr = $.map(data[1], function(el) {
                          return el });
                          for(var k in arr)
                          {
                              var x = arr[k]['name'];
                              var p = x.length  > 20 ? x.substring(0,20)+'...' : x;
                              $(".header-searched-item-list-wrap ul").append('<li><a href="'+mainurl+'/'+arr[k]['id']+'/'+arr[k]['name']+'">'+p+'</a></li>');
                          }
                          }
                       
                          else if(!$.isEmptyObject(data[2]))
                          {
                          $(".header-searched-item-list-wrap").show();
                          $(".header-searched-item-list-wrap ul").html("");
                          var arr = $.map(data[2], function(el) {
                          return el });
                          for(var k in arr)
                          {
                              var x = arr[k]['cat_name'];
                              var p = x.length  > 20 ? x.substring(0,20)+'...' : x;
                              $(".header-searched-item-list-wrap ul").append('<li><a href="'+mainurl+'/category/'+arr[k]['cat_slug']+'">'+p+'</a></li>');
                          }
                          }
                          else{
                            $(".header-searched-item-list-wrap").hide();
                          }  
                        }
                  }) 
        }
     });

//*****************************AUTO SEARCH ENDS******************************  




$('#appoint-form').on('submit', function() {
  var id = $('#doctors').val();
  $('#date_doctor_id').val(id);
  $('#scheduleModal').modal('show');
  return false;
});



      $( function() {
          $( "#v-cal" ).datepicker({
              minDate: +1,
              maxDate: +30,
              dateFormat: 'yy-mm-dd',
              onSelect: function(dateText) {
                  $('#dateLoader').show();
                  $('#availableDates').html('');
                  $('#selectDate').html(dateText);
                  $.ajax({
                      type: "GET",
                      url:mainurl+'/scheduletimes/'+$('#date_doctor_id').val()+'/'+dateText,
                      success:function(data){
                          setTimeout(function () {
                              $('#dateLoader').hide();
                              $('#availableDates').html(data);
                          },1000)
                      }
                  })
              }
          });
      } );

      function onDateClick(dateDiv) {
          $('.single-timing-box').removeClass('active');
          $(dateDiv).addClass('active');
          $('#booklink').attr('href',$(dateDiv).data('url'));
          $('#booklink').css('display','block');
      }



//*****************************  Appointment ******************************  
  $('#cat').on('change', function() {
    var cat = $(this).val();
    if (cat == "") 
    {
      $('#doctors').html('<option value="">Select Doctor</option>');
      $('#doctors').prop('disabled', true);   
      $('#appoint-btn').prop('disabled', true);   
    }
    else
    {
        $.ajax({
            type: "GET",
            url: mainurl+'/json/doctors',
            data:{id:cat},
            success:function(data){
                  $('#doctors').html('<option value="">Select Doctor</option>');
                  if($.isEmptyObject(data))
                  {
                    $('#doctors').prop('disabled', true);
                    $('#appoint-btn').prop('disabled', true);      
                  }
                  else
                  {
                   for(var k in data)
                    {
                      $('#doctors').append('<option value="'+data[k]['id']+'">'+data[k]['name']+'</option>');                      
                    } 
                  $('#doctors').prop('disabled', false); 
                  $('#appoint-btn').prop('disabled', false);                            
                  }
                }                
              });      
    }
});
//*****************************  Appointment Ends ******************************  



// CHAT WITH ADMIN

        $(document).on("submit", "#emailreply" , function(){
          var token = $(this).find('input[name=_token]').val();
          var subject = $(this).find('input[name=subject]').val();
          var message =  $(this).find('textarea[name=message]').val();
          $('#subj1').attr('disabled', true);
          $('#msg1').attr('disabled', true);
          $('#emlsub1').attr('disabled', true);
        $.ajax({
          type: 'post',
          url: mainurl+'/user/admin/user/send/message',
          data: {
              '_token': token,
              'subject'   : subject,
              'message'  : message,
                },
          success: function( data) {
          $('#subj1').prop('disabled', false);
          $('#msg1').attr('disabled', false);
          $('#subj1').val('');
          $('#msg1').val('');
          $('#emlsub1').attr('disabled', false);
          if(data == 0)
          $.notify("Oops Something Goes Wrong !!","error");
          else
          $.notify("Message Sent !!","success");
          $('.ti-close').click();
              }
          });          
            return false;
      });

// CHAT WITH ADMIN ENDS

// CHAT WITH DOCTOR



        $(document).on("submit", "#doctorreply" , function(){
          var token = $(this).find('input[name=_token]').val();
          var subject = $(this).find('input[name=subject]').val();
          var message =  $(this).find('textarea[name=message]').val();
          var to = $(this).find('input[name=email]').val();
          var user_id = $(this).find('input[name=user_id]').val();
          $('#eml1').attr('disabled', true);
          $('#subj1').attr('disabled', true);
          $('#msg1').attr('disabled', true);
          $('#emlsub1').attr('disabled', true);
        $.ajax({
          type: 'post',
          url: mainurl+'/user/message/contact',
          data: {
              '_token': token,
              'subject'   : subject,
              'message'  : message,
              'to'   : to,
              'user_id' : user_id
                },
          success: function( data) {
          $('#eml1').attr('disabled', false);
          $('#subj1').prop('disabled', false);
          $('#msg1').attr('disabled', false);
          $('#subj1').val('');
          $('#msg1').val('');
          $('#eml1').val('');
          $('#emlsub1').attr('disabled', false);
          if(data == 0)
          $.notify("Oops Something Goes Wrong !!","error");
          else
          $.notify("Message Sent !!","success");
          $('.ti-close').click();
              }
          });          
            return false;
      });



// CHAT WITH DOCTOR ENDS