import logo from "/src/assets/Aat.svg"


export function Home() {
  return (
    <>
        <div className="Home-app bg-1abc9c">
        <img src={logo} className="width-img mb-1"  alt="assets"/>
            <h1 className="fw-bold mb-3 ">START FRAMEWORK</h1>
            <div className="shape d-flex justify-content-center align-items-center">
                <div className="Right">
                </div>
                <i className="fa-solid fa-star text-white mx-3"></i>
                <div className="Left">
                </div>
            </div>
            <div className="home-text text-white mt-3">
              <p className="m-0"> Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </>
  )
}
