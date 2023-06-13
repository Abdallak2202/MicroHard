import '@/styles/globals.css'
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navBar/navBar';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

   return(
  
       <>
       <div>
        <NavBar/>
        <Component
              {...pageProps}/>
        <Footer/>
       </div>
       
       </>

   )
}
