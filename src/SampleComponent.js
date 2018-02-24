import React, {Component} from 'react';
import AsyncService from './AsyncService';


export default class SampleComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fetchData: null,
      fetchDataTwo: null,
      axiosData: null,
    }
    
    this.getResponseFromEndpoint('https://demo3230763.mockable.io/sample');
  }
  
  getResponseFromEndpoint(url) {
    AsyncService.makeGetRequestFetch(url, {}).then(res => {
      res.json().then(json => {
        console.log('The response from fetch is:', json);
        this.setState({
          fetchData: json,
        });
      }).catch(err => {
        console.log(err);
      })
    })
    AsyncService.makeGetRequestFetchTwo(url, {}).then(res => {
      console.log('The response from fetch Two is:', res);
      this.setState({
        fetchDataTwo: res,
      });
    }).catch(err => {
      console.log(err);
    });
    
    AsyncService.makeGetRequestAxios(url, {}).then(res => {
      console.log('The response from axios is:', res);
      this.setState({
        axiosData: res,
      });
    }).catch(err => {
      console.log(err);
    })
  }
    
  render() {
    return (
      <div>
        <h2>Sample Component</h2>
        <p>Response from endpoint</p>
        <p>Fetch One: {this.state.fetchData && this.state.fetchData.msg}</p>
        <p>Fetch Two: {this.state.fetchDataTwo && this.state.fetchDataTwo.msg}</p>
        <p>Axios: {this.state.axiosData && this.state.axiosData.data.msg}</p>
      </div>
    );
  }
}