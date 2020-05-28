function createForm() {
  const form = document.createElement('form');
  form.classList.add('comments-form');
  const formContentTemplate = `
    <input
      class="comments-form__field"
      name="author"
      placeholder="Name"
      type="text"
    />
    <textarea
      class="comments-form__field"
      placeholder="Comment"
      name="text"
      cols="30"
      rows="10"
    ></textarea>
    <button class="comments-form__control">Add</button>
  `;
  form.innerHTML = formContentTemplate;
  return form;
}

/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
const sanitizeHTML = (str) => {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

function createComment(author, text) {
  const comment = document.createElement('div');
  comment.classList.add('comment');
  comment.innerHTML = `
    <p class="comment__text">${sanitizeHTML(text)}</p>
    <div class="comment__author">${sanitizeHTML(author)}</div>
    <button class="btn-delete">DELETE</button>
  `;

  return comment;
}

function commentsPage(root) {
  const form = createForm();

  const input = form.querySelector('input');
  const textarea = form.querySelector('textarea');

  form.addEventListener('submit', function (eventObject) {
    eventObject.preventDefault();
    const comment = createComment(input.value, textarea.value);
    const button = comment.querySelector('button');
    button.addEventListener('click', function () {
      root.removeChild(comment);
    });
    input.value = '';
    textarea.value = '';
    root.appendChild(comment);
  });

  root.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
      root.removeChild(e.target.parentNode);
    }
  });

  root.appendChild(form);
}

export { commentsPage };
