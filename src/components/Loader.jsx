import {PulseLoader} from "react-spinners";

import  Styles from './Loader.module.css'

function Loader() {
    return (
        <div className={Styles.spinner}>
            <PulseLoader color="red" />

        </div>

    )
}

export default Loader
