import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './hero.css'

import ilha3 from './assets/ilha3.webp';

import aldeia1 from './assets/aldeia1.jpg';

import betocarrero1 from './assets/betocarrero1.webp';

import Card from './components/Card';
import { Pagination } from "swiper/modules";

function Hero() {
  const links = {
    ilha: "https://sacola.pagbank.com.br/3a68665f-ddb0-4bcf-901d-643f2fb6dca2",
    aldeia: "https://sacola.pagbank.com.br/b358053b-2f44-4a50-bc67-c4d5e08f11fb",
    beto: "https://api.whatsapp.com/send?phone=5521964667529&text=Ol%C3%A1,%20Gostaria%20de%20reservar%20Beto%20Carrero%20+%20Balne%C3%A1rio%20Cambori%C3%BA."
  }

  return (
    <div className="md:px-20 px-7 font-poppins lg:px-40 py-10 bg-gradient-to-br from-green-50 to-blue-50" id="hero">
      <div className="font-bold text-2xl md:text-left text-center pb-2 sm:pb-0">Seu próximo destino está aqui!</div>
      <div className="md:text-left text-center text-2xl">Somos a Rota Única Viagens, uma agência especializada ​em proporcionar experiências inesquecíveis para quem ​ama viajar! Oferecemos pacotes de viagens ​personalizados e excursões saindo do Rio de Janeiro para ​destinos incríveis em todo o Brasil.</div>
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        pagination={true}
        modules={[Pagination]}
        className='py-10'
        breakpoints={
          {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1440: { slidesPerView: 3 }
          }}
      >

        <SwiperSlide>
          <Card
            name="Ilha Grande"
            date="15/12/24"
            img={ilha3}
            buy={links.ilha}
            parcelas={"Em até 3x no cartão"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Aldeia Das Águas"
            date="18/01/25"
            img={aldeia1}
            buy={links.aldeia}
            parcelas={"Em até 4x ou 10x"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Beto Carrero"
            date="17/06/25"
            img={betocarrero1}
            buy={links.beto}
            parcelas={"A consultar"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero;
