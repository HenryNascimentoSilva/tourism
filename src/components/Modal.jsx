import React from 'react';
import ReactDOM from 'react-dom';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Modal({ img1, img2, img3, isOpen, onClose, text}) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white max-w-xl rounded-lg w-full lg:flex lg:max-w-4xl">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide><img className='h-48 w-full bg-cover rounded-t lg:rounded-l' src={img1} /></SwiperSlide>
          <SwiperSlide><img className='h-48 w-full bg-cover rounded-t lg:rounded-l' src={img2} /></SwiperSlide>
          <SwiperSlide><img className='h-48 w-full bg-cover rounded-t lg:rounded-l' src={img3} /></SwiperSlide>
        </Swiper>
        <div>
          <div className='p-4 pb-1 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fuga dolore vitae corporis pariatur facilis autem! Nulla quaerat voluptate, porro possimus laborum aperiam nesciunt exercitationem! Illo quas at ipsam magnam.</div>
          <div className='grid lg:grid-cols-2'>
            <button
              onClick={onClose}
              className="m-4 mt-1 lg:m-4 py-2 px-4 font-bold bg-red-500 text-white rounded hover:bg-red-600"
            >
              Fechar
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 mt-0 lg:mt-4 py-2 px-4 rounded">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') // Certifique-se de que este elemento existe no HTML
  );
}

export default Modal;
