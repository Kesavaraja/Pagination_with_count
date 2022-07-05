import React, { useState } from 'react'

import { styles, defaultDisplayText, defaultCount, validArray } from './assets/constants'
import Pagination from './core'

function PaginationApp(props) {
    const [totalCount, setTotalCount] = useState(props.totalCount ? props.totalCount : 10)
    const [pageNumber, setPageNumber] = useState(props.pageNumber ? props.pageNumber : 1)
    const [countPerPage, setCountPerPage] = useState(props.countPerPage ? props.countPerPage : 10)
    const [styles, setStyles] = useState(/* 
        styles.theme = props.style ? 
            styles.containerClass = props.style ?
                styles.bgColor = props.style ?
                    styles.buttonBgColor = props.style ?
                        styles.textColor = props.style ? */
    )

    const [countOptions, setCountOptions] = useState(
        validArray(props.countOptions) ? props.countOptions : defaultCount
    )


    const [textContent, setTextContent] = useState({

        currentDisplayingText: props.textContent && props.textContent.currentDisplayingText ? props.textContent.currentDisplayingText : defaultDisplayText.currentDisplayingText,
        currentToText: props.textContent && props.textContent.currentToText ? props.textContent.currentToText : defaultDisplayText.currentToText,
        currentOfText: props.textContent && props.textContent.currentOfText ? props.textContent.currentOfText : defaultDisplayText.currentOfText,
        currentEntriesText: props.textContent && props.textContent.currentEntriesText ? props.textContent.currentEntriesText : defaultDisplayText.currentEntriesText,
        expectedDisplayText: props.textContent && props.textContent.expectedDisplayText ? props.textContent.expectedDisplayText : defaultDisplayText.expectedDisplayText,
        expectedEntriesText: props.textContent && props.textContent.expectedEntriesText ? props.textContent.expectedEntriesText : defaultDisplayText.expectedEntriesText
    })


    const onPageChanged = (name, value) => {
        if (name === "totalCount")
            setTotalCount(value)
        else if (name === "pageNumber")
            setPageNumber(value)
        else if (name === "countPerPage")
            setCountPerPage(value)
    }

    return (
        <div className={"row"} >
            <div id="pagination_counter" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                <Pagination totalCount={totalCount} onValueChanged={onPageChanged} countOption={countOptions} styles={styles} displayText={textContent} pageNumber={pageNumber} countPerPage={countPerPage} />
            </div>
        </div>
    );
};

export default PaginationApp