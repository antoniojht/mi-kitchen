import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-16 bg-slate-50 drop-shadow-lg gap-3 flex items-center px-8">

      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li><Link className="menu__item" href="#">Buscador</Link></li>
          <li><Link className="menu__item" href="#">Categorias</Link></li>
          <li><Link className="menu__item" href="#">Recetas</Link></li>
          <li><Link className="menu__item" href="#">Utensilios</Link></li>
        </ul>
      </div>


      <Link href="/">
        <b className="font-extrabold">mi</b>Kitchen
      </Link>
    </header>
  )
}