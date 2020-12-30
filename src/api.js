import axios from "axios";

let publicKey = '57c327138f7be5ad4b01a410787dbdac';
let hash = 'e83c933e1c27a52ebef339e1dfaa7b46';


const  getHeros = async (limit = 50) => {
    let url = `http://gateway.marvel.com/v1/public/characters?ts=987654&apikey=${publicKey}&hash=${hash}&limit=${limit}`;
    try {
        const res = await axios.get(url);
        return res.data.data.results;
    } catch (error) {
        console.log(error);
    }
}

export default {
    getHeros
}