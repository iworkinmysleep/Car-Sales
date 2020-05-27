import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import {addFeatures, removeFeatures} from './actions/index'

const App = (props) => {
	return (
		<div className="boxes">
			<div className="box">
				<Header car={props.car} />
				<AddedFeatures car={props.car} removeFeatures={props.removeFeatures} />
			</div>
			<div className="box">
				<AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeatures={props.addFeatures}/>
				<Total car={props.car} additionalPrice={props.additionalPrice} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log("state", state);
	return {
		additionalPrice: state.additionalPrice,
		car: state.car,
		additionalFeatures: state.additionalFeatures,
	};
};

export default connect(mapStateToProps, {addFeatures, removeFeatures})(App);
