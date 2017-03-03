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
             console.log(getPetData());
             getPetData();
             $('#newOwnerForm > input').val('');
           }
         });// end ajax POST
       });// end #newOwnerForm event listener

       //#newPetForm event listener
        $('#newPetForm').on('submit', function(event){
          console.log('clicking new pet');
          event.preventDefault();
          var newPetObject = {};
          var formFields = $(this).serializeArray();
          formFields.forEach(function (field) {
            newPetObject[field.name] = field.value;
          });
          $.ajax({
            type: 'POST',
            url: '/pets/newPets',
            data: newPetObject,
            success: function(response){
              console.log(response);
              $('#newPetForm > input').val('');
              getPetData(response);
            }
          });// end ajax POST
        });// end #newPetForm event listener





    function getPetData() {
      $.ajax({
        type: 'GET',
        url: '/pets',
        success: function(response) {
          console.log('response', response); // response is an array of pet objects
          $('#hotelData').empty(); // clears the pets in the #hotelData
          for (var i = 0; i < response.length; i++) {
            var currentPet = response[i]; // Loops through pets - This is an object
            var $newPet = $('<tr>'); // Creating a new row for each pet
            $newPet.data('id', currentPet.id);
            $newPet.append('<td>'+ currentPet.owner_id + '</td>');
            $newPet.append('<td><input value="' + currentPet.name + '" class="petName"></td>');
            $newPet.append('<td><input value="' + currentPet.breed + '" class="petBreed"></td>');
            $newPet.append('<td><input value="' + currentPet.color + '" class="petColor"></td>');
            $newPet.append('<td><button class="deleteButton">Delete</button></td>');
            $newPet.append('<td><button class="saveButton">Update Pet</button></td>');
            $('#hotelData').append($newPet);
          }
        }
      });  //closes ajax
    }; // end getPetData

    $('#hotelData').on('click', '.deleteButton', function(){
      var idOfPetToDelete = $(this).parent().parent().data().id;
      console.log('The id to delete is: ', idOfPetToDelete);
      // for waldo, number 48 -> /books/delete/48
      $.ajax({
        type: 'DELETE',
        url: '/pets/delete/' + idOfPetToDelete,
        success: function(response) {
          console.log(response);
          getPetData();
        }
      })
    });


    function getOwnerData() {
         $.ajax({
           type: 'GET',
           url: '/pets/newOwners',
           success: function(response) {
             console.log('ownerdataresponse', response); // response is an array of owner objects
             $('#ownerDrop').empty(); // clears the pets in the #ownerDrop
             for (var i = 0; i < response.length; i++) {
               var currentOwner = response[i]; // Loops through owners - This is an object
               var $newOption = $('<option value="' + currentOwner.first_name + ' ' + currentOwner.last_name + '">' + currentOwner.first_name + ' ' + currentOwner.last_name + '</option>'); // Creating a new option for each owner
               $newOption.data('id', currentOwner.id);
               $('#ownerDrop').append($newOption);
             }
           }
         });  //closes ajax
       }; // end getOwnerData



}); // end document.ready
