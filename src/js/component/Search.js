import React, { useEffect, useState } from "react";

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

	return (
        <div className="container">
            <section className="search searchNav">
                <form>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Search" 
                    value={text} 
                    onChange={(e) => onChange(e.target.value)}
                    autofocus />
                </form>
            </section>
        </div>
);
}

export default Search;