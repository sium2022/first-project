import Image from "next/image";
import {MyHeader} from "@/component/header";
import {MainBody} from "@/component/main-body";
import {MyFooter} from "@/component/footer";

export default function Home() {
  return (
    <main>
      <MyHeader/>
      <MainBody/>
      <MyFooter/>
    </main>
  );
}
