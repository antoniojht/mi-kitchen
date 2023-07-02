/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import Link from 'next/link';
import { useRef } from 'react';
import Search from './Search';

export default function Header() {
  const menuToggleRef = useRef(null);

  const handleItemClick = () => {
    menuToggleRef.current.checked = false;
  };

  return (
    <header className="h-16 bg-slate-50 drop-shadow-lg flex items-center justify-center px-8 relative z-50">

      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" ref={menuToggleRef} />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
        </label>

        <ul className="menu__box">
          <li><Search className="menu__item" /></li>
          <li onClick={handleItemClick}><Link className="menu__item" href="/categories">Categorías</Link></li>
          <li onClick={handleItemClick}><Link className="menu__item" href="/recipes">Recetas</Link></li>
          {/* <li><Link className="menu__item" href="#">Utensilios</Link></li> */}
        </ul>
      </div>

      <Link href="/">
        <b className="font-extrabold">mi</b>
        Kitchen
      </Link>
    </header>
  );
}
