import React from 'react';

const Search = () => {
    return (
        <div className="container search-bar">
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Bạn muốn đi đâu?" />
                    </div>
                    <div className="col-md-3">
                        <input type="date" className="form-control" defaultValue="2024-06-18" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Khởi hành từ" />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-warning w-100">Tìm</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;
