import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { getItemInfoState } from "../feature/itemInfo.reducer";

const useItemDescription = (imageUrl: string) => {
    const [ desc, setDesc ] = useState<{name: string, description: string}>({name: "", description: ""});
    const { data: itemInfo } = useAppSelector(getItemInfoState);

    useEffect(()=>{
        try{
            if(imageUrl !== ""){
                const urls = imageUrl.split("/");
                let fileName = urls[urls.length - 1];
                fileName = fileName.replace(".png", "");
                setDesc({
                    name: itemInfo[fileName].name, description: itemInfo[fileName].description
                })
            }
        }catch{
            setDesc({
                name: "", description: ""
            })
        }
    }, [imageUrl, itemInfo]);

    return desc;
};
export default useItemDescription;
