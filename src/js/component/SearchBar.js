import React from "react";


export const SearchBar = () => {
	return (
    <div className="container">
        <nav className="row navbar searchNav">
            <form className="d-flex searchNav" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
        </nav>
    </div>
	);
};

export default SearchBar;


