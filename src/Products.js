import './Products.css'
import React from 'react';
import Data from './json/product.json';
import Modal from './Modal';

class Products extends React.Component {

    constructor() {
        super();
        this.state = { show: false };
        this.enroll = React.createRef();
        // this.enrollCourse = this.enrollCourse.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    // enrollCourse = (state) => {
    //     this.enroll.current.focus();
    // }

    render() {
        return (
            <div className="Products">
                {
                    Data.map((detail, index) => {
                        return (
                            <div class="product" onClick={this.showModal}>
                                <img src={detail.img} alt="" />
                                <p>{detail.name}</p>
                            </div>
                        )
                    })
                }
                <Modal show={this.state.show} handleClose={this.hideModal} />
            </div>
        )
    }
}



export default Products;