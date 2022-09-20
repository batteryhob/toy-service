import { useEffect, useState } from "react";

import moment from "moment";

const useDate = (targetDate?: number) => {
    const [readableDate, setReadableDate] = useState("");

    const getReadableDateString = (targetDate: any) => {
        const target = moment(targetDate);
        const startOfToday = moment().startOf("day");
        const startOfTarget = moment(targetDate).startOf("day");
        const diff = startOfToday.diff(startOfTarget, "day");
        if (diff < 1) {
            return `${startOfToday.diff(startOfTarget, "hours")}시간 전`
        }
        if (diff < 7) {
            return `${diff}일 전`
        }
        return `${target.format("MMM D, YYYY")}`;
    };

    useEffect(() => {
        setReadableDate(getReadableDateString(targetDate));
    }, [targetDate]);

    return readableDate;
};
export default useDate;
