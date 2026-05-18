import Image from "next/image";
import Hero from "../component/hero"
import { Intro } from "@/component/intro";
import SobreMi from "@/component/sobremi";
import Destinos from "@/component/destinos";
import FAQ from "@/component/faq";
import Footer from "@/component/footer";
import Testimonios from "@/component/testimonios";
import Information from "@/component/information";
import Blog from "@/component/blog";


export default function Home() {
  return (
    <div className="">
      <main className="">

<Hero/>
<Intro/>
<SobreMi/>
<Destinos/>
<Information/>
<Blog/>
<FAQ/>
<Testimonios/>
<Footer/>
      </main>
    </div>
  );
}
