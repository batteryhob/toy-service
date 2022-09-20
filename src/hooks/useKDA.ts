import { useEffect, useState } from "react";

const useKDA = ({kills, assists, deaths}:{kills: number, assists: number, deaths: number}) => {
    const [ kda, setKDA ] = useState<string>("0.00");
    useEffect(()=>{
        const computed = ((kills + assists) / deaths).toFixed(2);
        setKDA(computed)
    }, [kills, assists, deaths]);
    return kda;
};
export default useKDA;
