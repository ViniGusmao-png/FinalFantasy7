import { getTeam } from "../services/team";
import { getCharacters } from "../services/characters";
import PhsClient from "./PhsClient";

export default async function Phs() {
  const data = await getTeam();
  const team = data[0].team;
  const characters = await getCharacters(data[0].team.map((c: any) => c.name).join(','));

  return <PhsClient team={team} characters={characters} />;
}