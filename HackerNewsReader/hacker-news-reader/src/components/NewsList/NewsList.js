import React, { Component } from 'react';
import { NewsListItem } from '../NewsListItem/NewsListItem';

export class NewsList extends Component {
    state = {
        resp: []
    }
    componentDidMount(){
        fetch("http://node-hnapi.herokuapp.com/news?page=1")
        .then(res => (res.ok ?  res.json() : {}))
        .then(resp => {
            this.setState({resp})
        })
    }

    render(){
        return (
            <div>
            {
                this.state.resp.map((item) => <NewsListItem item={item} onClick={this.props.onClickItem} />)
            }
            </div>
        )
    }
}