import { FooterComponent } from "../footer/FooterComponent";
import { NavBar } from "../navbar/NavBar";
import { SideBar } from "../navbar/components/SideBar";
import { MainRouter } from "../router/MainRouter";

export function HomePage(){
    return(
        <>
        <SideBar/>
        <NavBar></NavBar>
          <MainRouter />
        <FooterComponent />
        </>
    )
}