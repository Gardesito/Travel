import Image from "next/image";
import Hero from "../component/hero"
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
