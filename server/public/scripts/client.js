console.log('client.js is sourced');
  $(document).ready(function(){ // start document.ready
    console.log('jquery.js is sourced');


    $(document).ready(function(){
      console.log('jquery was correctly sourced!');
      getPetData;
      function getPetData() {
        $.ajax({
          type: 'GET',
          url: '/pets',
          success: function(response) {
            console.log('response', response); // response is an array of pet objects
            $('#newPetForm').empty(); // clears the pets in the #hotelTable
            for (var i = 0; i < response.length; i++) {
              var currentpet = response[i]; // Loops through pets - This is an object
              var $newPet = $('<tr>'); // Creating a new row for each pet
              $newPet.data('id', currentPet.id);
              $newPet.append('<td><input value="' + currentPet.name + '" class="petName"></td>');
              $newPet.append('<td><input value="' + currentPet.breed + '" id="breed"></td>');
              $newPet.append('<td><input value="' + currentPet.color + '" id="color"></td>');
              // $newPet.append('<td><input value="' + $newPet.data + ('<td><button class="deleteButton">Delete</button></td>');
              $newPet.append('<td><button class="saveButton">Add Pet</button></td>');
              $('#hotelTable').prepend($newPet);
            }
          }
        });



    }
    //   $('#newPetForm').on('submit', function(event){
    //     event.preventDefault();
    //     var newPetObject = {};
    //     var formFields = $(this).serializeArray();
    //     formFields.forEach(function (field) {
    //       newPetObject[field.name] = field.value;
    //
    //     });
    //
    //     $.ajax({
    //       type: 'POST',
    //       url: '/pets/new',
    //       data: newPetObject,
    //       success: function(response){
    //         console.log(response);
    //         getPetData();
    //         $('#newPetForm > input').val('');
    //       }
    //     });
  })



  }); // end document.ready
