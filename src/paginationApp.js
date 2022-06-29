import React from 'react'

import Pagination from './core'
import { useState } from 'react'

function PaginationApp(props) {
    const [totalCount, setTotalCount] = useState(props.totalCount ? props.totalCount : 10)
    const [pageNumber, setPageNumber] = useState(props.pageNumber ? props.pageNumber : 10)
    const [countPerPage, setCountPerPage] = useState(props.countPerPage ? props.countPerPage : 10)


    const onPageChanged = (name, value) => {
        if (name === "totalCount")
            setTotalCount(value)
        else if (name === "pageNumber")
            setPageNumber(value)
        else if (name === "countPerPage")
            setCountPerPage(value)
    }

    return (
        <div className="col-md-12 row" >
            <div id="datatable_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                <Pagination totalCount={totalCount} onValueChanged={onPageChanged} pageNumber={pageNumber} countPerPage={countPerPage} />
            </div>
        </div>
    );
};

export default PaginationApp