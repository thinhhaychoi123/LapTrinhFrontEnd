import React from "react"
import background from '../Image/background.png';
import Search from "../component/Search";

const Background = () => {
    return (
        <div className="row mt-0 mb-4 d-flex align-items-center" style={{
            height: '400px',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Search />

        </div>


    )

}
export default Background;