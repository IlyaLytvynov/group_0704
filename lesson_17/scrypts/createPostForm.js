import { Post } from './post.js';
import { ApiRequest } from './apiRequest.js';

export class CreatePostForm {
  constructor(root) {
    this.root = root;
    this.postInstances = [];
    this.render();
    this.fetchList();
  }

  fetchList() {
    const request = new ApiRequest('http://localhost:3000/posts');
    const onSuccess = (posts) => {
      console.log(posts);
      for (let post of posts) {
        const postInstance = new Post(this.root, post);
        this.postInstances.push(postInstance);
      }
    };

    const onError = (e) => {
      console.log(e);
      alert(e.statusText);
    };
    request.get(onSuccess, onError);
  }

  render() {
    this.form = document.createElement('form');
    this.inputTitle = document.createElement('input');
    this.inputContent = document.createElement('input');
    this.inputImgUrl = document.createElement('input');
    this.submitBtn = document.createElement('button');

    this.inputImgUrl.placeholder = 'IMG url';
    this.inputContent.placeholder = 'Content';
    this.inputTitle.placeholder = 'Title';
    this.submitBtn.textContent = 'Send';
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = this.inputTitle.value;
      const content = this.inputContent.value;
      const imgUrl = this.inputImgUrl.value;
      const request = new ApiRequest('http://localhost:3000/posts');

      request.post({ title, content, imgUrl }, (post) => {
        const postInstance = new Post(this.root, post);
        this.postInstances.push(postInstance);
      });
    });
    this.form.append(this.inputTitle);
    this.form.append(this.inputContent);
    this.form.append(this.inputImgUrl);
    this.form.append(this.submitBtn);
    this.root.append(this.form);
  }
}
