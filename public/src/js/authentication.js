$(document).ready(function(){
    $('#createUserButton').click(CreateUser)
    $('#authEmailPassButton').click (authEmailPassword);
    $('#logOutButton').click(logOutClick) ;
    $('#authGitHubButton').click(authGitHubClick);
    $('#authGoogleButton').click(authGoogleClick);
});

function CreateUser(){
    firebase
    .auth()
    .createUserWithEmailAndPassword($('#emailInput').val(), $('#passwordInput').val())
    .then(function (response) {
        window.location = "./src/html/timeline.html?id="+response.user.uid;
    })
    .catch(function (error) {
         alert("Para se cadastrar é necessário inserir e-mail válido e uma senha com 7 dígitos");
    });
}

function authEmailPassword(){
    firebase
    .auth()
    .signInWithEmailAndPassword($('#emailInput').val(), $('#passwordInput').val())
    .then(function (response) {
        $('#displayName').text( $('#emailInput').val())
         window.location = "./src/html/timeline.html?id="+response.user.uid;

    })
    .catch(function (error) {
        alert( "Falha ao autenticar, certifique-se que seu email e senha estão corretos");
    });
}

function logOutClick(){
    firebase
    .auth()
    .signOut()
    .then(function () {
        $('#displayName').text('Você não está logado')
        alert("Você deslogou");
    }, function (error) {
        alert("Não foi possível deslogar, tente novamente");
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
          alert("Falha ao autenticar, tente novamente");
    });
}


// var user = firebase.auth().currentUser;
// var name, email, photoUrl, uid, emailVerified;

// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }

// var user = firebase.auth().currentUser;

// if (user != null) {
//   user.providerData.forEach(function (profile) {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }
