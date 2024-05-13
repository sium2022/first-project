export function MyHeader(){
return <header className="bg-white">
<div className="flex flex-col lg:flex-row justify-between items-center">
          <div>
            <h1 className="text-7xl font-extrabold">
              It's good <br/>
              tea time at The <br/>
              Tea House</h1>
            <p className="py-6">Tea and Botanical Solutions Supplier Give Optimum <br/> Satisfaction To Your Taste Buds.</p>
            <button className="btn btn-primary bg-gradient-to-r from-[#FF8938] to-[#F00] border-none text-white">Explore More <i className="fa-solid fa-square-arrow-up-right fa-beat-fade"></i></button>
          </div>

          <div>
            <img src="@/public/banner.jpg" className="w-auto rounded-lg" />

            <div className="-mt-32 mx-28 flex drop-shadow-xl rounded-xl px-6 py-5 items-center gap-4 w-64 h-24 bg-white">
              {/* <i className="fa-solid fa-star fa-2xl bg-sky-500"></i> */}
              <div>
                <h3 className="text-3xl font-extrabold">5.00</h3>
                <p>Trust Pilot Ratings</p>
              </div>
            </div>
          </div>
        </div>
</header>
;
}