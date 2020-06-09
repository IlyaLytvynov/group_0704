export class ApiRequest {
  constructor(url) {
    this.url = url;
  }

  get(successCallback, errorCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.url);
    xhr.send();

    xhr.onload = () => {
      console.log(xhr);
      if (xhr.status >= 400) {
        errorCallback(xhr);
        return;
      }
      const posts = JSON.parse(xhr.response);
      successCallback(posts);
      console.log(this.postInstances);
    };
  }

  post(dataToSend, successCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(dataToSend));

    xhr.onload = () => {
      console.log(xhr);
      successCallback(JSON.parse(xhr.response));
    };
  }
}
