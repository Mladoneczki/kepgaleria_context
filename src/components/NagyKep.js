import { useContext } from "react"
import { KattContext } from "../context/lepesContext"

export default function NagyKep(props) {
    const {jobbraLep}=useContext(KattContext)
    const {balraLep}=useContext(KattContext)

  
    
    return <>
    <button className="button-balra"  onClick={()=>{balraLep()}}>◀</button>
    <img onClick={()=>{jobbraLep()}} className="Nagy" src={props.kep.link} alt={props.kep.leiras} />
    <button className="button-jobbra"  onClick={()=>{jobbraLep()}}>▶</button>

    </>
    
};
