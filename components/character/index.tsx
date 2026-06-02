import Image from "next/image";

export default function Character(){




    return(
        <div className="my-15 mx-25 flex flex-row gap-40">
            <div>
                <Image src={"/assets/avatar1.png"} alt="personagem" width={200} height={200}/>
            </div>{/*foto*/}
            <div className="">{/*nome*/}
                <h2 className="text-3xl text-white">Cloud</h2>
                <div className="flex flex-col gap-3">{/*status*/}
                    <div className="flex gap-3 flex-row ">
                        <h2 className="text-4xl text-[#06E2E5]">LV</h2>
                        <h2 className="text-4xl text-white"> 99</h2>
                    </div>
                    <div className="flex flex-row gap-3">
                        <h2 className="text-4xl text-[#06E2E5]">HP</h2>
                        <div className="border-b-4 border-blue-600">
                            <h2 className="text-4xl text-white"> 9999/9999</h2>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <h2 className="text-4xl text-[#06E2E5]">MP</h2>
                        <div className="flex flex-1 border-b-4 border-green-600 justify-end">
                            <h2 className="text-4xl text-white">999/999</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-2">
                <div>{/*nivel*/}
                    <h2 className="text-4xl text-white">next level</h2>
                    <div className="ml-4 border-4 border-[#d7d7d7] h-9 w-50 bg-linear-to-b from-[#333333] to-[#6A6A6A]">
                        <div className="bg-linear-to-b from-[#7C3D3C] to-[#E6C1C0] w-[80%] h-7"/>
                    </div>
                </div>

                <div>{/*especial*/}
                    <h2 className="text-4xl text-white">Limit level 1</h2>
                    <div className="ml-4 border-4 border-[#D7D7D7] h-9 bg-linear-to-b from-[#5B5C17] to-[#E8EB8E]">

                    </div>
                </div>
            </div>
        </div>
    )
}