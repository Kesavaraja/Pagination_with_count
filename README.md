
# Pagination-with-count

A brief description of what this project does and who it's for

This react package implements pagination with the ability to select the number of items to be displayed on the current page.


## Installation

Install package with npm

```bash
  npm i pagination-with-count
```
    

## Props
```javascript

 totalCount  : The maximum length of the total data.

 onValueChanged: A function to be triggered when the user changes the page index.

 pageNumber: The current page index.

 countPerPage: A function to be triggered when the user changes the count of data to be displayed on the current page.


```

## Usage/Examples

```javascript
import Pagination from 'pagination-with-count'

function App() {
  return 
<Pagination
  totalCount={this.state.totalCount}
  onValueChanged={this.onPageChanged}
  pageNumber={this.state.pageNumber}
  countPerPage={this.state.countPerPage}
/>
}
```


More configuration options will be updated soon.
