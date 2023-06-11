export const mappingArray = wholeArray =>
  wholeArray.map(img => ({
    id: img.id,
    webformatURL: img.webformatURL,
    largeImageURL: img.largeImageURL,
    tags: img.tags,
  }));
