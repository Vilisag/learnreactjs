import React, {useState, useEffect} from 'react';
import axios from 'axios';
import useClock from './useClock';

const ShowProvince = (props) => {
    const {listProvince} =  props;

    return (
        <div>
            {
                listProvince.map((province) => {
                    return (
                        <React.Fragment key={province.id}>
                            <ul>
                                <li>{province.postcode}</li>
                                <li>{province.name}</li>
                            </ul>
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
};

const Hooks = () => {
    const [listProvince, setlistProvince] = useState([]);
    const [time, ampm] = useClock();

    useEffect(() => {
        const getProviceApi = 'https://raw.githubusercontent.com/Vilisag/dvhcvn/master/dvhcvn.json';

        axios.get(getProviceApi)
            .then((res) => {
                setlistProvince(res.data.provinces);
            })
            .catch((err) => {
                console.log(err);
                alert('Can not connect to server.');
            });
    }, []);

    return (
        <>
            {time}
            <span>{ampm}</span> <hr />
            <b>Provinces:</b> <hr />
            <ShowProvince listProvince={listProvince} />
        </>
    )
}

export default Hooks;
