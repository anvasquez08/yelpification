import React from "react"
import history from './History.jsx';
import SearchByAddress from './component-search-bars/SearchByAddress.jsx';
import SearchByBusinessName from './component-search-bars/SearchByBusinessName.jsx';
import {withRouter} from 'react-router-dom';

const SearchBars = (props) => {
	return (
			<div className="container">
					<div className="row">
						<div className="col-md-6">
							<SearchByAddress handleLatLgn={props.handleLatLgn} 
							  		handleYelpSearch={props.handleYelpSearch}/>
						</div>
						<div className="col-md-6">
							<SearchByBusinessName lat={props.lat} lng={props.lng} 
									fulladdress={props.fulladdress}
									handleSearchResults={props.handleSearchResults}/>
						</div>
					</div>				
			</div>
		)
}

export default withRouter(SearchBars)