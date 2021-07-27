import { useParams } from 'react-router-dom';

//if you know what prop you are passing you can destructure it as a parameter
const CeoDetails = ({ceoList}) => {
    const { ceo_slug } = useParams();
    const ceo = ceoList.find((ceo) => {
        return ceo.slug === ceo_slug ? ceo : null;
    })

    return <p>{ceo.name} was CEO of Apple Computers, Inc. in {ceo.year}.</p>

}

export default CeoDetails