
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
| totalItemsCount | Number | Required | The total count of items. |
| onChange | Function | Required | The page change handler. Receives the page number as an argument. |
| activePage | Number | 1 | The active page. |
| itemsCountPerPage | Number | 10 | The number of items per page. |
| pageRangeDisplayed | Number | 5 | The number of pages displayed in the paginator. |


## Demo

Link to demo - https://codesandbox.io/s/pagination-with-count-demo-393t5y?file=/src/App.js

## Usage/Examples

```javascript
import Pagination from 'pagination-with-count'

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
