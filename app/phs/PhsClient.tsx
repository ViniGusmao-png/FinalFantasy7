'use client';

import Image from "next/image";
import { useState } from "react";

interface Character {
  name: string;
  img: string;
  level?: number;
  hp?: number;
  mp?: number;
}

interface PhsClientProps {
  team: Character[];
  characters: Character[];
}

export default function PhsClient({ team, characters }: PhsClientProps) {
  const [selectedTeamMember, setSelectedTeamMember] = useState<Character | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <div className="bg-black min-h-screen flex flex-col relative items-center justify-center gap-0.5">
      <div className="border-5 rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[65%] h-[10vh]">
      </div>
      <div className="flex flex-row w-[65%] gap-0.5">
        <div className="flex flex-col justify-center items-center gap-10 border-5 rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[31%] h-[80vh]">
          {team.map((character) => (
            <div
              key={character.name}
              onClick={() => setSelectedTeamMember(character)}
              className={`cursor-pointer ${selectedTeamMember?.name === character.name ? 'border-4 border-yellow-400' : ''}`}
            >
              <Image src={character.img} alt={character.name} width={160} height={150} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 content-center justify-center p-6 border-5 rounded-md border-[#D7D7D7] bg-linear-to-br from-[#0054AC] to-[#010030] w-[69%] h-[80vh]">
          {characters.map((character) => (
            <div
              key={character.name}
              onClick={() => setSelectedCharacter(character)}
              className={`flex justify-center cursor-pointer ${selectedCharacter?.name === character.name ? 'border-4 border-yellow-400' : ''}`}
            >
              <Image src={character.img} alt={character.name} width={160} height={150} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}