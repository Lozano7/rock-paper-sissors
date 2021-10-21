import viewRules from './rules.js';

const d = document;
export default function includeHtml(className, url) {
  const $includes = d.querySelector(`${className}[data-include]`);
  let props = {
    url,
    succes(result) {
      $includes.outerHTML = result;
    },
    error(err) {
      $includes.outerHTML = `Error ${err.status}: ${err.statusText}`;
    },
  };
  searchHmtl(props);
}
async function searchHmtl({ url, succes, error }) {
  try {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'text/html; charset=utf-8',
      },
    };
    let response = await fetch(url, options);
    if (!response.ok) {
      throw { status: response.status, statusText: response.statusText };
    }
    let html = await response.text().then((text) => text);
    succes(html);
  } catch (er) {
    error(er);
  }
}
