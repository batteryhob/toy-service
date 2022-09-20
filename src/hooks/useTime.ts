import { useEffect, useState } from "react";

const useTime = (targetTime: number) => {
    const [readableTime, setReadableTime] = useState("");

    const getReadableTimeString = (targetDate: number) => {
        const minute = Math.floor(targetDate/60);
        const rest_seconds = targetDate%60;
        return `${minute}분 ${rest_seconds}초`
    };

    useEffect(() => {
        setReadableTime(getReadableTimeString(targetTime));
    }, [targetTime]);

    return readableTime;
};
export default useTime;
