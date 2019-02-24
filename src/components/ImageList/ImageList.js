import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import {Button, Card, Grid, Icon, Pagination} from "semantic-ui-react";
import './ImageList.scss'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }


    createBody = () => {
        return this.props.list.map((item, index) => {
            return <Grid.Column key={index} className={'margin-top-10'}>
                <Card>
                    <Card.Content className={'image-content'} style={{backgroundImage: `url(${item.url})`}}/>
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
        return <Grid centered columns='three'>
            <Grid.Row>
                {this.createBody()}
            </Grid.Row>
            {totalPage !== 1 ? <Pagination onPageChange={this.handlePageChange} className={'category-pagination'}
                                           defaultActivePage={currentPage}
                                           totalPages={totalPage}/> : null}
            <Grid.Row textAlign={'center'}>
                <Link to={'/category'}>
                    <Button primary icon labelPosition='left'>
                        <Icon name='left arrow'/>
                        Back To Category
                    </Button>
                </Link>
            </Grid.Row>
        </Grid>

    }

}


ImageList.defaultProps = {
    list: [],
    totalPage:1
};
ImageList.propTypes = {
    list: PropTypes.array.isRequired,
    currentPage: PropTypes.number,
    totalPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func
};
export default injectIntl(ImageList)
