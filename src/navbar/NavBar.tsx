import "./NavBar.css";
import menuItems from "./menuItems";
import { SearchInBarComponent } from "./components/SearchInBar";
import { SideBarButtonComponent } from "./components/SideBarButton";
export function NavBar() {
  return (
    <nav className="flex justify-between fixed px-7 xl:px-36 min-h-14 w-full bg-indigo-700 text-base nav-shadow">
      <section className="flex w-1/4 md:w-1/3 min-w-fit">
        <a className="block py-4" href="/">
          Business Logo
        </a>
        <ul id="menuItems" className="px-2 hidden md:flex">
          {menuItems.map((e) => (
            <li
              className=" hover:bg-opacity-30 hover:bg-slate-600 "
              key={e.name}
            >
              <a className="block py-4 px-5 capitalize" href={e.link}>
                {e.name}
                {e.name == 'aula' && <span>&nbsp;&nbsp;<i className="fas fa-external-link-alt"></i></span>}
              </a>
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
            <a className="block py-4 px-5 capitalize" href="/">
              Ingrese
            </a>
          </li>
          <li>
            <a className="block py-2 px-5 capitalize bg-slate-100 text-indigo-700 rounded-xl" href="/#registro">
              Regístrese
            </a>
          </li>
        </ul>
        <SideBarButtonComponent />
      </section>
    </nav>
  );
}
