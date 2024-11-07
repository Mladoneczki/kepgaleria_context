import { useContext } from "react"
import { KattContext } from "../context/lepesContext"
export default function KisKep(props) {
    const {katt}=useContext(KattContext)
    return <img onClick={()=>{katt(props.index)}} src={props.kep.link} alt={props.kep.leiras} />
    
};
