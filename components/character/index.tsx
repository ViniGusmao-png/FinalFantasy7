import Image from "next/image";


interface Character{
    name?: string
    level?: number
    hp?: number
    mp?: number
    nextlevel?: number
    limitelevel?: number
    img: string
    materias?: [string]
}

export default function Character({name, level, hp, mp, nextlevel, limitelevel,img}: Character ){

    

    const nextLevelPercent = (nextlevel ?? 0) / 100 * 100;
    const limiteLevelPercent = (limitelevel ?? 0) / 100 * 100;


    return(
        <div className="my-15 mx-25 flex flex-row gap-30">
            <div>
                <Image src={img} alt="personagem" width={160} height={150}/>
            </div>{/*foto*/}
            <div className="">{/*nome*/}
                <h2 className="text-2xl text-white">{name}</h2>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 flex-row ">
                        <h2 className="text-2xl text-[#06E2E5]">LV</h2>
                        <h2 className="text-2xl text-white">{level}</h2>
                    </div>
                    <div className="flex flex-row gap-3">
                        <h2 className="text-2xl text-[#06E2E5]">HP</h2>
                        <div className="border-b-4 border-blue-600">
                            <h2 className="text-2xl text-white"> {hp}/{hp}</h2>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <h2 className="text-2xl text-[#06E2E5]">MP</h2>
                        <div className="flex flex-1 border-b-4 border-green-600 justify-end">
                            <h2 className="text-2xl text-white">{mp}/{mp}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-2">
                <div>{/*nivel*/}
                    <h2 className="text-2xl text-white">next level</h2>
                    <div className="ml-4 border-4 border-[#d7d7d7] h-9 w-70 bg-linear-to-b from-[#333333] to-[#6A6A6A]">
                        <div className="bg-linear-to-b from-[#7C3D3C] to-[#E6C1C0] h-7" style={{ width: `${nextlevel}%` }}/>
                    </div>
                </div>

                <div>{/*especial*/}
                    <h2 className="text-2xl text-white">Limit level 1</h2>
                    <div className="ml-4 border-4 border-[#D7D7D7] h-9 w-70 bg-linear-to-b from-[#333333] to-[#6A6A6A]">
  <div className="bg-linear-to-b from-[#5B5C17] to-[#E8EB8E] h-7" style={{ width: `${limitelevel}%` }}/>
</div>
                </div>
            </div>
        </div>
    )
}