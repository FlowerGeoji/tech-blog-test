import React, { useState } from "react"
import ListTable from "./ListTable"

function RenderNameTableData(props: { data: any }) {
    const [label] = useState("")

    return <span style={{ fontWeight: 900 }}>{label}{props.data}</span>
}

export default function RenderPropsError() {
    const [headers, setHeaders] = useState([
        { label: "이름", index: "name", render: RenderNameTableData },
        { label: "나이", index: "age" },
        { label: "성별", index: "sex" },
        { label: "직장", index: "job" },
    ])
    const [dataSource, setDataSource] = useState<Record<any, any>[]>([])
    return (
        <div>
            <button
                onClick={() => {
                    setDataSource([
                        { name: "flower", age: 22, sex: "man", job: "Programmer" },
                        { name: "geoji", age: 22, sex: "women", job: "" },
                        { name: "novell", age: 33, sex: "women", job: "Doctor" },
                        { name: "star", age: 30, sex: "man", job: "Teacher" },
                    ])
                }}
            >
                Add DataSource
            </button>
            <ListTable headers={headers} dataSource={dataSource} />
        </div>
    )
}
