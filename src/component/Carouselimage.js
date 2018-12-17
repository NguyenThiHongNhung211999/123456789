import React from 'react';

import {Carousel} from 'react-bootstrap';

class CarouselImage extends React.Component {
    buildCarousel() {
        let items = [];
        let itemData = this.props.items || [];

        for(let i in itemData) {
            items.push(
                <Carousel.Item key={i}>
                    <img width={900} height={500} alt="900x500" src={itemData[i].img} />
                    <Carousel.Caption>
                    <h3>{itemData[i].product_name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        }
        if(items.length > 0) {
            return (<Carousel>{items}</Carousel>);
        }
        return [];
    }
    render() {
        return (
            <div className="app-carousel">
                {this.buildCarousel()}
            </div>
        );
    }
}

export default CarouselImage;