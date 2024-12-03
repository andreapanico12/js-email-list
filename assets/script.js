


// Definizione delle variabili
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
let emails = [];
let counterMails = 0;

const ulEmails = document.getElementById('mail-list');
const mailsButton = document.getElementById('btn-gen');

console.log(endpoint)

generaEmail()

mailsButton.addEventListener("click",function(){
  ulEmails.innerHTML='';
  counterMails = 0;
  emails = [];
  generaEmail()
});











// La funzione genera le 10 mail  necessarie per la soluzione dell'esercizio.
function generaEmail(){
  axios.get(endpoint)
 .then(response =>{
  let email = response.data.response;

  //in questo modo andiamo a definire che la variabile email è uguale alla response data dalla nostra chiama API.

  emails.push(email)
  counterMails++

  //si popola l'array dato in precedenza ed aumenta il counter definito all'inizio quando viene eseguita la chiamata.

  console.log(`l'email aggiunta è ${email}`);


  // grazie a questa condizione quando il counter arriverà a 10 si eseguirà la stampa in pagina creando un elemento li (liMail) per ogni elemento dell'array(ora popolato) emails

  // Ogni elemento li va poi aggiunto al suo genitore ulMails

  if (counterMails === 10){
    console.log(`Stampo tutte le mail:`, emails)
    emails.forEach(mail =>{
      const liMail = document.createElement('li');
      liMail.innerHTML = mail
      ulEmails.appendChild(liMail);
    });
    
  } 
  //Se il counter ancora non dovesse essere arrivato a 10 la funzione per generare la mail rievoca se stessa.

  else {
    generaEmail()
  }
 })
 
}