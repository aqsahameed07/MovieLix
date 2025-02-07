import {Header} from './Header';
import {Footer} from './Footer';
import {Loading} from "./Loading";
import { Outlet, useNavigation } from 'react-router-dom';

export const Layout = ()=>{

  const navigation = useNavigation();
  if(navigation.state === "loading")
    return(<>
          <Loading/>
    </>);
    return (
      <>
         <Header/>
         <Outlet />
         <Footer/>
      </>
    );
}