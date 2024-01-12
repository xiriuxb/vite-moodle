import { useState } from "react";
import { Link } from "react-router-dom";
import "./courses.css";

type TMenuItem = {
  description: string;
  link?: string;
};

export function OrderByComponent({
  title,
  items,
}: {
  title: string;
  items: TMenuItem[];
}) {
  const [showItems, setShowItems] = useState(false);
  const hanldeClick = () => {
    setShowItems((val) => !val);
  };
  return (
    <div className="px-2">
      <button
        className="flex items-center justify-between border-[1px] border-b-2 bg-indigo-400 rounded-md text-slate-200 font-bold border-b-indigo-950 px-2 py-3 w-full"
        onClick={hanldeClick}
      >
        <div>
          {title}
          {": Por defecto"}
        </div>
        <div className="plus-span">
          <div
            className={`m-2 h-[3px] w-[17px] rounded-lg origin-center bg-slate-200 transition-all duration-300 ${
              !showItems ? "rotated" : ""
            }`}
          ></div>
          <div className="m-2 h-[3px] w-[17px] rounded-lg bg-slate-200"></div>
        </div>
      </button>
      <div
        className={`border-x-[1px] ${showItems ? "" : "hidden"} transition-all`}
      >
        <ul>
          {items.map((it: TMenuItem) => {
            return (
              <li>
                <Link
                  className="block py-2 hover:bg-indigo-100"
                  to={`${it.link}`}
                >
                  {it.description}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
