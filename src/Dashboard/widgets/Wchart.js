import React, { Component, Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {

	datasets: [{
		data: [300, 50, 100,76,97,87,800,987,785],
		backgroundColor: [
            '#55efc4',
            '#81ecec',
            '#74b9ff',
            '#a29bfe',
            '#6c5ce7',
            '#ff7675',
            '#ffeaa7',
            '#00cec9',
            '#0984e3',
            '#e84393'
		],
		hoverBackgroundColor: [
            '#55efc4',
            '#81ecec',
            '#74b9ff',
            '#a29bfe',
            '#6c5ce7',
            '#ff7675',
            '#ffeaa7',
            '#00cec9',
            '#0984e3',
            '#e84393'

		]
    }],
    labels: [
		'Education',
		'Health',
        'Grandparents',
        'Gifts',
        'services'
	]
};
const option ={
 
    layout: {
        padding: {
            left: 50,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
    title: {
        display: true,
        text: 'Custom Chart Title'
    },
    legend:{
        position:'bottom'
    }
  };

class Wchart extends Component {
    
    render() {
        return (
           <Fragment>
            <Doughnut data={data} options={option} />
           </Fragment>
        );
    }
}

export default Wchart;