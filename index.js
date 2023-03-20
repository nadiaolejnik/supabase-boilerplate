import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://zekefrbsuqbksswgruhr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla2VmcmJzdXFia3Nzd2dydWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NTE4MjMsImV4cCI6MTk5MzAyNzgyM30.QfzOQaD_eAExsWbSbSti2f3jKXRa7YUqTXfgsY5NEzM'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books'); bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td>${book.description}</td></tr>`;
  }
  
}

getBooks();