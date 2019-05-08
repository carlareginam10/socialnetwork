$(document).ready(function(){    
    $('#createUserButton').click(CreateUserClick)  
    $('#authEmailPassButton').click (createUserWithEmailAndPassword);
    $('#logOutButton').click(logOutClick) ;
    $('#authGitHubButton').click(authGitHubClick);
    $('#authGoogleButton').click(authGoogleClick);     
});

function CreateUserClick(){
    firebase
    .auth()
    .createUserWithEmailAndPassword($('#emailInput').val(), $('#passwordInput').val())
    .then(function (response) {
        window.location = "./src/html/timeline.html?id="+response.user.uid;
    })
    .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
        bootbox.alert({message: "Para se cadastrar é necessário inserir e-mail válido e uma senha com 7 dígitos"});
    });
}

function createUserWithEmailAndPassword(){
    firebase
    .auth()
    .signInWithEmailAndPassword($('#emailInput').val(), $('#passwordInput').val())
    .then(function (response) {
        console.log(response);
        $('#displayName').text( $('#emailInput').val())
        window.location = "./src/html/timeline.html?id="+response.user.uid;
    })
    .catch(function (error) {
        console.error(error.code);
        console.log(error.message);
        bootbox.alert({message: "Falha ao autenticar, certifique-se que seu email e senha estão corretos"});
    });
}

function logOutClick(){
    firebase
    .auth()
    .signOut()
    .then(function () {
        $('#displayName').text('Você não está logado')
        bootbox.alert({message: "Você deslogou"});
    }, function (error) {
        console.error(error);
    });
}

function authGitHubClick() {
    var provider = new firebase.auth.GithubAuthProvider();
    signIn(provider);
}

function authGoogleClick() {
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
}

function signIn(provider) {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (response) {
            var token = response.credential.accessToken;
            $('#displayName').text('Bem vindo, '+response.user.displayName)
            window.location = "./src/html/timeline.html?id="+response.user.uid;
            
        }).catch(function (error) {
            console.log(error);
            bootbox.alert({message: "Falha ao autenticar, tente novamente"
        });
    });
}







