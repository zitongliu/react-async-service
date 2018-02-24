import React, {Component} from 'react';
import axios from 'axios';


export default class AsyncService extends Component {
  static makeGetRequestFetch(url, header) {
    return fetch(url, {
      method: 'get',
      headers: header
    });
  }
  
  static makeGetRequestFetchTwo(url, header) {
    return new Promise( (resolve, reject) => {
      fetch(url, {
        method: 'get',
        headers: header
      }).then(res => {
        res.json().then( json => {
          resolve(json);
        });
      }).catch(err => {
        reject(err);
      })
    });
  }
  
  static makeGetRequestAxios(url, header) {
    return new Promise( (resolve, reject) => {
      axios.get(url, header).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}