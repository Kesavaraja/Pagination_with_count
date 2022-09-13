export const defaultDisplayText = {
    currentDisplayingText: "Displaying",
    currentToText: "to",
    currentOfText: "of",
    currentEntriesText: "entries",
    expectedDisplayText: "Display ",
    expectedEntriesText: " entries"
}

export const styles = {
    containerClass: "",
    bgColor:"",
    buttonBgColor:"Grey",
    textColor:"Blue"
}

export const defaultCount = [10, 20, 50, 100]

export function validArray(data) {
    if (data && data.length > 0)
        return true
    else
        return false
}   