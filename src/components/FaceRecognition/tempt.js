import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {

    createBox = (box) => {
        return <div className='bounding-box'
            style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
        </div>
    }

    createBoxes = (boxes) => {
        return boxes.map(this.createBox);
    }

    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt="" src={imageUrl} width='500px' height='auto'></img>
                {this.createBoxes(boxes)}
            </div>
        </div>
    );
};

export default FaceRecognition;
