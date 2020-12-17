import {useState} from 'react';

const useClock = () => {
    const [time, setTime] = useState("");
    const [ampm, setAmpm] = useState("");

    const updateTime = () => {
        let dateInfo = new Date();

        let hour = dateInfo.getHours();
        if (hour > 12 ) {
            hour = hour - 12;
        } else if(hour === 0) {
            hour = 12;
        }

        let minutes = dateInfo.getMinutes();
        minutes = minutes < 10 ? parseInt('0' + minutes) : minutes;

        let seconds = dateInfo.getSeconds();
        seconds = seconds < 10 ? parseInt('0' + seconds) : seconds;

        let ampm = hour >= 12 ? 'PM' : 'AM';

        setAmpm(ampm);
        setTime(`${hour}:${minutes}:${seconds}`);
    };

    setInterval(()=>{ updateTime()}, 1000);

    return [time, ampm];
};

export default useClock;
