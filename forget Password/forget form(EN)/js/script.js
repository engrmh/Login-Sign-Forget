var userData=[
    {username:'ahmad' , email:'engr.sadeqi@gmail.com' , tel:'09929911626', pass:'ahmad1377'},
    {username:'oracle' , email:'en.mohammadhosein@gmail.com' , tel:'09119193807' , pass:'hosein1379'}
]
var getUserData = document.getElementsByClassName('username')
var getUserPass = document.getElementsByClassName('password')

var userpassword
var useretu

function login(){
    var isInUserData = userData.some(function(user){
        if(user.user==getUserData){
            user.username == useretu
            return true
        }else if(user.email==getUserData){
            user.email == useretu
            return true
        }else if(user.tel==getUserData){
            user.tel == useretu
            return true
        }else{
            return false
        }
    })
    console.log(useretu);
    var checkUserPass = userData.some(function(pass){
        if(pass.pass==getUserPass){
            pass.pass == userpassword
            return true
        }
    })
    console.log(userpassword);
    if (isInUserData == useretu && checkUserPass == userpassword) {
        alert('Welcome to site')
    } else if (isInUserData != useretu) {
        alert('UserName / Email / Phone is Wrong')
    } else if (checkUserPass != userpassword) {
        alert('Password is wrong')
    } else {
        alert('UserName / Email / Phone and Password are Wrong')
    }
}