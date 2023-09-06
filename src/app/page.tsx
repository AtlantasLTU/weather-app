import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export default function Home() {
  return (
    <div id="main" className="w-screen h-screen first-letter:flex flex-wrap absolute">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}