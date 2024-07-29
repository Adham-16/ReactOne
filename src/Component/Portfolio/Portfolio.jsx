import { useState } from "react"
import Img1 from "/src/assets/poert1.png"
import Img2 from "/src/assets/port2.png"
import Img3 from "/src/assets/port3.png"

let ImagesUrl = [Img1,Img2,Img3,Img1,Img2,Img3]
export function Portfolio() {

const [imageUrl,setImagesUrl]=useState(null)
  return (
    <>
      <div className="Home-app ">
            <h1 className="text-white fw-bold mb-3  c-2C3E50 text-uppercase">portfolio component</h1>
        <div className="shape d-flex justify-content-center align-items-center mb-3">
              <div className="Right border-bottom-color">
              </div>
                <i className="fa-solid fa-star text-white mx-3  c-2C3E50"></i>
              <div className="Left border-bottom-color">
              </div>
        </div>
        <div className="container">
              <div className="row g-5 mb-4" >
              { ImagesUrl.map((Images,index)=>(
                <div className=" col-lg-4 col-md-6 col-sm-12 px-4" key={index} 
                onClick={()=>setImagesUrl(Images)}>
                  <div className="card rounded-3 overflow-hidden position-relative">
                    <img className="w-100 rounded-3"  src={Images} alt="image of Popup Images" />
                    <div className="layer position-absolute d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                <div/>
              </div>

        ))}
          </div>
        </div>
        <div className="Popup-Image" style={{visibility : imageUrl ? 'visible' : 'hidden' }}>
        <span onClick={()=>setImagesUrl(null)}>&times;</span>
          <img className="Popup w-50" src={imageUrl} alt="Popup Image" />
        </div>
      </div>

    </>
  )
}
