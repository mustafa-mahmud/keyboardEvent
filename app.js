'use strict';

const insertEl = document.getElementById('insert');
const { body } = document;

const createHtml = (object) => {
  body.innerHTML = '';

  const div = document.createElement('div');
  div.setAttribute('id', 'insert');

  object.forEach((item) => {
    const key = Object.keys(item);
    let value = Object.values(item);

    if (value[0] === ' ') value = ['Space'];

    const div2 = document.createElement('div');
    div2.classList.add('key');
    div2.innerHTML = `
		${value[0]}
		<small>event.${key[0]}</small>
		`;

    div.appendChild(div2);
  });

  body.appendChild(div);
};

const getKeyInfo = (e) => {
  const { key } = e;
  const { keyCode } = e;
  const { code } = e;

  const eventArr = [{ key }, { keyCode }, { code }];

  insertEl.remove();
  createHtml(eventArr);
};

////////////////////////////////////////////////////
window.addEventListener('keyup', getKeyInfo);
