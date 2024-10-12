import { Swiper, SwiperSlide } from 'swiper/react';

import cabofrio from './assets/cabofrio.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from './components/Card';

function Hero() {
  return (
    <div className="md:px-20 px-7 font-poppins lg:px-40">
      <div className="font-bold mt-10 text-2xl md:text-left text-center pb-2 sm:pb-0">Seu próximo destino está aqui!</div>
      <div className="md:text-left text-center text-2xl">Somos a Rota Única Viagens, uma agência especializada ​em proporcionar experiências inesquecíveis para quem ​ama viajar! Oferecemos pacotes de viagens ​personalizados e excursões saindo do Rio de Janeiro para ​destinos incríveis em todo o Brasil.</div>
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        breakpoints={
          {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1440: { slidesPerView: 3 }
          }}

        className='mySwiper'
      >

        <SwiperSlide>
          <Card
            name="Ilha Grande"
            date="15/12/24"
            img={cabofrio}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Aldeia Das Águas"
            date="18/01/25"
            img={cabofrio}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Beto Carrero"
            date="17/06/25"
            img={cabofrio}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero;