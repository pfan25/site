import dynamic from "next/dynamic";
const Comments = dynamic(() => {
    return import("../../components/Comments");
}, { ssr: false })

const titles = ["Informational", "Successful", "Redirect", "Client Error", "Server Error"]
const data = [[
    { key: 100, value: "Continue" },
    { key: 101, value: "Switching Protocols" },
    { key: 102, value: "Processing" },
    { key: 103, value: "Early Hints" }
], [
    { key: 200, value: "OK" },
    { key: 201, value: "Created" },
    { key: 202, value: "Accepted" },
    { key: 203, value: "Non - Authoritative Information" },
    { key: 204, value: "No Content" },
    { key: 205, value: "Reset Content" },
    { key: 206, value: "Partial Content" },
    { key: 207, value: "Multi Status" },
    { key: 208, value: "Already Reported" },
    { key: 226, value: "IM Used" },
], [
    { key: 300, value: "Multiple Choices" },
    { key: 301, value: "Moved Permanently" },
    { key: 302, value: "Found(Previously Moved temporarily)" },
    { key: 303, value: "See Other" },
    { key: 304, value: "Not Modified" },
    { key: 305, value: "Use Proxy" },
    { key: 306, value: "Switch Proxy" },
    { key: 307, value: "Temporary Redirect" },
    { key: 308, value: "Permanent Redirect" },
], [
    { key: 400, value: "Bad Request" },
    { key: 401, value: "Unauthorized" },
    { key: 402, value: "Payment Required" },
    { key: 403, value: "Forbidden" },
    { key: 404, value: "Not Found" },
    { key: 405, value: "Method Not Allowed" },
    { key: 406, value: "Not Acceptable" },
    { key: 407, value: "Proxy Authentication Required" },
    { key: 408, value: "Request Timeout" },
    { key: 409, value: "Conflict" },
    { key: 410, value: "Gone" },
    { key: 411, value: "Length Required" },
    { key: 412, value: "Precondition Failed" },
    { key: 413, value: "Payload Too Large" },
    { key: 414, value: "URI Too Long" },
    { key: 415, value: "Unsupported Media Type" },
    { key: 416, value: "Range Not Satisfiable" },
    { key: 417, value: "Expectation Failed" },
    { key: 418, value: "I'm a Teapot" },
    { key: 421, value: "Misdirected Request" },
    { key: 422, value: "Unprocessable Entity" },
    { key: 423, value: "Locked" },
    { key: 424, value: "Failed Dependency" },
    { key: 425, value: "Too Early" },
    { key: 426, value: "Upgrade Required" },
    { key: 428, value: "Precondition Required" },
    { key: 429, value: "Too Many Requests" },
    { key: 431, value: "Request Header Fields Too Large" },
    { key: 451, value: "Unavailable for Legal Reasons" },
], [
    { key: 500, value: "Internal Server Error" },
    { key: 501, value: "Not Implemented" },
    { key: 502, value: "Bad Gateway" },
    { key: 503, value: "Service Unavailable" },
    { key: 504, value: "Gateway Timeout" },
    { key: 505, value: "HTTP Version Not Supported" },
    { key: 506, value: "Variant Also Negotiates" },
    { key: 507, value: "Insufficient Storage" },
    { key: 508, value: "Loop Detected" },
    { key: 510, value: "Not Extended" },
    { key: 511, value: "Network Authentication Required" },
]
]

const HttpStatus = () => {
    return <>
        <div className="http-status">
            <h2 className="text-2xl mb-4 font-bold">HTTP状态代码概述</h2>
            {
                data.map((item, key) => {
                    return <div class="p-10 mb-10 shadow-xl rounded-md" key={key}>
                        <h3 className="text-xl mb-4 font-bold">{key + 1}xx {titles[key]}</h3>
                        {
                            item.map(el => {
                                return <div class="leading-10">
                                    <a href={`https://www.abstractapi.com/http-status-codes/${el.key}`} className="text-purple-500">
                                        <div class="w-embed">
                                            <span className="px-2 py-1 bg-purple-500 rounded-md text-white text-sm">{el.key}</span>
                                            <span className="px-2">-</span>
                                            <span className="http-status-list-text">{el.value}</span>
                                        </div>
                                    </a>
                                </div>
                            })
                        }
                    </div>
                })
            }
        </div>
        <Comments data={{ title: "http状态码" }} />
    </>
}

export default HttpStatus;