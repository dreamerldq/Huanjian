
import Axios from 'axios';
const api = 'http://apis.juhe.cn/cook/query?menu=%E7%BA%A2%E7%83%A7%E8%82%89&dtype=&pn=&rn=&albums=&=&key=e6a932d58f6d4e6525b3c31642a63bf2'


const getcaidan = (menu: string) => {
    Axios.get(`${api}?menu=${menu}`)
}
export {getcaidan}