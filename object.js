/*switch (age) {
    case 15:Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'tu es mineur!',
            footer: '<a href="">Why do I have this issue?</a>'
      })
        break;
    case 18:Swal.fire(
        'Good job!',
        'Tu peux voter',
        'success'
      ) 
        break;
    default:Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'reseigner les champs',
        footer: '<a href="">Why do I have this issue?</a>'
  })
        break;
}*/
const num = [1, 4, 5, 8]
console.table(num)
let total = null
let moyenne = num.length

const calc = (a, b) => a + b

console.log(num.reduce(calc) / num.length)
console.log(total)

const prod = {
    chauffage: 100,
    voiture: 70,
    connexion: 30,
    loyer: 750,
    loisirs: 100,

};
const calc = (a, b) => a + b
let taxe = 0.196;
const total = Object.values(prod).reduce(calc) * taxe
console.log(`Total dépenses : ${total}`);

/* classe */
const logins = prompt("Votre login")
const mpd = Number(prompt("Mot de passe"))

const conexion = {
    logins : prompt("Votre login"),
    mdp : Number(prompt("Mode passe"))
}

class Users{
    /* constructeur */
    constructor(login, psw){
        this.login = login;
        this.psw =  psw;
    }
    /* getter */
    print_out(){
        return `${this.login} : ${this.psw}`
    }
    /* setter */

}
const connects = new Users(conexion.logins, conexion.mdp)
let msg = connects.print_out()

console.log(msg)
