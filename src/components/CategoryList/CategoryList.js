import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import {Card, Grid, Image} from "semantic-ui-react";
import './CategoryList.scss'
import PropTypes from 'prop-types';
import {withRouter} from "react-router";

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    handleCategoryDetails = (item) => {
        this.props.history.push({
            pathname: '/category/details', state: {
                item
            }
        })
    }
    createBody = () => {
        return this.props.list.map((item, index) => {
            return <Grid.Column key={index} className={'margin-top-30'}>
                <Card onClick={() => this.handleCategoryDetails(item)} className={'custom-card'}>
                    <Image src={item.thumbnailUrl} />
                    <Card.Content className={'category-content'} >
                        <Card.Header>{item.title}</Card.Header>
                    </Card.Content>
                </Card>
            </Grid.Column>
        })
    }


    render() {
        return <Grid columns='three'>
            <Grid.Row>
                {this.createBody()}
            </Grid.Row>
        </Grid>

    }

}


CategoryList.defaultProps = {
    list: []
};
CategoryList.propTypes = {
    list: PropTypes.array.isRequired
};
export default injectIntl(withRouter(CategoryList))
