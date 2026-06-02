export default function Menu() {
    return(
        <div className="py-5 flex flex-col items-center justify-between border-5 rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030]  w-[200] h-[60vh] relative">
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl text-white">Item</h2>
                <h2 className="text-3xl text-white">Magic</h2>
                <h2 className="text-3xl text-white">Materia</h2>
                <h2 className="text-3xl text-white">Equip</h2>
                <h2 className="text-3xl text-white">Status</h2>
                <h2 className="text-3xl text-white">Order</h2>
                <h2 className="text-3xl text-white">Limit</h2>
            </div>

            <div>
                <h2 className="text-3xl text-white">Save</h2>
            </div>

        </div>
    )
}