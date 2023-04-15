import React from "react";


export default function ArrowButton(props) {

    const vector = props.vector;
    const selectedPage = props.selectedPage;
    const style = props.style;
    const handleClick = props.handleClick;

    const svgStyle = "w-5 h-5";

    const handleArrowClick = () => {
        if (vector==="Previous" && selectedPage!==1){
            handleClick(selectedPage-1)
        }else if (vector==="Next" && selectedPage!==props.totalPages) {
            handleClick(selectedPage+1)
        }
    }

    return (
        <li>
            <a href="#"
               className={style}
               onClick={()=>{handleArrowClick()}}
            >
                <span className="sr-only">{vector}</span>
                <svg aria-hidden="true" className={svgStyle} fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d={vector === "Previous"
                              ?"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              :"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                             }
                          clipRule="evenodd"></path>
                </svg>
            </a>
        </li>
    )
}
