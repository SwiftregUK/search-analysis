export default class Client {
  constructor(url) {
    this.url = url;
  }

  fetch(method, path, body) {
    const urlObj = new URL(this.url);
    const username = urlObj.username;
    const password = urlObj.password;

    urlObj.username = '';
    urlObj.password = '';
    urlObj.pathname = path;

    let headers = {
      'accept': 'application/json',
      'content-type': 'application/json',
    };

    if (username && password) {
      headers['Authorization'] = `Basic ${btoa(username + ':' + password)}`;
    }

    return fetch(urlObj.toString(), {
      headers: headers,
      body: body && JSON.stringify(body),
      method: method,
    }).then((res) => res.json());
  }

  getAliases() {
    return this.fetch('GET', '/_alias');
  }

  getMappings() {
    return this.fetch('GET', '/_mapping');
  }

  getSettings() {
    return this.fetch('GET', '/_settings');
  }

  getIndexSettings(index) {
    const path = `/${index}/_settings`;
    return this.fetch('GET', path);
  }

  getIndexMapping(index) {
    const path = `/${index}/_mapping`;
    return this.fetch('GET', path);
  }

  analyze(body) {
    return this.fetch('POST', '/_analyze', body);
  }

  analyzeWithIndex(index, body) {
    const path = index ? `/${index}/_analyze` : '/_analyze';
    return this.fetch('POST', path, body);
  }
}