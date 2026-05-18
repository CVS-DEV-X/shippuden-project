const dados = {
  dark: {
    img: "./assets/sasuke.png",
    alt: "foto sasuke",
    nome: "Uchiha Sasuke",
    links: [
      { texto: "Inscreva-se no clã Uchiha", href: "#", onclick: "mensagemErro()" },
      { texto: "Sobre mim.", href: "https://naruto.fandom.com/pt-br/wiki/Sasuke_Uchiha" },
      { texto: "A história por trás da tragédia do meu clã.", href: "https://www.youtube.com/watch?v=x3nWM73Fzqk" },
      { texto: "Meu Objetivo.", href: "https://www.youtube.com/watch?v=DjunWIxFqCM" },
    ]
  },
  light: {
    img: "./assets/naruto.jpg",
    alt: "foto naruto",
    nome: "Uzumaki Naruto",
    links: [
      { texto: "Inscreva-se no clã Uzumaki", href: "#", onclick: "mensagemErro()" },
      { texto: "Sobre mim.", href: "https://naruto.fandom.com/pt-br/wiki/Naruto_Uzumaki" },
      { texto: "A história do ninja que nunca desistiu.", href: "https://www.youtube.com/watch?v=plg5o9khiJk" },
      { texto: "Meu Objetivo.", href: "https://www.youtube.com/watch?v=FvVU-At8iA8" },
    ]
  }
}

function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains('light')) {
    html.classList.remove('light')
    atualizarPerfil('dark')
  } else {
    html.classList.add('light')
    atualizarPerfil('light')
  }
}

function atualizarPerfil(modo) {
  const { img, alt, nome, links } = dados[modo]

  document.getElementById('profile-img').src = img
  document.getElementById('profile-img').alt = alt
  document.getElementById('profile-name').textContent = nome

  const ids = ['link1', 'link2', 'link3', 'link4']
  ids.forEach((id, i) => {
    const el = document.getElementById(id)
    el.textContent = links[i].texto
    el.href = links[i].href
    if (links[i].onclick) {
      el.setAttribute('onclick', links[i].onclick)
    } else {
      el.removeAttribute('onclick')
    }
  })
}

function mensagemErro() {
  alert("Você não pode se inscrever neste clã!")
}