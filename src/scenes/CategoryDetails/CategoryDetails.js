import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import {Container} from "semantic-ui-react";
import {ToastContainer} from "react-toastify";
import ImageList from "../../components/ImageList/ImageList";


class CategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: [],
        }
    }

    componentDidMount() {
        this.getImageData();
    }

    getImageData = () => {
        if (this.props.location.state && this.props.location.state.item)
            this.setState({imageData: this.props.location.state.item})
        else
            this.props.history.push({pathname: '/category'})
    }


    render() {
        const {imageData} = this.state;
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
            <ImageList data={imageData}/>
        </Container>
    }

}

export default injectIntl(CategoryDetails)
