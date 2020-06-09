export class SlideShow {
  constructor(root) {
    this.root = root;
    this.slidesElements = [];
    this.activeSlideIndex = 2;
    this.fetchData();
  }

  fetchData() {
    const xhr = new XMLHttpRequest();

    xhr.open(
      'GET',
      'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads'
    );
    xhr.send();
    xhr.onload = () => {
      // async
      console.log(this); /// SlideShow

      const data = JSON.parse(xhr.response);
      console.log(typeof data); // object
      this.render(data);
    };
  }

  render(slidesArray) {
    for (let i = 0; i < slidesArray.length; i++) {
      console.log(i);
      const element = this.renderSlideAlt(slidesArray[i]);
      if (i === this.activeSlideIndex) {
        element.classList.add('active');
      }
      this.root.append(element);
      this.slidesElements.push(element);
    }
    this.root.classList.add('slideshow');
    console.log('RENDERED!!!!', this.slidesElements);
  }

  renderSlide(slide) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const title = document.createElement('h4');
    const description = document.createElement('p');

    description.textContent = slide.description;
    title.textContent = slide.title;
    img.src = slide.img;

    li.append(img);
    li.append(title);
    li.append(description);

    return li;
  }

  renderSlideAlt(slide) {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${slide.img}"/>
      <div class="slide__details">
        <h4>${slide.title}</h4>
        <p>${slide.description}</p>
      </div>
    `;
    li.classList.add('slide');
    return li;
  }
}
