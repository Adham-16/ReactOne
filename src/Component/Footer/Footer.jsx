
export function Footer() {
  return (
    <>
        <div className="footer bg-2C3E50 ">
            <div className="cards m-4 text-white d-flex flex-wrap justify-content-center">
                <div className=" col-lg-4 col-md-6 col-sm-12 p-3 ">
                    <div className="card-left text-center"> 
                        <h3>LOCATION</h3> 
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-12 p-3">
                    <div className="card-middle text-center"> 
                        <h3 className="mb-1">AROUND THE WEB</h3> 
                        <i className=" fa-brands fa-facebook mx-1 icon border rounded-5 "></i>
                        <i className=" fa-brands fa-twitter mx-1 icon border rounded-5"></i>
                        <i className=" fa-brands fa-linkedin-in mx-1 icon border rounded-5"></i>
                        <i className=" fa-solid fa-globe mx-1 icon border rounded-5"></i>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-12 p-3">
                    <div className="card-right text-center"> 
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Copyright text-center bg-1A252F " >
            <p className="">
                Copyright © Your Website 2021
            </p>
        </div>
    </>
  )
}
