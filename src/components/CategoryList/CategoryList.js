import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import {Card, Grid, Pagination} from "semantic-ui-react";
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

    handleCategoryDetails = (id) => {
        this.props.history.push({
            pathname: '/category/details', state: {
                id
            }
        })
    }
    createBody = () => {
        return this.props.list.map((item,index) => {
            return <Grid.Column key={index} className={'margin-top-10'}>
                <Card>
                    <Card.Content className={'category-content'} onClick={() => this.handleCategoryDetails(item.id)}>
                        <Card.Header>{item.name}</Card.Header>
                    </Card.Content>
                </Card>
            </Grid.Column>
        })
    }
    handlePageChange = (e, data) => {
        if (typeof this.props.handlePageChange == 'function')
            this.props.handlePageChange(data.activePage-1)
    }
    render() {
        const {currentPage, totalPage} = this.props;
        return <Grid columns='three'>
            <Grid.Row>
                {this.createBody()}
            </Grid.Row>
            {totalPage !== 1 ? <Pagination onPageChange={this.handlePageChange} className={'category-pagination'} defaultActivePage={currentPage}
                                           totalPages={totalPage}/> : null}
        </Grid>

    }

}


CategoryList.defaultProps = {
    list: []
};
CategoryList.propTypes = {
    list: PropTypes.array.isRequired,
    currentPage: PropTypes.number,
    totalPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func
};
export default injectIntl(withRouter(CategoryList))
