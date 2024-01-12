import "./NavBar.css";
import menuItems from "./menuItems";
import { SearchInBarComponent } from "./components/SearchInBar";
import { SideBarButtonComponent } from "./components/SideBarButton";
import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <nav className="z-[100] flex justify-between fixed px-7 xl:px-36 min-h-14 w-full bg-indigo-700 text-base font-bold nav-shadow">
      <section className="flex w-1/4 md:w-1/3 min-w-fit">
        <Link className="block py-4" to="/">
          Business Logo
        </Link>
        <ul id="menuItems" className="px-2 hidden md:flex">
          {menuItems.map((e) => (
            <li
              className=" hover:bg-opacity-30 hover:bg-slate-600 "
              key={e.name}
            >
              <Link className="block py-4 px-5 capitalize" to={e.link}>
                {e.name}
                {e.name == "aula" && (
                  <span>
                    &nbsp;&nbsp;<i className="fas fa-external-link-alt"></i>
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex w-2/4 md:w-1/3 justify-center items-center">
        <SearchInBarComponent />
      </section>
      <section className="md:w-fit flex flex-row-reverse items-center">
        <ul id="authItems" className="hidden md:flex items-center">
          <li>
            <Link className="block py-4 px-5 capitalize" to="/auth/login">
              Ingrese
            </Link>
          </li>
          <li>
            <a
              className="block py-2 px-5 capitalize bg-slate-100 text-indigo-700 rounded-xl"
              href="/#registro"
            >
              Regístrese
            </a>
          </li>
        </ul>
        <SideBarButtonComponent />
      </section>
    </nav>
  );
}
