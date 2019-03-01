import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import {Container} from "semantic-ui-react";
import HttpRequest from "../../utils/HttpRequest";
import './Category.scss'
import CategoryList from "../../components/CategoryList/CategoryList";
import {ToastContainer, toast} from 'react-toastify';


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryData: []
        }
    }

    componentDidMount() {
        this.getCategoryData();

    }

    getCategoryData = () => {
        HttpRequest.get('/photos').then(response => {
            this.setState({categoryData: this.getTop(response.data, 100)})
        }).catch(e => {
            toast.error(e);
        })
    }
    getTop = (item, size) => {
        return item.slice(0, size)
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
            <CategoryList list={categoryData}/>
        </Container>
    }

}

export default injectIntl(Category)
