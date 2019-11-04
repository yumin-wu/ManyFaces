import React, { Component } from 'react';
import './FaceRecognition.css';

class FaceRecognition extends Component {
    constructor() {
        super();
    }

    createBox = (box) => {
        return (<div className='bounding-box'
            style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
        </div>);
    }

    createBoxes = (boxes) => {
        return boxes.map(this.createBox);
    }

    render() {
        const { imageUrl, boxes } = this.props;
        return (
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img id='inputimage' alt="" src={imageUrl} width='500px' height='auto'></img>
                    {this.createBoxes(boxes)}
                </div>
            </div>
        );
    };
};

export default FaceRecognition;
