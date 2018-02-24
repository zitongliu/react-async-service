import React, {Component} from 'react';

import AsyncService from './AsyncService';

export default class SampleComponent extends Component {
  constructor() {
    super();
    
    this.getResponseFromEndpoint('https://demo3230763.mockable.io/sample')
  }
  
  getResponseFromEndpoint(url) {
    const fetchData = AsyncService.makeGetRequestFetch(url, {}).then(res => {
      let jsonRes;
      res.json().then(json => {
        jsonRes = json;
        console.log('The response from fetch is:', jsonRes);
      })
    })
    const fetchDataTwo = AsyncService.makeGetRequestFetchTwo(url, {}).then(res => {
      console.log('The response from fetch Two is:', res);
    })
  }
    
  render() {
    return (
      <div>
        <h2>Sample Component</h2>
        <p>Response from endpoint:</p>
      </div>
    );
  }
}