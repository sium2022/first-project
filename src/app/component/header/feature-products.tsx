function FeatureProduct () {
    return <div className="container mx-2 md:mx-auto lg:mx-auto">
        <section className="text-center my-24">
        <h2 className="text-5xl font-extrabold mb-5">Our Featured Products</h2>

        <p className="lg:max-w-3xl mx-auto">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

        {/* featured tea card conainer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-24 gap-6">

          {/* first card */}
          {/* <div className="card bg-slate-100 shadow-xl py-8 flex-column">
            <figure><img src="images/tea-1.png" alt="Shoes" /></figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl font-extrabold">Milk Tea</h2>
              <p className="text-base font-normal">Creamer could be replaced by fresh milk</p>
            </div>
          </div> */}

          {/* second card */}
          <div className="card bg-slate-100 shadow-xl py-8">
            <figure><img src="images/tea-2.png" alt="Shoes" /></figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl font-extrabold">Black Tea</h2>
              <p className="text-base font-normal">Creamer could be replaced by fresh milk</p>
            </div>
          </div>

          {/* third card */}
          <div className="card bg-slate-100 shadow-xl py-8">
            <figure><img src="images/tea-3.png" alt="Shoes" /></figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl font-extrabold">Lemon Tea</h2>
              <p className="text-base font-normal">Creamer could be replaced by fresh milk</p>
            </div>
          </div>

          {/* fourth card*/}
          <div className="card bg-slate-100 shadow-xl py-8">
            <figure><img src="images/tea-4.png" alt="Shoes" /></figure>
            <div className="card-body items-center">
              <h2 className="card-title text-2xl font-extrabold">Green Tea</h2>
              <p className="text-base font-normal">Creamer could be replaced by fresh milk</p>
            </div>
          </div>

        </div>

      </section>

    </div>;
}

export default FeatureProduct;