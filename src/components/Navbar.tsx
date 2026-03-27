import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-navbar">
      
      {/* Background */}
      <div className="backdrop-blur-md bg-blush/80 border-b border-gold/20">
        
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">

          {/* LOGO */}
          <div className="text-primary font-display text-xl tracking-tight">
            Appuge Care
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">

            <a href="#" className="text-primary text-sm tracking-wide hover:text-accent transition">
              Home
            </a>

            <a href="#" className="text-primary text-sm tracking-wide hover:text-accent transition">
              Services
            </a>

            <a href="#" className="text-primary text-sm tracking-wide hover:text-accent transition">
              About
            </a>

            <a href="#" className="text-primary text-sm tracking-wide hover:text-accent transition">
              Contact
            </a>

          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 shadow-md">
              Book Now
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-blush border-t border-gold/20 shadow-lg">
          
          <div className="flex flex-col px-6 py-6 space-y-5">

            <a href="#" className="text-primary">Home</a>
            <a href="#" className="text-primary">Services</a>
            <a href="#" className="text-primary">About</a>
            <a href="#" className="text-primary">Contact</a>

            <button className="bg-primary text-white py-3 rounded-full mt-4">
              Book Consultation
            </button>

          </div>
        </div>
      )}
    </header>
  )
}