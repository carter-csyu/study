import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';
import moment, { max } from 'moment';
import * as api from './lib/api';

class App extends Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  getAPOD = async (date) => {
    if (this.state.loading) return; // 이미 요청중이라면 무시

    this.setState({
      loading: true
    });

    try {
      const response = await api.getAPOD(date);
      const { date: retrieveDate, url, media_type: mediaType } = response.data;
      
      if (!this.state.maxDate) {
        this.setState({
          maxDate: retrieveDate
        });
      }

      this.setState({
        date: retrieveDate,
        mediaType,
        url
      });
    } catch (e) {
      console.log(JSON.stringify(e, null, 2));
    }

    this.setState({
      loading: false
    });
  }

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);

    this.getAPOD(prevDate);
  }
  
  handleNext = () => {
    const { date, maxDate } = this.state;
    if (date === maxDate) return;

    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    console.log(maxDate);

    this.getAPOD(nextDate);
  }

  componentDidMount() {
    this.getAPOD();
  }

  render() {
    const {
      handlePrev,
      handleNext
    } = this;

    const { url, mediaType, loading } = this.state;

    return (
      <div>
        <ViewerTemplate 
          spaceNavigator={
            <SpaceNavigator
              onPrev={handlePrev}
              onNext={handleNext}
            />
          }
          viewer={(
            <Viewer
              url={url}
              mediaType={mediaType}
              loading={loading}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
