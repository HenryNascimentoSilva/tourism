import ilha1 from '../assets/ilha1.jpg';
import ilha2 from '../assets/ilha2.jpg';
import ilha3 from '../assets/ilha3.webp';

import aldeia1 from '../assets/aldeia1.jpg';
import aldeia2 from '../assets/aldeia2.webp';
import aldeia3 from '../assets/aldeia3.webp';

import beto1 from '../assets/betocarrero1.webp';
import beto2 from '../assets/betocarrero2.webp';
import beto3 from '../assets/betocarrero3.webp';

// Todos os props da pagina de detalhes
// toda vez que alterar um detalhe na pagina de detalhes alterar por aqui:
const imageData = {
  "Ilha Grande": {
    img1: ilha1,
    img2: ilha2,
    img3: ilha3,
    text: [
      "Venha curtir um dia inesquecível nas águas cristalinas da Ilha Grande com tudo incluído!",
      "Ônibus de ida e volta saindo de Nova Iguaçu",
      "Café da manhã servido no ônibus",
      "Churrasco na Embarcação",
      "Bebidas liberadas",
      "Pode levar sua bebida preferida",
      "Saída: 06:00 - Retorno: 18:00",
      "Crianças até 5 anos e 11 meses não pagam e vão no colo.",
      "De 6 a 10 anos: R$ 120 reais.",
      "A partir de 11 anos: Valor: R$ 180,00 (podendo parcelar em até 3x sem Juros)",
    ],
    link: "https://sacola.pagbank.com.br/3a68665f-ddb0-4bcf-901d-643f2fb6dca2"
  },

  "Aldeia Das Águas": {
    img1: aldeia1,
    img2: aldeia2,
    img3: aldeia3,
    text: [
      "Prepare-se para um dia inesquecível no maior ​parque aquático do Brasil! O Aldeia ​das Águas é famoso por ter o toboágua mais ​alto do mundo, e você não pode perder essa ​experiência incrível!",
      "Transporte executivo de ida e volta",
      "Café da manhã a bordo",
      "Ingresso para o parque",
      "Saídas: Caxias Shopping: 05:30h - Nova Iguaçu: 06:00h",
      "Crianças até 1 ano: Grátis",
      "De 6 anos: R$ 110,00 Parcelado no Pix ou ​Cartão",
      "A partir de 07 anos: R$ 180,00 à vista ou R$ ​200,00 parcelado em até 4x de R$ 50 no PIX ​ou até 10x no cartão de crédito"
    ],
    link: "https://sacola.pagbank.com.br/b358053b-2f44-4a50-bc67-c4d5e08f11fb"
  },

  "Beto Carrero": {
    img1: beto1,
    img2: beto2,
    img3: beto3,
    text: [
      "Venha viver momentos inesquecíveis no Beto Carrero World! o maior parque temático da América Latina! Uma viagem completa para você e sua família, com ​ hotel e café da manhã inclusos!",
      "Saída: 17 de julho de 2025",
      "Local: Caxias Shopping, Nova Iguaçu",
      "Hotel com café da manhã  em Balneário ​Camboriú",
      "18/07 Dia Livre em Balneário",
      "19/07 Dia de diversão no Parque",
      "Retorno: 20 de julho de 2025",
      "R$ 1500,00 por pessoa",
      "R$ 2800,00 por casal",
      "Crianças até 5 anos (no colo): consultar taxa",
      "De 6 a 12 anos: R$ 1350,00"
    ],
    link: "https://api.whatsapp.com/send?phone=5521964667529&text=Ol%C3%A1,%20Gostaria%20de%20reservar%20Beto%20Carrero%20+%20Balne%C3%A1rio%20Cambori%C3%BA."
  }
}

export default imageData;