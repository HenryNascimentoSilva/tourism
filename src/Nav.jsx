import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionamento
import logo from './assets/logo.png';

function Nav() {
  const navigate = useNavigate(); // Hook para redirecionar
  const Links = [
    {
      name: "Próximas Excursões",
      href: "#hero", // o id da seção de excursões
    },
    { name: "Contato", href: "https://api.whatsapp.com/message/7FZIY7DHMVNSA1?autoload=1&app_absent=0" },
  ];

  const [open, setOpen] = useState(false);

  const handleClick = (href) => {
    setOpen(false); // Fechar o menu ao clicar em um link
    if (href === "#hero") {
      if (window.location.pathname === "/") {
        // Se já estiver na página principal, rola suavemente
        const section = document.querySelector(href);
        section?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Redireciona para a página principal e rola depois
        navigate("/");
        setTimeout(() => {
          const section = document.querySelector(href);
          section?.scrollIntoView({ behavior: "smooth" });
        }, 500); // Atraso para esperar o redirecionamento
      }
    } else {
      // Para links externos (ex: contato)
      window.location.href = href;
    }
  };

  return (
    // Navbar
    <div className="shadow-md w-full fixed top-0 left-0 font-poppins z-[1000]">
      <div className="md:flex items-center justify-between bg-slate-100 py-4 md:px-14 lg:px-20 px-7">
        <a href="/">
          {/* LogoMarca */}
          <div className="font-bold text-1xl flex items-center cursor-pointer text-gray-800">
            <img src={logo} className="w-6 rounded-full mr-2" alt="logo" />
            Rota Unica Viagens
          </div>
        </a>
        {/* Butão que altera de acordo com o estado do menu "hamburguer", caso esteja aberto o ícone vira um "x" e fechado vira um "hamburguer" */}
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center font-semibold md:pb-0 absolute bg-slate-100 md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-10" : "top-[-480px]"
            }`}
        >
          {/* links do navbar */}
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-1xl md:my-0 my-7">
              <button
                onClick={() => handleClick(link.href)}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
