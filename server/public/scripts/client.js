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
       });// end #newBookForm event listener


    function getPetData() {
      $.ajax({
        type: 'GET',
        url: '/pets',
        success: function(response) {
          console.log('response', response); // response is an array of pet objects
          $('#hotelTable').empty(); // clears the pets in the #hotelTable
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
            $('#hotelTable').append($newPet);
          }
        }
      });  //closes ajax
    }; // end getPetData

    $('#hotelTable').on('click', '.deleteButton', function(){
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



}); // end document.ready
