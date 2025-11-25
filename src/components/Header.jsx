import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary text-white p-4 flex items-center justify-between relative">
      <h1 className="text-xl font-bold">Anam Urdu Primary School</h1>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav
        className={`absolute md:static bg-primary left-0 w-full md:w-auto p-4 md:p-0 transition-all
          ${open ? "top-16" : "top-[-300px]"} md:flex gap-6`}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
