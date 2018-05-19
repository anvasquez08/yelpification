import React from 'react'; 

const Chart = ({information}) => {	
	const {Y2015, Y2016, Y2017, Y2018} = information

	return (
		<div className="col-lg-6">
		{console.log(Y2015)}


		{
			Y2015.map((result, idx) => {
				return (
				<table className="table table-dark" key={idx}>
					<thead>
					<tr>
						<th scope="col">2015</th>
						<th scope="col"></th>
						<th scope="col">Violations</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<th scope="row">Grading</th>
						<td>{result.healthRating[0]}</td>
						<td rowSpan="2">{

							result.violations.map((violation, idx) => {
								return (<div key={ idx}>
										<div>{violation.violation_code}: {violation.violation_description} </div>
										</div>
									)
							})

						}</td>
					</tr>
					<tr>
						<th scope="row">Inspection Date</th>
						<td>{result.inspection_date}</td>
					</tr>
					<tr>
						<th scope="row">Points</th>
						<td>{result.score[0]}</td>
					</tr>
					</tbody>
					</table>
				)
			})
		}
	</div>
	)
}

export default Chart;


/*
			<table className="table table-dark">
				<thead>
				<tr>
					<th scope="col">2018</th>
					<th scope="col"></th>
					<th scope="col">Violations</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th scope="row">Grading</th>
					<td>Test One alskd alsdk </td>
					<td rowSpan="2">Hello Worlsalkd alskdj</td>
				</tr>
				<tr>
					<th scope="row">Inspection Date</th>
					<td>Test One alskd alsdk </td>
				</tr>
				<tr>
					<th scope="row">Points</th>
					<td>Test One alskd alsdk </td>
				</tr>
				</tbody>
			</table>


*/