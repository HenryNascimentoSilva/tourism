function Modal({ isOpen, onChange, children }) {
  return (
    <div onClick={onChange} className={`
      fixed inset-0 flex justify-center items-center transition-colors
      ${isOpen ? "visible bg-black/20" : "invisible"}
      `} 
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`
        bg-white rounded-xl shadow p-6 transition-all
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal;