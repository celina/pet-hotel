console.log('client.js is sourced');
  $(document).ready(function(){ // start document.ready

      getPetData();
      getOwnerData();

      // #registerButton event listener
      //$('#registerButton').on('click', function(event){
      $('#newOwnerForm').on('submit', function(event) {
        console.log('clicking new owner');

        event.preventDefault();
        var newOwnerObject = {};
        var formFields = $(this).serializeArray();
        formFields.forEach(function (field) {
          newOwnerObject[field.name] =field.value;
          console.log(field.name + " : " + field.value);
        });
        $.ajax({
            type: 'POST',
            url: '/pets/newOwners',
            data: newOwnerObject,
            success: function(response){
              console.log(response);
              getOwnerData();
              // getPetData();
              $('#newPetForm > input').val('');
            }
        });// end ajax POST

      }); // end #registerButton event listener

      // #addPetButton event listener
      $('#addPetButton').on('click', function(event){
        console.log('clicking new pet');
        event.preventDefault();
        var newOwnerObject = {};
        var formFields = $(this).serializeArray();
        formFields.forEach(function (field) {
          newOwnerObject[field.name] =field.value;
        });
      }); // end #addPetButton event listener

    }); // end document.ready

    // //#newPetForm event listener
    // $('#newPetForm').on('submit', function(event){
    //   console.log('clicking new pet');
    //   event.preventDefault();
    //   var newPetObject = {};
    //   var formFields = $(this).serializeArray();
    //   formFields.forEach(function (field) {
    //     newPetObject[field.name] = field.value;
    //   });
    //   $.ajax({
    //     type: 'POST',
    //     url: '/pets/newPets',
    //     data: newPetObject,
    //     success: function(response){
    //       console.log(response);
    //       // getPetData();
    //       $('#newPetForm > input').val('');
    //     }
    //   });// end ajax POST
    // });// end #newPetForm event listener













    //#newOwnerForm event listener
    // $('#newPetForm').on('submit', function(event){
    //   console.log('clicking new pet');
    //   event.preventDefault();
    //   var newPetObject = {};
    //   var formFields = $(this).serializeArray();
    //   formFields.forEach(function (field) {
    //     newPetObject[field.name] = field.value;
    //   });
    //   $.ajax({
    //     type: 'POST',
    //     url: '/pets/newPets',
    //     data: newPetObject,
    //     success: function(response){
    //       console.log(response);
    //       // getPetData();
    //       $('#newPetForm > input').val('');
    //     }
    //   });// end ajax POST
    // });// end #newBookForm event listener

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
