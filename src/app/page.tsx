import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-wrap absolute">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
