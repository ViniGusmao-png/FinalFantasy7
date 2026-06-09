import api from "./api";

export async function getTeam(){
    const response = await api.get('/team');
    return response.data
}