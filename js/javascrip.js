let names = [
    "Johann Sebastian Bach",
    "Arcangelo Corelli",
    "George Frideric Handel",
    "Henry Purcell",
    "Jean-Philippe Rameau",
    "Domenico Scarlatti",
    "Antonio Vivaldi",
    "Ludwig van Beethoven",
    "Johannes Brahms",
    "Francesco Cavalli",
    "Fryderyk Franciszek Chopin",
    "Antonin Dvorak",
    "Franz Joseph Haydn",
    "Gustav Mahler",
    "Wolfgang Amadeus Mozart",
    "Johann Pachelbel",
    "Gioachino Rossini",
    "Dmitry Shostakovich",
    "Richard Wagner",
    "Louis-Hector Berlioz",
    "Georges Bizet",
    "Cesar Cui",
    "Claude Debussy",
    "Edward Elgar",
    "Gabriel Faure",
    "Cesar Franck",
    "Edvard Grieg",
    "Nikolay Rimsky-Korsakov",
    "Franz Joseph Liszt",
    "Felix Mendelssohn",
    "Giacomo Puccini",
    "Sergei Rachmaninoff",
    "Camille Saint-Saens",
    "Franz Schubert",
    "Robert Schumann",
    "Jean Sibelius",
    "Bedrich Smetana",
    "Richard Strauss",
    "Pyotr Il'yich Tchaikovsky",
    "Guiseppe Verdi",
    "Bela Bartok",
    "Leonard Bernstein",
    "Benjamin Britten",
    "John Cage",
    "Aaron Copland",
    "George Gershwin",
    "Sergey Prokofiev",
    "Maurice Ravel",
    "Igor Stravinsky",
    "Carl Orff"
];



 // Ordena os nomes em ordem alfabetica
  let sortedNames = names.sort();
  
  //Obtem referência ao elemento de entrada no HTML
  let input = document.getElementById("input");
  
  input.addEventListener("keyup", (e) => {
    // Limpa todos os elementos previamente exibidos

    removeElements();

    // Itera sobre os nomes ordenados
    for (let i of sortedNames) {
      // Converte a entrada e o nome para minúsculas para comparação sem distincao entre maiusculas e minusculas
  
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        // Cria um elemento li
        input.value != ""
      ) {
        
        let listItem = document.createElement("li");
        
         // Adiciona classes e estilos ao elemento li
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        
        // Exibe a parte correspondente em negrito
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
      
          // Define o conteudo do elemento li
        listItem.innerHTML = word;

        // Adiciona o elemento li ao conteiner com a classe list
        document.querySelector(".list").appendChild(listItem);
      }
    }
  });
  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  // Função para remover todos os elementos exibidos
  function removeElements() {
  // Seleciona todos os elementos com a classe "list-items"

    let items = document.querySelectorAll(".list-items");

    // Itera sobre os elementos e os remove
    items.forEach((item) => {
      item.remove();
    });
  }