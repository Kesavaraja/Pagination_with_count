import { useState } from 'react'
import { styles, defaultDisplayText, defaultCount, validArray } from '../constants'
import Pagination from './Core'

function PaginationApp(props) {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [totalCount, setTotalCount] = useState(props.totalCount ? props.totalCount : 100)
    const [pageNumber, setPageNumber] = useState(props.pageNumber ? props.pageNumber : 1)
    const [countPerPage, setCountPerPage] = useState(props.countPerPage ? props.countPerPage : 10)
    const [customStyles, setCustomStyles] = useState(
        {
            theme: props.style && props.style.theme ? props.style.theme : getCurrentTheme(),
            containerClass: props.style && props.style.containerClass ? props.style.containerClass : styles.containerClass,
            bgColor: props.style && props.style.bgColor ? props.style.bgColor : styles.bgColor,
            buttonBgColor: props.style && props.style.buttonBgColor ? props.style.buttonBgColor : styles.buttonBgColor,
            textColor: props.style && props.style.textColor ? props.style.textColor : styles.textColor
        })

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
            <div id="pagination_counter" className={customStyles.containerClass}>
                <Pagination totalCount={totalCount} onValueChanged={onPageChanged} customStyles={customStyles} countOption={countOptions} styles={styles} displayText={textContent} pageNumber={pageNumber} countPerPage={countPerPage} />
            </div>
        </div>
    );
};

export default PaginationApp