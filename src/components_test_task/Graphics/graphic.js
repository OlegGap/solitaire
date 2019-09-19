import React,{ Component } from 'react'
import { createChart } from 'lightweight-charts';

class CreateGraph extends Component {

    render() {
        const graphicRoot = document.createElement('div');
        const getAllCurrency = async () => {
            try {
                let result = await fetch('http://194.32.77.87:3000/api/coins');
                result = result.json();
                return result;
            } catch (err) {
                console.error(err)
                throw err;
            }
        };

        getAllCurrency().then(({ coinsData }) => {
            var chart = createChart(graphicRoot, {
                width: 85,
                height: 34,
                layout: {
                    backgroundColor: '#000',
                    textColor: '#000',
                },
                timeScale: {
                    timeVisible: false,
                    secondsVisible: false,
                    visible: false,
                },
                priceScale: {
                    position: 'none',
                },
                crosshair: {
                    horzLine: {
                        visible: false,
                    },
                    vertLine: {
                        visible: false,
                    },
                },
            });
            chart.applyOptions({
                priceScale: {
                    mode: 0,
                    autoScale: true,
                    alignLabels: true,
                    borderVisible: false,
                    borderColor: '#000',
                    scaleMargins: {
                        top: 0.30,
                        bottom: 0.25,
                    },
                },
            });

            var lineSeries = chart.addLineSeries();

            const datasAreaSeries = coinsData[114].prices.map(currentData => { return { time: currentData[0], value: currentData[2] } })
            console.log(coinsData);

            lineSeries.setData(
                datasAreaSeries
            )

        console.log(graphicRoot);
        });
        console.log(graphicRoot);
        
        return graphicRoot;
    }
}

export default CreateGraph;