let library = [
  {
    id: 1,
    title: 'El Juego de Ender',
    author: 'Orson Scot Card',
    genre: 'Ciencia ficción',
    pages: 359,
    punct: 8,
  },
  {
    id: 2,
    title: 'La Voz de los Muertos',
    author: 'Orson Scot Card',
    genre: 'Ciencia ficción',
    pages: 527,
    punct: 7,
  },
  {
    id: 3,
    title: 'Ender el Xenocida',
    author: 'Orson Scot Card',
  },
  {
    id: 4,
    title: 'Hijos de la Mente',
    author: 'Orson Scot Card',
  },
  {
    id: 5,
    title: 'Guerra de Regalos',
    author: 'Orson Scot Card',
  },
  {
    id: 6,
    title: 'Ender en el Exilio',
    author: 'Orson Scot Card',
  },
];

export function getLibrary() {
  return library;
}

export function addBook(book) {
  const id = library[library.length - 1].id + 1;
  book = { ...book, id };
  library.push(book);


  console.log(book);
  console.log(library);
  return book;
}

export function putBook(book) {
  library.map(item => {
    if(item.id === book.id) {
      library[library.indexOf(item)] = book;
    }
  });

  console.log(library);
  return book;
}

export function deleteBook(id) {
  library = library.filter(item => item.id === id);
}
