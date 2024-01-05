import { useNavStore } from "../useNavStore";
import './sideBarBtn.css'

export const SideBarButtonComponent = () =>{
    const {toggleSideBar, isSideVisible} = useNavStore();
    return(
        <button
          onClick={() => {
            toggleSideBar(!isSideVisible);
          }}
          className="h-4/6 md:hidden transparent w-9 px-1 py-1"
          id="toggle-nav-btn"
        >
          <span className={`bg-slate-200 h-[3px] block my-[5px] rounded-sm ${isSideVisible?'first':''}`}></span>
          <span className={`bg-slate-200 h-[3px] block my-[5px] rounded-sm ${isSideVisible?'second':''}`}></span>
          <span className={`bg-slate-200 h-[3px] block my-[5px] rounded-sm ${isSideVisible?'last':''}`}></span>
        </button>
    );
}