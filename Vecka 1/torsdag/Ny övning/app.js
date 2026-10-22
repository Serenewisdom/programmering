const isLoggedIn = true;
const userRole ='admin';

if (isLoggedIn === true) {
    if (userRole === 'admin') {
        console.log('Välkommen till Adminpanelen!')
    } else {
        console.log('Välkommen vanlig användare!')
    }
} 
else {
        console.log('Du måste logga in först')
    }