const familia = ["Zan", "Madriana", "Myrella", "Victor"];
const anosFavoritos = [1997, 2019, 2000];
const data = ["julho", 27, true];
const qtdeDePessoas = [3];
const vazio = [];

console.log(`Família possui length de ${familia.length}
O familia[3] é ${familia[3]}`);

console.log(`O terceiro array inclui a string julho? ${data.includes("julho")}
Inclui o número 27? ${data.includes(27)}
Inclui o true? ${data.includes(true)}`);

console.log(`Valor do array vazio: ${qtdeDePessoas}
Qual seu tamanho? ${qtdeDePessoas.length}
O índice [0]? ${qtdeDePessoas[0]}`);

const ditto = familia.slice();
ditto.push("Lucky");
console.log(familia, ditto);

ditto.splice(2,2);
//      índice, quantidade
console.log(ditto);

familia.sort();
console.log(familia);
anosFavoritos.sort();
console.log(anosFavoritos);


const aleatory = [12, 567, 1, 45, 9, 2, 88, 0];
console.log(aleatory);
aleatory.sort();
console.log(aleatory);
aleatory.reverse();
console.log(aleatory);
aleatory.pop();
aleatory.push(6);
console.log(aleatory);
aleatory.splice(2,1);
console.log(aleatory);
