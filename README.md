
# Pagination-with-count

A brief description of what this project does and who it's for

This react package implements pagination with the ability to select the number of items to be displayed on the current page.


## Installation

Install package with npm

```bash
  npm i pagination-with-count
```
    

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| totalCount | Number | Required | The total count of items. |
| onValueChanged | Function | Required | The page change handler. Receives the page number as an argument. |
| pageNumber | Number | 1 | The active page. |
| countPerPage | Number | 10 | The number of items per page. |
| countOptions | Array | [10,20,50,100,200] | The number of pages displayed in the paginator. |
| styles | Object | {
    containerClass: "",
    bgColor: "black",
    buttonBgColor: "Grey",
    textColor: "Blue"
  }; | The styles to be applied for buttons and other texts |
| textContent | Object | {
    currentDisplayingText: "Mostrando ",
    currentToText: "a",
    currentOfText: "de",
    currentEntriesText: "entradas",
    expectedDisplayText: "Mostrar ",
    expectedEntriesText: " entradas"
  }; | Text to be displayed instead of Displaying 1 to 10 of 2000 entries. |


## Demo

Link to demo - https://codesandbox.io/s/pagination-with-count-demo-393t5y

## Usage/Examples

```javascript
import PaginationComponent from 'pagination-with-count'

function App() {
  return 
<PaginationComponent
  totalCount={this.state.totalCount}
  onValueChanged={this.onPageChanged}
  pageNumber={this.state.pageNumber}
  countPerPage={this.state.countPerPage}
/>
}
```


More configuration options will be updated soon.
