import React from "react"
import background from '../Image/background.png';
import Search from "../component/Search";

const Background = () => {
    return (
        <div className="row mt-2 mb-4 position-relative" style={{
            height: '400px',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
        }}>
            <Search />

        </div>


    )

}
export default Background;