import React from "react"
export default class Search extends React.Component {
  state = {
    Search: 'panda',
    type: 'all'
  }
  handleKey = (e) => {
    if (e.key === 'Enter') {
      console.log('enter bosildi');
      this.props.Search(this.state.Search)
    }
  }
  hendleFilter = (e) => {
    this.setState(() => ({
      type: e.target.dataset.type
    }), () => {
      this.props.Search(this.state.Search, this.state.type)
    })

  }
  render() {
    return (
      <div className="row">
        <div className="col s12">

          <div className="input-field ">
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={this.Search}
              onChange={(e) => { this.setState({ Search: e.target.value }) }}
              onKeyDown={this.handleKey}

            />
            <button className="btn btn-search" onClick={(e) => { this.props.Search(this.state.Search) }}>Search Movies</button>

            <div>

              <label className="filter_item">
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={this.hendleFilter}
                  checked={this.state.type === 'all'} />
                <span>All</span>
              </label>

              <label className="filter_item">
                <input class="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.hendleFilter} />
                <span>Movies</span>
              </label>

              <label className="filter_item">
                <input class="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.hendleFilter} />
                <span>Series</span>
              </label>

            </div>

          </div>
        </div>
      </div>
    )
  }
}