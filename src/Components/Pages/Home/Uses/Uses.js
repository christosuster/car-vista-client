import React from "react";

const Uses = () => {
  return (
    <div>
      <div className="container my-12">
        <div className="text-center flex justify-center items-center text-5xl font-bold">
          <h1 className="text-blue-600 px-2">Working </h1>
          <h1 className="text-yellow-500 px-2"> Process</h1>
        </div>
        <div className="container my-10">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 pb-10">
            <div className="col">
              <div className="card border-0 bg-slate-950">
                <div className="card-body">
                  <div className="text-blue-600 text-center text-4xl font-extrabold py-2">
                    <h1>1</h1>
                  </div>
                  <div className="flex justify-center items-center ">
                    <h2 className="card-title text-blue-600 font-extrabold text-lg text-center text-2xl">
                      Browse Inventory and Research
                    </h2>
                  </div>
                  <br />
                  <div className="text-center">
                    <p className="text-muted font-extrabold">
                      Start by browsing the website's inventory, narrow down
                      your options, and thoroughly research the chosen vehicle
                      to ensure it meets your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 bg-slate-950">
                <div className="card-body">
                  <div className="text-blue-600 text-center text-4xl font-extrabold py-2">
                    <h1>2</h1>
                  </div>
                  <div className="flex justify-center items-center ">
                    <h2 className="card-title text-blue-600 font-extrabold text-lg text-center text-2xl">
                      Test Drive and Negotiate
                    </h2>
                  </div>
                  <br />
                  <div className="text-center">
                    <p className="text-muted font-extrabold">
                      Schedule a test drive, inspect the car, and negotiate the
                      price and terms with the seller to finalize the deal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 bg-slate-950">
                <div className="card-body">
                  <div className="text-blue-600 text-center text-4xl font-extrabold py-2">
                    <h1>3</h1>
                  </div>
                  <div className="flex justify-center items-center ">
                    <h2 className="card-title text-blue-600 font-extrabold text-lg text-center text-2xl">
                      Payment and Delivery
                    </h2>
                  </div>
                  <br />
                  <div className="text-center">
                    <p className="text-muted font-extrabold">
                      Make the payment, complete the necessary paperwork, and
                      arrange for the car's delivery or pickup to enjoy your new
                      purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uses;
