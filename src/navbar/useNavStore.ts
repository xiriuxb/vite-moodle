import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleSideBarVisibility } from "../store/nav/nav.slice";

export const useNavStore = () => {
  const { isSideVisible } = useSelector((state: RootState) => state.nav);
  const dispatch = useDispatch();

  const toggleSideBar = (isVisible:boolean)=>{
    dispatch(toggleSideBarVisibility(isVisible));
  }

  return {
    isSideVisible,
    toggleSideBar
  }
};
