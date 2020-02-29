import React from 'react'

class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.onValueChanged = this.onValueChanged.bind(this)
        this.state = {
            showingStartCalc: "",
            showingEndCalc: ""
        }
        this.pages = this.pages.bind(this)
    }

    onValueChanged(e) {
        if ([e.target.name] === "pageNumber")
            this.props.onValueChanged(e.target.name, e.target.id);
        else {
            this.props.onValueChanged("pageNumber", "1"); 
            this.props.onValueChanged(e.target.name, e.target.value);
        }
    }

    startCalc() {
        if(this.props.totalCount < 1)
            return 0
        return (Number(this.props.pageNumber) - 1) * this.props.countPerPage + 1
    }

    endRowCalc() {
        var endValue = (Number(this.props.pageNumber)) * this.props.countPerPage
        var showingEndCalc = endValue >= this.props.totalCount ? this.props.totalCount : endValue
        return showingEndCalc
    }

    pages() {
        var pages = []
        var count = Math.ceil(this.props.totalCount / this.props.countPerPage);
        if (this.props.pageNumber > 3)
            pages[0] = <a key="0" className="paginate_button next" id={1} name="pageNumber" aria-controls="datatable" onClick={this.onValueChanged} data-dt-idx="3" tabIndex="0">First</a>
        if (this.props.pageNumber == "1")
            pages[1] = <a key="1" className="paginate_button previous disabled" aria-controls="datatable" id={Number(this.props.pageNumber) - 1} name="pageNumber" data-dt-idx="0" tabIndex="0">{"<"}</a>
        else
            pages[1] = <a key="1" className="paginate_button previous" aria-controls="datatable" id={Number(this.props.pageNumber) - 1} name="pageNumber" onClick={this.onValueChanged} data-dt-idx="0" tabIndex="0">{"<"}</a>
        for (let i = this.props.pageNumber - 2; i <= Number(this.props.pageNumber) + 2 && i <= count; i++) {
            if (i == this.props.pageNumber)
                pages[i] = <a key={i} className="paginate_button current" aria-controls="datatable" value={i} id={i} name="pageNumber" tabIndex="0"/*  onClick={this.onValueChanged} */>{i}</a>
            else if (i != 0)
                pages[i] = <a key={i} className="paginate_button " aria-controls="datatable" value={i} id={i} name="pageNumber" tabIndex="0" onClick={this.onValueChanged}>{i}</a>
        }
        if (count == this.props.pageNumber || this.props.totalCount == 0)
            pages[count + 1] = <a key={count + 1} className="paginate_button next disabled" id={Number(this.props.pageNumber) + 1} name="pageNumber" aria-controls="datatable" data-dt-idx="3" tabIndex="0">{">"}</a>
        else {
            pages[count + 1] = <a key={count + 1} className="paginate_button next" id={Number(this.props.pageNumber) + 1} name="pageNumber" aria-controls="datatable" onClick={this.onValueChanged} data-dt-idx="3" tabIndex="0">{">"}</a>
            pages[count + 2] = <a key={count + 2} className="paginate_button next" id={count} name="pageNumber" aria-controls="datatable" onClick={this.onValueChanged} data-dt-idx="3" tabIndex="0">Last</a>
        }

        return pages
    }

    render() {
        var pages = ""
        pages = this.pages()
        var startResult = this.startCalc()
        var endResult = this.endRowCalc()
        return (
            <div className="bottom">
                <div className="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing {startResult ? startResult : 0 } to {endResult ? endResult : 0} of {this.props.totalCount ? this.props.totalCount : 0 } entries</div>
                <div className="dataTables_length" id="datatable_length">
                    <label>
                        Show
                            <select name="datatable_length" aria-controls="datatable" name="countPerPage" value={this.props.countPerPage} className="form-control input-sm" onChange={this.onValueChanged}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        entries
                            </label>
                </div>
                <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                    <ul className="pagination">
                        <span>
                            {pages}
                        </span>
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log("Hello")
    }
}

export default Pagination