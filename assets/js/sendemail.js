const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit  = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <b>Name: </b>${name.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Message: </b>${message.value}
    `;

    Email.send({
        SecureToken : "cf8dd386-d3bb-4d87-9e07-a8f7bb430507", //add your token here
        To : 'loberasjelliananne@gmail.com', 
        From : 'jellianloberas.freelance@gmail.com',
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});