import { Swiper, SwiperSlide } from 'swiper/react';

import cabofrio from './assets/cabofrio.jpg';

import ilha1 from './assets/ilha1.jpg';
import ilha2 from './assets/ilha2.jpg';
import ilha3 from './assets/ilha3.webp';

import aldeia1 from './assets/aldeia1.jpg';
import aldeia2 from './assets/aldeia2.webp';
import aldeia3 from './assets/aldeia3.webp';

import betocarrero1 from './assets/betocarrero1.webp';
import betocarrero2 from './assets/betocarrero2.webp';
import betocarrero3 from './assets/betocarrero3.webp';

import 'swiper/css';
import 'swiper/css/pagination';
import Card from './components/Card';

function Hero() {
  return (
    <div className="md:px-20 px-7 font-poppins lg:px-40 py-10 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="font-bold text-2xl md:text-left text-center pb-2 sm:pb-0">Seu próximo destino está aqui!</div>
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
            img={ilha3}
            firstImage={ilha1}
            secondImage={ilha2}
            thirdImage={ilha3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Aldeia Das Águas"
            date="18/01/25"
            img={aldeia1}
            firstImage={aldeia1}
            secondImage={aldeia2}
            thirdImage={aldeia3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Beto Carrero"
            date="17/06/25"
            img={betocarrero1}
            firstImage={betocarrero1}
            secondImage={betocarrero2}
            thirdImage={betocarrero3}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero;
