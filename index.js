// Add your code here
function submitData(userName,userEmail) {
   fetch('http://localhost:3000/users',{
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   },
   body: JSON.stringify(nameAndemail)
 })
 .then(resp => resp.json())
    .then(data => document.body.textContent = data.id)
    .catch(error => document.body.textContent = error.message)
}
nameAndemail = {
name : userName,
email : userEmail
}