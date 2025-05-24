import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useLoading } from '../../context/LoadingContext/LoadingContext';
import './loader.scss';

const Loader = () => {

    const { loading, setLoading } = useLoading();

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "#57a585",

    };


    if (loading) {

        return (
            <div className='loader-wrapper'>
                <ScaleLoader
                    color={"#f9bd00"}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    } else {
        return null;
    }

}

export default Loader