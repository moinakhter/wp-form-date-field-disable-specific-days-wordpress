  
// disabling holidays on month change by arrows.
$(document).delegate(".flatpickr-calendar .flatpickr-next-month,.flatpickr-calendar .flatpickr-prev-month,.wpforms-datepicker-wrap .wpforms-field-date-time-date","click",function () {
    var month = $(".flatpickr-calendar .flatpickr-monthDropdown-months option:selected").val();
    month = parseInt(month);
    var addMonth = (month+1);
    checkDay(addMonth);
  });
  
// disabling holidays on month change from dropdown

  $(document).delegate(".flatpickr-calendar .flatpickr-monthDropdown-months","change",function () {
    var month = $(this).val();
    month = parseInt(month);
    var addMonth = (month+1);
    checkDay(addMonth);

  });

  function checkDay(addMonth){
      $(".flatpickr-calendar span.flatpickr-day").each(function () {
          var thisday =  $(this).html();
          thisday = parseInt(thisday);
           // disabling holidays day by month
          if(addMonth == 4){
              if(thisday == 29){
                  $(this).addClass("flatpickr-disabled");
              }
          }
          
          if(addMonth == 5){
              if(thisday == 3 || thisday == 4 || thisday == 5  ){
                  $(this).addClass("flatpickr-disabled");
              }
          }

          if(addMonth == 7){
              if(thisday == 18){
                  $(this).addClass("flatpickr-disabled");
              }
          }
          if(addMonth == 8){
              if(thisday == 11){
                  $(this).addClass("flatpickr-disabled");
              }
          }
          if(addMonth == 9){
              if(thisday == 19 ||  thisday == 23){
                  $(this).addClass("flatpickr-disabled");
              }
          }
          if(addMonth == 10){
              if(thisday == 10){
                  $(this).addClass("flatpickr-disabled");
              }
          }
          if(addMonth == 11){
              if(thisday == 3 || thisday == 23){
                  $(this).addClass("flatpickr-disabled");
              }
          }
      });
  }
