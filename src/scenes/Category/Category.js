import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import {Container} from "semantic-ui-react";
import HttpRequest from "../../utils/HttpRequest";
import './Category.scss'
import CategoryList from "../../components/CategoryList/CategoryList";
import {ToastContainer, toast} from 'react-toastify';
import {calculatePagination} from "../../utils/Commons";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryData: [],
            page: 0,
            limit: 9,
            totalPage: 0
        }
    }

    componentDidMount() {
        this.getCategoryData(this.state.page);

    }

    getCategoryData = (page) => {
        const{limit}=this.state;
        HttpRequest.get('/categories', {page: page, limit: limit}).then(response => {
            const page = calculatePagination(response.headers['pagination-count'], response.headers['pagination-limit'])
            this.setState({categoryData: response.data, totalPage: page})
        }).catch(e => {
            toast.error(e);
        })
    }


    render() {
        const {categoryData} = this.state;
        return <Container className={'category-container'}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
            <CategoryList handlePageChange={this.getCategoryData} currentPage={this.state.page} totalPage={this.state.totalPage} list={categoryData}/>
        </Container>
    }

}

export default injectIntl(Category)
