async function loadBooks() {
  const response = await fetch('library.json');
  const data = await response.json();
  const books = data.books;
  const container = document.getElementById('bookContainer');

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const card = `
      <div class="bg-white rounded-lg shadow-md">
        <img src="${book.cover_image}" alt="${book.title}" class="w-full h-60 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-1">${book.title}</h3>
          <p class="text-sm text-gray-700 mb-2">by ${book.author.name}</p>
          <button class="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600">Borrow Now</button>
        </div>
      </div>
    `;
    container.innerHTML += card;
  }
}

loadBooks();
