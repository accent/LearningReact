import React, { Component } from 'react';
import { NewsList } from '../NewsList/NewsList';
import { NewsItem } from '../NewsItem/NewsItem';

const SelectPage = ({ page, ...rest }) => {
    let View;
    switch (page) {
        case 'item':
            View = NewsItem;
            break;
        case 'list':
        default:
            View = NewsList;
    }

    return (
    <View 
        {... rest}
    />
    );
}

export class NewsRouter extends Component {
    state = {
        page: 'list',
        newsId: null,
    }

    navigateTo = (page, newsId) => {
        this.setState({
            page,
            newsId
        })
    }

    render() {
        return (
            <div>
                <SelectPage page={this.state.page}
                    newsId={this.state.newsId}
                    onClickItem={this.navigateTo} />
            </div>
        )
    }
}