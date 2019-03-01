import React, {Component} from 'react'
import {injectIntl} from 'react-intl'
import {Button, Card, Grid, Icon, Image} from "semantic-ui-react";
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
        return <Grid.Column className={'margin-top-10'}>
            <Card className={'custom-card'} centered>
                <Image src={this.props.data.url}/>
                <Card.Content>
                    <Card.Header>{this.props.data.title}</Card.Header>
                    <Card.Meta>
                        Album Id : {this.props.data.albumId}
                    </Card.Meta>
                    <Card.Meta>
                        Id : {this.props.data.id}
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column>

    }


    render() {
        return <Grid centered>
            <Grid.Row>
                {this.createBody()}
            </Grid.Row>
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
    data: {},

};
ImageList.propTypes = {
    data: PropTypes.object.isRequired,

};
export default injectIntl(ImageList)
