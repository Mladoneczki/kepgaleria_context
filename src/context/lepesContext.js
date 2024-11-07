import { createContext, useState } from "react";
import { lista } from "../components/adatok";

export const KattContext = createContext("");
export const KattProvider = ({ children }) => {
  const [index,setIndex]=useState(0)
   
  function balraLep(){
      /* index értékét egyel csökkentjük */
  }
  function jobbraLep(){
      /* index értékét növeljük */
      let sv=index+1
      if (sv>=lista.length){
          sv=0
      }
      setIndex(sv)
  }
  function katt(id){
      setIndex(id)
  }
  return (
    <KattContext.Provider
      value={{lista, index,jobbraLep,balraLep, katt}}
    >
      {children}
    </KattContext.Provider>
  );
};
