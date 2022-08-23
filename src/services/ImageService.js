let URL_ENDPOINT = 'https://api-upscaler-origin.icons8.com/api/frontend/v1/batches';

export class ImageService {

  async uploadImage(file) {
    let batche = await this.batche();
    let data = new FormData();
    data.append('image', file, file.name);
    return await fetch(`${URL_ENDPOINT}/${batche.id}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      body: data,
    }).then(response => response.json())
      .then(data => data.source.url)
      .catch(err => console.error(err));
  }


  async batche() {
    return await fetch(URL_ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
      .then(data => data)
      .catch(err => console.error(err));
  }

}