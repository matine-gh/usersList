import React, {useState} from "react";
import ArrowButton from "@/components/arrowButton";


export default function Pagination() {

    const [selectedPage, setSelectedPage] = useState(1);

    const totalPages = 12;
    const pageButtons = [];

    const commonStyle = "px-3 py-2 border leading-tight";

    const pageNumberStyle = commonStyle.concat(' text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700');
    const selectedPageNumberStyle = commonStyle.concat(" z-10  text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700");
    const arrowStyle = commonStyle.concat(" block ".concat(pageNumberStyle));

    const handleClick = (index: number) => {
        setSelectedPage(index);
    }


    for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
            <li>
                <a href="#"
                   key={i}
                   className={i=== selectedPage ?selectedPageNumberStyle :pageNumberStyle}
                   onClick={()=>handleClick(i)}
                >
                    {i}
                </a>
            </li>
        );
    }

    return (

        <nav aria-label="Page navigation">
            <ul className="inline-flex items-center -space-x-px">
                <ArrowButton vector={'Previous'}
                             selectedPage={selectedPage}
                             style={`${arrowStyle} ml-0 rounded-l-lg`}
                             handleClick={handleClick}
                             totalPages={totalPages}/>
                {pageButtons}
                <ArrowButton vector={'Next'}
                             selectedPage={selectedPage}
                             style={`${arrowStyle} ml-0 rounded-r-lg`}
                             handleClick={handleClick}
                             totalPages={totalPages}/>
            </ul>
        </nav>

    )
}
