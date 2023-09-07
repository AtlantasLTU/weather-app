import dynamic from 'next/dynamic';
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export default function Home() {
  const DynamicDimensionsComponent = dynamic(() => import('./autoWH') as Promise<{default: React.ComponentType}>, {
    ssr: false,
  });

  return (
    <div>
      <DynamicDimensionsComponent>
        <Header/>
        <Main/>
        <Footer/>
      </DynamicDimensionsComponent>
    </div>
  )
}