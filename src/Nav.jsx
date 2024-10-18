import { useState } from "react";
import logo from './assets/logo.png';

function Nav() {

  let Links = [
    { name: "Inicio", href: "/" },
    { name: "Próximas Excursões", href: "#" },
    { name: "Contato", href: "https://api.whatsapp.com/message/7FZIY7DHMVNSA1?autoload=1&app_absent=0" },
  ]

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 font-poppins z-[1000]">
      <div className="md:flex items-center justify-between bg-slate-100 py-4 md:px-14 lg:px-20 px-7">
        <a href="#">
          <div className="font-bold text-1xl flex items-center cursor-pointer text-gray-800">
            <img src={logo} className="w-6 rounded-full mr-2" alt="logo" />
            Rota Unica Viagens
          </div>
        </a>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center font-semibold md:pb-0 absolute bg-slate-100 md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10' : 'top-[-480px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-1xl md:my-0 my-7">
                <a href={link.href} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Nav;