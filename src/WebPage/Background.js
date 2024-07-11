import React from "react"
import background from '../Image/background.png';
import Search from "../component/Search";

const Background = () => {
    return (
<<<<<<< HEAD
        <div className="row mt-0 mb-4 d-flex align-items-center" style={{
=======
        <div className="row mt-2 mb-4 position-relative" style={{
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
            height: '400px',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
<<<<<<< HEAD
=======
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
>>>>>>> aa8f3fd81bc3c55f08fc7d6d711ec4bfd61c26ff
        }}>
            <Search />

        </div>


    )

}
export default Background;