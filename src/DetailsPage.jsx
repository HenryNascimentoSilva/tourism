import { useNavigate, useParams } from "react-router-dom";
import imageData from './components/imageData';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Nav from "./Nav";
import Footer from "./Footer";

function DetailsPage() {
  // o nome que vai ser usado para roteamento
  const { name } = useParams();
  // navegacao para a janela principal
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  }

  // conteudo individual de cada card
  const { img1, img2, img3, text } = imageData[name] || {};

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center min-h-screen font-poppins bg-gradient-to-br from-green-50 to-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl w-full bg-slate-100 md:p-8 rounded-lg shadow-lg">
          <div className="w-full">
            <Swiper autoplay={{ delay: 2500 }} modules={[Autoplay]}>
              <SwiperSlide>
                <img className="w-full md:h-96 h-48 object-cover md:rounded-lg rounded-t" src={img1} alt={`${name} img1`} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full md:h-96 h-48 object-cover md:rounded-lg rounded-t" src={img2} alt={`${name} img2`} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full md:h-96 h-48 object-cover md:rounded-lg rounded-t" src={img3} alt={`${name} img3`} />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-col justify-between text-lg leading-relaxed p-4 md:rounded-xl">
            <div>
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="mb-4">
                {text}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mt-4 md:mt-0">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={goToHome}>
                Fechar
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailsPage;
