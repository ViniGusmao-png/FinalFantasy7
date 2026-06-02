'use client';

import Character from "@/components/character";
import Menu from "@/components/menu";

export default function FF7Menu() {
  
  return(
    //fundo preto
    <div className="bg-black min-h-screen flex relative items-center justify-center">
      <div className="border-5 rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[65%] h-[90vh] "> {/*camada azul*/}
          
          <div> {/*grid aonde vamos organizar a foto, nome e status */}
             <Character/>
             <Character/>
             <Character/>
          </div>

          <div className="flex absolute right-60 top-8 bottom-0">
            <Menu/>
          </div>
      </div>
    </div>
  );
}