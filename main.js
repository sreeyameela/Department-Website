var firebaseConfig = {
    apiKey: "AIzaSyDAzMq0cx3r3haWVDhDbAC5DGtz-W--QwM",
    authDomain: "webathon-899de.firebaseapp.com",
    databaseURL: "https://webathon-899de-default-rtdb.firebaseio.com",
    projectId: "webathon-899de",
    storageBucket: "webathon-899de.appspot.com",
    messagingSenderId: "851499113954",
    appId: "1:851499113954:web:d6660fcb7233a06b42adbb",
    measurementId: "G-G31S7KWYH2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let message = getInputVal('message');

    //save message

    saveMessage(name, email,  message);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email,  message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    })
}