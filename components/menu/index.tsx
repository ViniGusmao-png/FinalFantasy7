import { useRouter } from 'next/navigation'

export default function Menu() {
    const router = useRouter()
    return(
        <div className="py-5 flex flex-col items-center justify-between border-5 rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030]  w-[200] h-[60vh] relative">
            <div className="flex flex-col gap-3">
                <button className="text-3xl text-white" onClick={() => router.push("/item")}>Item</button>
                <button className="text-3xl text-white" onClick={() => router.push("/magic")}>Magic</button>
                <button className="text-3xl text-white" onClick={() => router.push("/materia")}>Materia</button>
                <button className="text-3xl text-white" onClick={() => router.push("/equip")}>Equip</button>
                <button className="text-3xl text-white" onClick={() => router.push("/status")}>Status</button>
                <button className="text-3xl text-white" onClick={() => router.push("/order")}>Order</button>
                <button className="text-3xl text-white" onClick={() => router.push("/limit")}>Limit</button>
                <button className="text-3xl text-white" onClick={() => router.push("/phs")}>PHS</button>

            </div>

            <div>
                <button className="text-3xl text-white">Save</button>
            </div>

        </div>
    )
}