import { Route, Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import CeoDetails from './CeoDetails'
import CeoDetailsAsync from './CeoDetailsAsync';

const CeoList = () => {
    // ceos will be saved in state. setCeos is the function/method we will call to save data to state.
    const [ceos, setCeos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const ceos = await _fetchData();
            setCeos(ceos);
        })();
    }, [setCeos])

    const _fetchData = async () => {
        const url = "http://127.0.0.1:3000/";
        const response = await fetch(url).then(response => response.json());
        return response;
    }
    return (
        <>
            {!!ceos.length ? (
                <>
                    <Route exact path="/">
                        <ul>
                            {ceos.map((ceo, index) => (
                                <li key={index}>
                                    <Link to={`/ceo/${ceo.slug}`}>
                                        {ceo.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Route>
                    <Route path="/ceo/:ceo_slug">
                        {/* <CeoDetails
                        ceoList={ceos}
                        /> */}
                        <CeoDetailsAsync/>
                        <button type="button" onClick={() => history.goBack()}>Go Home</button>
                    </Route>
                </>
            ) : (
                <p>Loading CEOs from API...</p>
            )}
        </>
    )
};

export default CeoList;