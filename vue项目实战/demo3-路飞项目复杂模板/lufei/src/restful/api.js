import Axios from 'axios'

export function categoryList(utl){
   return Axios.get(url).then(res=>res.data)
}
