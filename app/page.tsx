import Character from "@/components/character";
import Menu from "@/components/menu";
import { getTeam } from "./services/team";

export default async function FF7Menu() {
  const data = await getTeam();
  const team = data[0].team;

  return (
    <div className="bg-black min-h-screen flex relative items-center justify-center">
      <div className="border-10 rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[75%] h-[90vh]">
        <div>
          {team.map((character: any) => (
            <Character
              key={character.name}
              name={character.name}
              level={character.level}
              hp={character.hp}
              mp={character.mp}
              nextlevel={character.nextlevel}
              limitelevel={character.limitelevel}
              img={character.img}
              
            />
          ))}
        </div>

        <div className="flex absolute right-[10%] top-[1vh]">
          <Menu />
        </div>
      </div>
    </div>
  );
}