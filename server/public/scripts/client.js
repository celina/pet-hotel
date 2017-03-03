console.log('client.js is sourced');
  $(document).ready(function(){ // start document.ready

      getPetData();

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
       });// end #newOwnerForm event listener

       //#newPetForm event listener
        $('#newPetForm').on('submit', function(event){
          console.log('clicking new owner');
          event.preventDefault();
          var newPetObject = {};
          var formFields = $(this).serializeArray();
          formFields.forEach(function (field) {
            newOwnerObject[field.name] = field.value;
          });
          $.ajax({
            type: 'POST',
            url: '/pets/newPets',
            data: newOwnerObject,
            success: function(response){
              console.log(response);
              // getPetData();
              $('#newPetForm > input').val('');
            }
          });// end ajax POST
        });// end #newPetForm event listener

    }); // end document.ready


    function getPetData() {
      $.ajax({
        type: 'GET',
        url: '/pets',
        success: function(response) {
          console.log('response', response); // response is an array of pet objects
          $('#tbody').empty(); // clears the pets in the #hotelTable
          for (var i = 0; i < response.length; i++) {
            var currentPet = response[i]; // Loops through pets - This is an object
            var $newPet = $('<tr>'); // Creating a new row for each pet
            $newPet.data('id', currentPet.id);
            $newPet.append('<td>'+ currentPet.owner_id + '</td>');
            $newPet.append('<td>'+ currentPet.name + '</td>');
            $newPet.append('<td>' + currentPet.breed + '</td>');
            $newPet.append('<td>' + currentPet.color + '</td>');
            $newPet.append('<td><button class="deleteButton">Delete</button></td>');
            $newPet.append('<td><button class="saveButton">Update Pet</button></td>');
            $('#hotelTable').append($newPet);
          }
        }
      });  //closes ajax
    }; // end getPetData
