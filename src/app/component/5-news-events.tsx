function NewsEvents () {
    return <div>
         <section className="text-center my-24 p-5">
        <h2 className="mb-5 text-5xl font-extrabold">News & Events</h2>
        <p className="mb-12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, <br/> by injected humour, or randomised words which don't look even slightly believable. </p>

        {/* news and event cards */}
        <div className="flex flex-col lg:flex-row  gap-6 justify-center">
          {/* card-1 */}
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure><img className="pt-5" src="images/news-1.png" alt="Shoes" /></figure>
            <div className="card-body text-start">
              <p className="font-light">Feb 05, 2027</p>
              <h2 className="card-title font-extrabold text-2xl">Collecting 8 points for discount</h2>
              <p>There are many variations of passages of Lorem Ipsum available.</p>

              <h4 className="font-bold">Learn More</h4>
            </div>
          </div>

          {/* card-2 */}
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure><img className="pt-5" src="images/news-2.png" alt="Shoes" /></figure>
            <div className="card-body text-start">
              <p className="font-light">Feb 05, 2027</p>
              <h2 className="card-title font-extrabold text-2xl">Collecting 8 points for discount</h2>
              <p>There are many variations of passages of Lorem Ipsum available.</p>

              <h4 className="font-bold">Learn More</h4>
            </div>
          </div>

          {/* card-3 */}
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure><img className="pt-5" src="images/news-3.png" alt="Shoes" /></figure>
            <div className="card-body text-start">
              <p className="font-light">Feb 05, 2027</p>
              <h2 className="card-title font-extrabold text-2xl">Collecting 8 points for discount</h2>
              <p>There are many variations of passages of Lorem Ipsum available.</p>

              <h4 className="font-bold">Learn More</h4>
            </div>
          </div>
        </div>
      </section>
    </div>;
}

export default NewsEvents;