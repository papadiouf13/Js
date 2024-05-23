export default class HttpClientModule {
  static async get(url) {
   return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
}
