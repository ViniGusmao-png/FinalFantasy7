import api from "./api";

export async function getCharacters(exclude?:string) {
   const response = await api.get("/characters",
    {params: { exclude}}
   )
   return response.data 
}