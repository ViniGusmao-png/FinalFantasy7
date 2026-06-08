import Items from "@/components/item";
import Image from "next/image";

export default function Item(){
    return(
       <div className="bg-black min-h-screen flex flex-col relative items-center justify-center gap-0.5">
             <div className="px-5 border-10 flex flex-row items-center rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[65%] h-[10vh] gap-40 ">
                <h2 className="text-3xl text-white">Use</h2>
                <div className=" flex flex-row gap-10">
                    <h2 className="text-3xl text-white">Arrange</h2>
                    <h2 className="text-3xl text-white">Key Items</h2>
                </div>
             </div>
             <div className="border-10 rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[65%] h-[10vh] "> 
             </div>
             <div className="flex justify-end-safe border-10 rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[65%] h-[70vh] ">
                <Items/>

             </div>

             <div className="absolute right-228 top-60.5 flex flex-col  bottom-0 border-10 outline-2 outline-black rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[35%] h-[70vh] ">
                <div className="my-15 mx-25 flex flex-col gap-6">
                                <div className="flex flex-row gap-5">
                                    <div>
                                        <Image src={"/assets/avatar1.png"} alt="personagem" width={150} height={150}/>
                                    </div>{/*foto*/}
                                    <div className="">{/*nome*/}
                                        <h2 className="text-xl text-white">Cloud</h2>
                                        <div className="flex flex-col gap-3">{/*status*/}
                                            <div className="flex gap-3 flex-row ">
                                                <h2 className="text-xl text-[#06E2E5]">LV</h2>
                                                <h2 className="text-xl text-white"> 99</h2>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <h2 className="text-xl text-[#06E2E5]">HP</h2>
                                                <div className="border-b-4 border-blue-600">
                                                    <h2 className="text-xl text-white"> 9999/9999</h2>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <h2 className="text-xl text-[#06E2E5]">MP</h2>
                                                <div className="flex flex-1 border-b-4 border-green-600 justify-end">
                                                    <h2 className="text-xl text-white">999/999</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div>
                                        <Image src={"/assets/avatar1.png"} alt="personagem" width={150} height={150}/>
                                    </div>{/*foto*/}
                                    <div className="">{/*nome*/}
                                        <h2 className="text-xl text-white">Cloud</h2>
                                        <div className="flex flex-col gap-3">{/*status*/}
                                            <div className="flex gap-3 flex-row ">
                                                <h2 className="text-xl text-[#06E2E5]">LV</h2>
                                                <h2 className="text-xl text-white"> 99</h2>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <h2 className="text-xl text-[#06E2E5]">HP</h2>
                                                <div className="border-b-4 border-blue-600">
                                                    <h2 className="text-xl text-white"> 9999/9999</h2>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <h2 className="text-xl text-[#06E2E5]">MP</h2>
                                                <div className="flex flex-1 border-b-4 border-green-600 justify-end">
                                                    <h2 className="text-xl text-white">999/999</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <div>
                                        <Image src={"/assets/avatar1.png"} alt="personagem" width={150} height={150}/>
                                    </div>{/*foto*/}
                                    <div className="">{/*nome*/}
                                        <h2 className="text-xl text-white">Cloud</h2>
                                        <div className="flex flex-col gap-3">{/*status*/}
                                            <div className="flex gap-3 flex-row ">
                                                <h2 className="text-xl text-[#06E2E5]">LV</h2>
                                                <h2 className="text-xl text-white"> 99</h2>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <h2 className="text-xl text-[#06E2E5]">HP</h2>
                                                <div className="border-b-4 border-blue-600">
                                                    <h2 className="text-xl text-white"> 9999/9999</h2>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <h2 className="text-xl text-[#06E2E5]">MP</h2>
                                                <div className="flex flex-1 border-b-4 border-green-600 justify-end">
                                                    <h2 className="text-xl text-white">999/999</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
             </div>

            <div className="absolute right-84.5 top-11.5 flex justify-center items-center bottom-0 border-10 outline-2 outline-black rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[10%] h-[10vh] ">
                <h2 className="text-2xl text-white ">Item</h2>
             </div>

           </div>
    )
}