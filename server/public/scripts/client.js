console.log('client.js is sourced');
  $(document).ready(function(){ // start document.ready
    console.log('jquery.js is sourced');




    //#newOwnerForm event listener
    $('#newOwnerForm').on('submit', function(event){
      console.log('clicking new owner');
      event.preventDefault();
      var newOwnerObject = {};
      var formFields = $(this).serializeArray();
      formFields.forEach(function (field) {
        newOwnerObject[field.name] = field.value;
      });
      $.ajax({
        type: 'POST',
        url: '/pets/newOwners',
        data: newOwnerObject,
        success: function(response){
          console.log(response);
          // getPetData();
          $('#newOwnerForm > input').val('');
        }
      });// end ajax POST
    });// end #newBookForm event listener


  }); // end document.ready
