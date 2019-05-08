let USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function() {
    $('#js-control-textarea').val('');
    $('#js-btn-post-msg').disabled = 'true';
});

firebase.database().ref('Post/' + USER_ID).once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        createPost(childData, childKey);
        getFunctions(childData, childKey);
    });
});

$('.btn-add-post').click(function(event) {
    event.preventDefault();
    let post = $('.input-text-post').val();
    let TypePrivacity = $('.js-privacity-post').val();
    let dateTime = time();

    const dataObject = {
        name:'Usuário',
        text: post,
        likes: 0,
        comments: 0,
        shares: 0,
        time: dateTime,
        privacity:TypePrivacity
    };

    let postFromBD = firebase.database().ref('Post/' + USER_ID).push(dataObject);
    createPost(dataObject, postFromBD.key);
    getFunctions(dataObject, postFromBD.key);
});

function getFunctions(postData, key) {
    $(`a[data-delete-id="${key}"]`).click(() => removePostTimeline(key));
    $(`a[data-edit-id="${key}"]`).click(() => editPostTimeline(key, postData));
    $(`button[data-like-id="${key}"]`).click(() => like(key));
    $('.js-privacity-post').change(() => ShowPostPrivacity(key));
}


function createPost(postData, key) {
    $('.list-post').prepend(`
        <div class="border border-light  rounded mb-3" >
          <nav class="navbar navbar-light bg-info">
            <a class="navbar-brand" href="">
              <img src="/src/img/foto-perfil.jpg" width="50" height="50" class="d-inline-block align-top align-toprounded-circle rounded-circle" alt="">
              <span> Nome usuário </span>
            </a>
            <span class="nav-item dropdown">
                <a class="nav-link " href="#" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="/src/img/config.png" width="20" height="20" class="d-inline-block align-top align-toprounded-circle" alt="">
                </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"data-edit-id="${key}"href="#"><i class="material-icons">edit</i>Editar</a>
                <a href="#" class="dropdown-item" data-delete-id="${key}"><i class="material-icons">delete</i>Excluir</a>
              </div>
            </span>
          </nav>
          <div class="card-body">
            <p data-privacity-id="${key}">${postData.privacity}</p>
            <p data-text-id="${key}">${postData.text}</p>
            <p data-horacio-id="${key}">${postData.time}</p>
          </div>
          <hr>
          <div class="card-body">
            <button type="submit" style="background-color:transparent; border-color:transparent;" data-like-id="${key}">
              <i class="material-icons">thumb_up_alt</i>
              <a href="#" class="card-link"></a>
              <span class="countLike">${postData.likes}</span>
            </button>
            <button type="submit" style="background-color:transparent; border-color:transparent;" data-comment-id="${key}">
              <i class="material-icons">message</i>
              <a href="#" class="card-link"></a>
              <span class="countComment">0</span>
            </button>
            <button type="submit" style="background-color:transparent; border-color:transparent;" data-share-id="${key}">
                <i class="material-icons">share</i>
                <a href="#" class="card-link"></a>
                <span class="countShare">0</span>
            </button>
          </div>
      </div>
  `);
}

function removePostTimeline(key) {
    bootbox.confirm({
        message:'Confirma a exclusão do registro?',
        callback: function(confirmacao) {
            if (confirmacao) {
                firebase.database().ref('Post/' + USER_ID + '/' + key).remove();
                $(`a[data-delete-id="${key}"]`).parent().parent().parent().parent().remove();
                bootbox.alert('Registro excluído com sucesso.');
            } else bootbox.alert('Operação cancelada.');
        },
        buttons: {
            cancel: {label: 'Cancelar',
                className:'btn-default'},
            confirm: {label: 'EXCLUIR',
                className:'btn-danger'}
        }
    });
}

function editPostTimeline(key) {
    let textPost = $(`p[data-text-id="${key}"]`).html();
    bootbox.prompt({
        inputType: 'textarea',
        title: 'Edite seu Post',
        value: textPost,
        buttons: {
            cancel: {
                label: 'Cancelar',
                className: 'btn-default',
                callback: function() {
                    alert('operação cancelada');
                }
            },
            confirm: {
                label: 'Salvar',
                className: 'btn-success',
                callback: function() {
                    alert('Edição realizada com sucesso');
                }
            }
        },
	    callback: function edit(result) {
            if (result) {
                $(`p[data-text-id="${key}"]`).html(result);
                firebase.database().ref('Post/' + USER_ID + '/' + key).update({
                    text: result
                });
            } else {
                bootbox.alert('Operação cancelada.');
            }
	    }
    });
}

function like(key) {
    event.preventDefault();
  	$(`button[data-like-id="${key}"]`).find('span').text(function() {
        if (parseInt($(this).text()) === 0) {
            let countLike = parseInt($(this).text() + 1);
            firebase.database().ref('Post/' + USER_ID + '/' + key).update({
                likes: countLike
            });
            return countLike;
        } else {
            let deslike = 0;
            firebase.database().ref('Post/' + USER_ID + '/' + key).update({
                likes: deslike
            });
            return deslike;
        }
    });
}

function time() {
    let today = new Date();
    let d = today.toLocaleDateString();
    let h = today.getHours();
    let m = today.getMinutes();
    let hora = (d + ' ' + h + ':' + m + ' ');
    return hora;
}
