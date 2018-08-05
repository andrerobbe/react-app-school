import * as React from 'react';

export default class LoadingAnimation extends React.Component {
	render() {
		return (
			<div className="outer-loader">
				<div className="loader">
					<div className="loading-bar" />
					<p id='txt'>Loading ...</p>
				</div>
			</div>
		);
	}
};