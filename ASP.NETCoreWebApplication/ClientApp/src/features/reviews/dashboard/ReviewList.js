import React, {Component, useState} from 'react';
import {Button,Label, Item, ItemContent, Segment} from "semantic-ui-react";
import ReviewDashboard from "./ReviewDashboard";
import {Link} from "react-router-dom";
import axios from "axios";
export default class ReviewList extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(review, index){
        console.log(review);
        console.log(index);
    }
    
    render() {
        let reviews = this.props.children;
        console.log(reviews)
        return (
            <Segment>
                <Item.Group divided >
                    {reviews.map((review, index) =>
                        (<Item key={review.id}>
                            <ItemContent>
                                <Item.Header>{review.title}</Item.Header>
                                <Item.Meta>{review.date}</Item.Meta>
                                <Item.Description>
                                    <p>{review.description}</p>
                                    <p>{review.views}</p>
                                </Item.Description>
                                <Item.Extra>
                                    <Button onClick={() => this.handleClick(review, index)} floated={"right"} content={"View"}/>
                                    <Label basic content={review.category}/>
                                </Item.Extra>
                            </ItemContent>
                        </Item>)) }
                </Item.Group>
            </Segment>
        );
    }
}
