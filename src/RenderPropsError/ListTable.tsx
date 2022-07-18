import React, { useState, useEffect } from "react"

export default function ListTable(props: {
    headers: { label: string; index: string | number; render?: (data: any) => JSX.Element }[]
    dataSource: Record<any, any>[]
}) {
    const { headers, dataSource } = props
    const [totalCount, setTotalCount] = useState(0)
    useEffect(() => setTotalCount(dataSource.length), [dataSource])

    return (
        <>
            <label>TotalCount : {totalCount}</label>
            <table>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th>{header.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((data) => (
                        <tr>
                            {headers.map((header) => {
                                if (header.render) {
                                    const { render: Render } = header
                                    return <td>{Render({ data: data[header.index] })}</td>
                                }

                                return <td>{data[header.index]}</td>
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

// export default function ListTable(props: {
//     headers: { label: string; index: string | number; render?: (data: any) => JSX.Element }[]
//     dataSource: Record<any, any>[]
// }) {
//     const { headers, dataSource } = props

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     {headers.map((header) => (
//                         <th>{header.label}</th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {dataSource.map((data) => (
//                     <tr>
//                         {headers.map((header) => {
//                             if (header.render) {
//                                 const { render: Render } = header
//                                 // return <td>{render({ data: data[header.index] })}</td>
//                                 return (
//                                     <td>
//                                         <Render data={data[header.index]} />
//                                     </td>
//                                 )
//                             }

//                             return <td>{data[header.index]}</td>
//                         })}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     )
// }
