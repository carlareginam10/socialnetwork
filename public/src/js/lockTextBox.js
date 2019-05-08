$(document).ready(function(){

// const publish = document.getElementById('js-btn-post-msg');
//  const textBox = document.getElementById('js-control-textarea');
// textBox.addEventListener('keydown', block);


// function block() {
//   let textValue = document.getElementById('js-control-textarea').value.length;
//   if (textValue >= 1) {
//     publish.disabled = '';
//   } else if (textValue < 1) {
//     publish.disabled = 'true';
//   }
// };

// textBox.addEventListener('keyup', function (event) {
//   let trimmed = this.value.trim();

//   if (!trimmed) {
//     this.value = '';
//     publish.disabled='true';
//   } else {
//     publish.disabled='';
//   }
// });


  $('#js-control-textarea').keydown(block);
  $('#js-control-textarea').keyup(disable);

  function block () {
    let textValue = $('#js-control-textarea').val().length;
    if (textValue >= 1) {
      publish.disabled = '';
    } else if (textValue < 1) {
      publish.disabled = 'true';
    }
  };

  const publish = document.getElementById('js-btn-post-msg');
  // const publish = $('#js-btn-post-msg').val()

  console.log(publish)

  function disable(){

    let trimmed = this.value.trim();
    if (!trimmed) {
      this.value = '';
      publish.disabled='true';
    } else {
      publish.disabled='';
    }
  }

});










