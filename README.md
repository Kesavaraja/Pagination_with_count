Hello Friends,
A react package that implements Pagination with selection of count of contents to be visible in the current page. 

Props are:

totalCount - The maximum length of the total data.
onValueChanged - A function to be triggered when the user changes different page index in the current screen.
pageNumber - The current page index
countPerPage - A function to be triggered when the user changes count of data to be displayed in the current screen.

<Pagination
totalCount={this.state.totalCount}
onValueChanged={this.onPageChanged}
pageNumber={this.state.pageNumber}
countPerPage={this.state.countPerPage}
 />

More configuration will be updates soon.
