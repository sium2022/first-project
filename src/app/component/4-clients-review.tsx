function ClientsReview (){
    return <div>
         <section className="my-24 rounded-lg bg-gradient-to-r from-[#FF8938] to-[#F00] px-16 py-24 flex flex-col lg:flex-row gap-12">
        <div className=" flex items-center lg:pr-28">
          <div className="space-y-5">
            <h2 className="text-5xl font-extrabold text-white mb-5">Meet Our Super <br/> Clients</h2>

          <p className="text-white mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

          <button className="btn border-none bg-white text-orange-400">Show All</button>
          </div>
        </div>

        {/* review container */}
        <div className="relative">
            
          {/* next review */}
          <div className="relative p-10 z-0 bg-white rounded-lg opacity-40 mb-16">
            <img className="absolute -top-5 -left-5 rounded-full bg-white p-1" src="images/client.png" alt=""/>
            <p className="font-extralight mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <h4 className="font-bold">Ilham Yuda</h4>

            <p className="font-medium">Businessman</p>

            <div className="flex justify-end"><img src="images/circles.png" alt=""/></div>
          </div>

          {/* current review */}
          <div className="absolute top-40 lg:-left-32 z-20 lg:w-[430px] p-10 bg-white rounded-lg">
            <img className="absolute -top-5 -left-5 rounded-full bg-white p-1" src="images/client.png" alt=""/>
            <p className="font-extralight mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <h4 className="font-bold">Ilham Yuda</h4>

            <p className="font-medium">Businessman</p>

            <div className="flex justify-end"><img src="images/circles.png" alt=""/></div>
          </div>

          {/* previous review */}
          <div className="relative p-10 z-0 bg-white rounded-lg opacity-40">
            <img className="absolute -top-5 -left-5 rounded-full bg-white p-1" src="images/client.png" alt=""/>
            <p className="font-extralight mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <h4 className="font-bold">Ilham Yuda</h4>

            <p className="font-medium">Businessman</p>

            <div className="flex justify-end"><img src="images/circles.png" alt=""/></div>
          </div>
        </div>

      </section>
    </div>;
}

export default ClientsReview;