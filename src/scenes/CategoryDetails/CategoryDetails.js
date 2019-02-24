import React, {Component} from 'react'
import { injectIntl} from 'react-intl'
import { Container } from "semantic-ui-react";
import HttpRequest from "../../utils/HttpRequest";
import {calculatePagination} from "../../utils/Commons";
import {toast, ToastContainer} from "react-toastify";
import ImageList from "../../components/ImageList/ImageList";


class CategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData:[],
            page: 0,
            limit: 9,
            totalPage: 0
        }
    }

    componentDidMount() {
        this.getImageData(this.state.page);
    }

    getImageData = (page) => {
        const{limit}=this.state;
        if(this.props.location.state.id)
        HttpRequest.get('/images/search',{category_ids:this.props.location.state.id,page:page,limit:limit,order:'ASC'}).then(response=>{
            const page = calculatePagination(response.headers['pagination-count'], response.headers['pagination-limit']);
            this.setState({imageData: response.data, totalPage: page})
        }).catch(e=>{
            toast.error(e);
        })
    }


    render() {
        const {imageData} = this.state;
        return<Container className={'category-container'}>
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
            <ImageList handlePageChange={this.getImageData} currentPage={this.state.page} totalPage={this.state.totalPage} list={imageData}/>
        </Container>
    }

}

export default injectIntl(CategoryDetails)
