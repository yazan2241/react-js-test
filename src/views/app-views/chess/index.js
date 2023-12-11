import chessPieces from 'components/shared-components/ChessPiece';
import { forEach } from 'lodash';
import React, { useState, useRef } from 'react'
import Draggable from 'react-draggable';

const Chess = () => {

    const [pieces, setpieces] = useState(
        chessPieces
    );

    const saveScene = () => {
        const link = document.createElement("a");
        const file = new Blob([
            [JSON.stringify(pieces)]
        ], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "Scene.txt";
        document.body.appendChild(link);
        link.click();
    }

    const loadScene = async (e) => {
            e.preventDefault()
            setpieces(null);
            const reader = new FileReader()
            reader.onload = async (e) => {
                const text = (e.target.result)
                let p = JSON.parse(text)
               
                setpieces([...p]);
                console.log(p)
                console.log(pieces)

            };
            reader.readAsText(e.target.files[0])
        }


    const updatePosition = (event, dragEelement, index) => {
        console.log("dragEelement", dragEelement.x);
        // let index = event.target.getAttribute("data-id");
        console.log("index", index);
        let copyitems = [...pieces];
        let item = {
            ...copyitems[index],
            x: dragEelement.x,
            y: dragEelement.y
        }
        copyitems[index] = item;
        setpieces(copyitems);

    }

    return (
        <div style={{ height: '70vh' }}>
            <div style={{ height: '100%', width: '100%' }}>
                {

                    pieces && pieces.map((item, index) => (
                        <Draggable
                            grid={[25, 25]}
                            bounds='parent'
                            defaultPosition={{ x: item.x, y: item.y }}
                            scale={1}

                            onStop={
                                (event, dragEelement) =>
                                    updatePosition(event, dragEelement, index)
                            }

                        >
                            <div
                                key={index}
                                style={{ width: 'max-content' }}
                            ><img src={item.image} alt='item' style={{width : '40px'}} /></div>
                        </Draggable>

                    ))
                }
            </div>
            <div className='save-button'>
                <button onClick={saveScene}>Save</button>
                <input type="file" onChange={loadScene} />

            </div>
        </div>
    )
}

export default Chess