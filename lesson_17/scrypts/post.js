export class Post {
  constructor(root, post) {
    this.root = root;
    this.post = post;
    this.render();
  }
  render() {
    this.el = document.createElement('div');
    const p = document.createElement('p');
    const h4 = document.createElement('h4');

    h4.textContent = this.post.title;
    p.textContent = this.post.content;

    this.el.append(h4);
    this.el.append(p);
    if (this.post.imgUrl) {
      const img = document.createElement('img');
      img.src = this.post.imgUrl;
      img.style.width = '150px';
      this.el.append(img);
    }
    this.root.append(this.el);
  }
}
