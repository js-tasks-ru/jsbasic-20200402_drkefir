/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
 export default class UserTable {
  constructor(data) {
    this.data = data;
    this.elem = document.createElement('table');
    //sdelaem tablizu
    this.move();
    //nachinaem rabotu s sobitiem
    this.elem.addEventListener('click', event => {
    //pri sobitie na click poluchaem znachenie imeni iz tablizi
      let name = event.target.getAttribute('data-name');
      if (!name) return;
    //ischem blizhajschego roditelja tr i udaljaem
      let ancestor = event.target.closest('tr[data-tr]');
      ancestor.remove();
    });
  }
  move(){

    const newTable = this.data.map(item => `
      <tr data-tr = ${item.name}>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.salary}</td>
      <td>${item.city}</td>
      <td><button data-name="${item.name}">X</button></td>
      </tr>
    `).join('');

    this.elem.innerHTML = `
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Salary</td>
          <td>City</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      ${newTable}
      </tbody>
    `
  }
}
