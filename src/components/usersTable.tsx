import React from "react";
import Pagination from "@/components/pagination";


export default function MainComponent(props) {

    const data = props.data;
    const headers = props.headers;

    const td_styles = ["text-center m-4"];

    const updateUser = (id: number) => {
        console.log('he is ', id)
    }

    return (
        <div>
            <table className="w-1/2 border-2 border-dark-gray">
                <thead>
                <tr>
                    {headers.map((header, key) => {
                        return (
                            <th key={key} className={`${td_styles}`}>{header}</th>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                {data.map((user, key) => {
                    return (
                        <tr className={key % 2 == 0 ?"bg-gray" :``} key={key}>
                            <td>
                                <i onClick={()=>updateUser(user.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </i>

                            </td>
                            <td className={`${td_styles}`}>
                                <img src={`${user.avatar}`}
                                     alt="Avatar"
                                     className="w-10 h-10 align-middle rounded-full"
                                />
                            </td>
                            <td className={`${td_styles}`}>{user.last_name}</td>
                            <td className={`${td_styles}`}>{user.first_name}</td>
                            <td className={`${td_styles}`}>{user.email}</td>
                            <td className={`${td_styles}`}>{user.id}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}
