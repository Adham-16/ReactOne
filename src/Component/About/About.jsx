
export function About() {
  return (
    <div className="Home-app bg-1abc9c">
        <h1 className="title-About mt-2 mb-3">ABOUT COMPONENT</h1>
            <div className="shape d-flex justify-content-center align-items-center">
                <div className="Right">
                </div>
                <i className="fa-solid fa-star text-white mx-3"></i>
                <div className="Left">
                </div>
            </div>
        <div className="container">
            <div className="About-text d-flex flex-wrap text-white px-5 mt-3">

                <div className=" col-lg-6 col-md-12 ps-md-5 ">
                    <p className="m-0 par-left"> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>

                <div className=" col-lg-6 col-md-12 pe-5 ">
                    <p className="m-0 par-right"> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div> 
        </div> 
    </div>        
)
}
