import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//if you know what prop you are passing you can destructure it as a parameter
const CeoDetails = () => {
    const { ceo_slug } = useParams();
    const [ ceo, setCeo ] = useState({});

    useEffect(() => {
        (async () => {
            const url = `http://127.0.0.1:3000/${ceo_slug}`
            const ceo = await fetch(url).then(response => response.json()); 
            setCeo(ceo);
        })();
    }, [setCeo, ceo_slug]);

    return (
        <p>{ceo.name} was CEO of Apple Computers, Inc. in {ceo.first_year_active}.</p>
    )

}

export default CeoDetails