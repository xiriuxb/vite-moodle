import { useEffect } from "react";
import { useNavStore } from "../useNavStore";
import menuItems from "../menuItems";
import { Link } from "react-router-dom";
export function SideBar() {
  const { isSideVisible, toggleSideBar } = useNavStore();

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    //768 because of tailwind responsive value for md:
      toggleSideBar(!!(window.innerWidth <= 768)&&isSideVisible);
  };

  return (
    <nav
      className={`flex fixed top-0 bottom-0 p-0 mt-14 font-bold sidebar ${
        !isSideVisible ? "translated" : ""
      }`}
    >
      <div className="z-10 w-64 h-[100vh] bg-slate-200 text-base text-indigo-700">
        <ul id="menuItems">
          {menuItems.map((e) => (
            <li className="border-b-[1px] border-indigo-700" key={e.name}>
              <Link className="w-full inline-block p-4 capitalize  hover:bg-indigo-700 hover:bg-opacity-10" to={e.link}>
                {e.name}
                {e.name == 'aula' && <span>&nbsp;<i className="fas fa-external-link-alt"></i></span>}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="py-2" id="authItems">
          <li className="p-1">
            <Link className="w-52 inline-block border-[1px] border-indigo-900 rounded-full py-3 hover:bg-indigo-200"  to="/auth/login">
                Ingrese
            </Link>
          </li>
          <li>
            <Link className="w-52 inline-block bg-indigo-700 text-slate-200 border-[1px] border-indigo-900 rounded-full py-3 hover:bg-indigo-600" to="/#registro">
                Regístrese
            </Link>
          </li>
        </ul>
      </div>
      {isSideVisible && (
        <div
          className="h-full absolute bg-black bg-opacity-45 sideBarBack"
          onClick={() => toggleSideBar(!isSideVisible)}
        >
          {" "}
        </div>
      )}
    </nav>
  );
}
