import React, { Component } from 'react';

import './NewsListItem.css';

export const NewsListItem = ({item, onClick}) => {
    const {
        title,
        url,
        time_ago,
        id,
    } = item;
    

    return <div className={'wrapper'} onClick={() => onClick('item', id)}>
        <div>{title}</div>
        <div>Published {time_ago}</div>
    </div>
}