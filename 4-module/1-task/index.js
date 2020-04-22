/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
/*
//friends massiv uzhe suschestwuet v index.html
  let friends = [
    {
      firstName: 'Artsiom',
      lastName: 'Mezin'
    },
    {
      firstName: 'Ilia',
      lastName: 'Kantor'
    },
    {
      firstName: 'Christopher',
      lastName: 'Michael'
    }
  ];
  */
let ul = document.createElement('ul'); //sozdaem <ul>
  for (let i = 0; i < friends.length; i++) { // perechesljaem elementi massiva
    let li = document.createElement('li'); //sozdaem <li>
    li.textContent = friends[i].firstName + ' ' + friends[i].lastName; //zapisiwaem wseh druzej s massiva v formate firstName/lastName
    ul.append(li);//vstavljaem element v HTML
  }
     return ul;
}
