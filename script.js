document.addEventListener("DOMContentLoaded", () => {
  header();
  nav();
  main();
  footer();
});

function header() {
  const header = document.querySelector("header");
  header.id = "header";

  const h1 = document.createElement("h1");
  h1.textContent = "Squirtle";

  const a = document.createElement("a");
  a.href = "./index.html";

  a.appendChild(h1);
  header.appendChild(a);
}

function nav() {
  const navUl = document.createElement("ul");
  document.querySelector("nav").appendChild(navUl);

  const navItems = [
    { text: "Informações sobre Squirtle", href: "#info-squirtle" },
    { text: "Características", href: "#caracteristicas" },
    { text: "Curiosidades", href: "#curiosidades" },
    { text: "Artigo sobre Squirtle", href: "#artigo-squirtle" },
    { text: "Recursos Adicionais", href: "#recursos" },
    { text: "Evolução", href: "#evolucao" },
  ];

  navItems.forEach((navItem) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = navItem.text;
    a.href = navItem.href;

    li.appendChild(a);
    navUl.appendChild(li);
  });
}

function main() {
  infoSquirtle();
  characteristics();
  curiosities();
  article();
  additionalResources();
  evolution();
}

function infoSquirtle() {
  const section = document.createElement("section");
  section.id = "info-squirtle";
  section.ariaLabel = "info-squirtle-label";

  const h2 = document.createElement("h2");
  h2.id = "info-squirtle-label";
  h2.textContent = "Informações sobre o Squirtle";

  const p = document.createElement("p");
  p.textContent =
    "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para o Wartotle.";

  const div = document.createElement("div");

  const img1 = document.createElement("img");
  img1.src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png";
  img1.alt = "Squirtle 1";

  const img2 = document.createElement("img");
  img2.src =
    "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png";
  img2.alt = "Squirtle 2";

  section.appendChild(h2);
  section.appendChild(div);
  div.appendChild(img1);
  div.appendChild(img2);
  section.appendChild(p);

  document.querySelector("main").appendChild(section);
}

function characteristics() {
  const section = document.createElement("section");
  section.id = "caracteristicas";
  section.ariaLabel = "caracteristicas-label";

  const h2 = document.createElement("h2");
  h2.id = "caracteristicas-label";
  h2.textContent = "Características";

  const p = document.createElement("p");
  p.textContent =
    " Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.";

  section.appendChild(h2);
  section.appendChild(p);

  document.querySelector("main").appendChild(section);
}

function curiosities() {
  const section = document.createElement("section");
  section.id = "curiosidades";
  section.ariaLabel = "curiosidades-label";

  const h2 = document.createElement("h2");
  h2.id = "curiosidades-label";
  h2.textContent = "Curiosidades";

  const ul = document.createElement("ul");

  const curiosities = [
    { text: "Squirtle é um dos Pokémon mais populares e adoráveis." },
    {
      text: `Seu nome deriva das palavras "squirrel" (esquilo) e "turtle"(tartaruga).`,
    },
    {
      text: "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.",
    },
  ];

  curiosities.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.text;
    ul.appendChild(li);
  });

  section.appendChild(h2);
  section.appendChild(ul);

  document.querySelector("main").appendChild(section);
}

function article() {
  const article = document.createElement("article");
  article.id = "artigo-squirtle";
  article.ariaLabel = "artigo-squirtle-label";

  const h2 = document.createElement("h2");
  h2.id = "artigo-squirtle-label";
  h2.textContent = "Squirtle: O Amigo Aquático";

  article.appendChild(h2);

  const paragraphs = [
    {
      text: "Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.",
    },
    {
      text: "Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.",
    },
    {
      text: "Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.",
    },
  ];

  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph.text;
    article.appendChild(p);
  });

  document.querySelector("main").appendChild(article);
}

function additionalResources() {
  const section = document.createElement("section");
  section.id = "recursos";
  section.ariaLabel = "recursos-label";

  const h2 = document.createElement("h2");
  h2.id = "recursos-label";
  h2.textContent = "Recursos Adicionais";

  section.appendChild(h2);

  const ul = document.createElement("ul");
  section.appendChild(ul);

  const resources = [
    {
      text: "Pokédex - Squirtle",
      href: "https://www.pokemon.com/br/pokedex/squirtle",
      target: "_blank",
    },
    {
      text: "Bulbapedia - Squirtle",
      href: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
      target: "_blank",
    },
  ];

  resources.forEach((resource) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = resource.text;
    a.href = resource.href;
    a.target = resource.target;

    li.appendChild(a);
    ul.appendChild(li);
  });

  document.querySelector("main").appendChild(section);
}

function evolution() {
  const section = document.createElement("section");
  section.id = "evolucao";
  section.areaLabel = "evolucao-label";

  const h2 = document.createElement("h2");
  h2.id = "evolucao-label";
  h2.textContent = "Evoluções";

  section.appendChild(h2);

  const ul = document.createElement("ul");
  section.appendChild(ul);

  const evolutions = [
    {
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      alt: "Squirtle",
      figcaption: "1. Squirtle",
    },
    {
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
      alt: "Wartortle",
      figcaption: "2. Wartortle",
    },
    {
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
      alt: "Blastoise",
      figcaption: "3. Blastoise",
    },
  ];

  evolutions.forEach((evolution) => {
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    img.src = evolution.src;
    img.alt = evolution.alt;
    figcaption.textContent = evolution.figcaption;

    li.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    ul.appendChild(li);
  });

  document.querySelector("main").appendChild(section);
}

function footer() {
  const footer = document.querySelector("footer");

  const p = document.createElement("p");
  p.textContent = `© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.`;
  p.ariaLabel = "Copyright";

  footer.appendChild(p);

  const paragraphs = [
    {
      text: "Voltar para o topo",
      href: "#header",
    },
    {
      text: "Contato via e-mail",
      href: "mailto:contato@squirtlepage.com",
    },
    {
      text: "Telefone (55) 5555-5555",
      href: "tel:+5555555555",
    },
  ];

  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.textContent = paragraph.text;
    a.href = paragraph.href;

    p.appendChild(a);
    footer.appendChild(p);
  });
}
