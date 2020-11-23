import React, { Component } from 'react';

const rawJournalData = [
    {title: 'Post One', content: 'Post Content', status: 'draft'},
    {title: 'Post Two', content: 'Post Content', status: 'published'},
    {title: 'Post Three', content: 'Post Content', status: 'published'},
    {title: 'Post Four', content: 'Post Content', status: 'published'}
];

// This is a Class components
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData, 
            greeting: 'Hi there',
            isOpen: true
        };
    }

    render() {
        return <h2>{this.props.heading}</h2>;
    }
}
