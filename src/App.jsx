import React from 'react';
import dataSeries from './data/tblSeries.json';
import dataHierarchy from './data/tblHierarchy.json';
import dataLockedPeriods from './data/tblLockedPeriods.json';
import dataObservations from './data/tblObservations.json';

console.log(dataSeries)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      series: [],
    };
  }

  componentDidMount() {
    this.getParentSeries();
  }


  getParentSeries() {
    //get top seriesID
    let parentSeriesID = dataHierarchy
      .filter((h) => h.FK_PARENT_SERIES === 0)
      .map((h) => h.FK_SERIES);

    //get top series data
    let series = dataSeries.filter((s) => parentSeriesID.indexOf(s.KY_ID) >= 0);

    this.setState({ series });
  }

  render() {
    return (
      <div>
        Series:
        <ul>
          {this.state.series.map((s) => {
            return <li>{s.TX_DESCRIPTION}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
