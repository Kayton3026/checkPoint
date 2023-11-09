const hobbies = ['tocar violão', 'cozinhar', 'ouvir musica', 'assistir'];
console.log("Lista com meus Hobbies no inicio: " + hobbies); // imprimindo array de Hobbies
// tamanho do array
console.log(`Sua lista contém ${hobbies.length} itens` + '\n');

/*//imprimindo cada hobbie separadamente
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
console.log(hobbies[3]);*/

//modificando hobbie
hobbies[3] = "comer";
//adcionando outro item no array
hobbies.push(`Dormir`, `jogar volei`); //.push() adiciona um novo item 
// quantidade itens na lista atualizada
console.log(`Sua lista atualizada contém ${hobbies.length} itens: ` + hobbies + '\n');
// removendo ultimo intem da lista 
console.log("Item removido da lista: " + hobbies.pop() + `\n`);
// lista atualizada 
console.log("Lista atualiza: " + hobbies + '\n');
// removendo pelo nome 
let posicao = hobbies.indexOf(`cozinhar`);// indentificando o index 
console.log("O indice é: " + posicao)// imprimi o index do item cozinhar 
hobbies.splice(posicao, 1); //posicao é a posicao do item, e 1 é a quantidade de item removido 
console.log("Lista atualizada: " + hobbies + '\n');

//removendo pelo index
hobbies.splice(2, 1) // quando ja sabemos o indice
console.log(hobbies + '\n');

const hobbiesDoAmigo = ['cantar', 'dançar', 'ler'];// criando outro array

const HobbiesJuntos = hobbies.concat(hobbiesDoAmigo); // usando .concat() para juntar os dois array
console.log("Meus hobbies junto com os do meu amigo: " + HobbiesJuntos);

const hobbieMusicais = [`cantar`, `tocar violão`, `Ouvir musica`]; //categorias de Hobbies 
const outrosHobbies = [`Dormir`, `Dançar`, `ler`];

const categoriasHobies = [hobbieMusicais, outrosHobbies]; // array aninhado 
console.log("Os elementos desse array é: " + categoriasHobies[0] + '\n'); // imprimindo no arry categoriasHobies no indice 0 o vetor hobbieMusicais

console.log("Os elementos desse array é: " + categoriasHobies[0][0] + '\n');// o primeiro 0, indica o primeiro indice de categoriasHobies. O segundo é o primeiro indice do indice hobbieMusicais

console.log("Os elementos desse array é: " + categoriasHobies[1][2] + '\n');