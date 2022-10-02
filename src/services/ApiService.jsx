export function ApiService(name, perPage) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=1&key=29266393-ca2107f3c510602e9d821816e&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
