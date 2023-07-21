
import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743'
        ,backgroundColor: props.mode === 'dark' ? 'rgb(36,74,104)' : 'white'
        ,border:'2px solid '
        ,borderColor:'white'
    }

    // const [modeBtnTxt, setModeBtnTxt] = useState('Enable Dark Mode');
    /*const [myStyle, setMyStyle] = useState(
        {
            color: '#212529',
            backgroundColor: 'white'
        }
    )*/

    /*
        const toggleStyle = () => {
            if (myStyle.color === 'white') {
                setMyStyle({
                    color: '#212529',
                    backgroundColor: 'white'
                })
                setModeBtnTxt('Enable Dark Mode');
            }
            else {
                setMyStyle({
                    color: 'white',
                    backgroundColor: '#212529'
                    , border: '0px solid #0b5ed7'
                })
                setModeBtnTxt('Enable Light Mode');
            }
        }
     */


    return (

        <div className='container'style={myStyle}   >
            <h1 className='my-3'  >About Us</h1>

            <div className="accordion" id="accordionExample">

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis similique nesciunt nihil magni! Delectus soluta culpa quod.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>

                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut sed odio quae enim atque molestias!
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>

                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptatibus ratione! Fugit, maiores. Hic, vel rerum!
                        </div>
                    </div>

                </div>

            </div>


        </div>


    )
}
