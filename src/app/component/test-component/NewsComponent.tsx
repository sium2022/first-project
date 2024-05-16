function NewsComponent ({title1, description, images, title2}:{title1:string, description: string, images: string, title2: string}){
    return <div>
        <div className="card rounded-xl p-10 lg:w-96 bg-base-100 shadow-xl">
            <figure><img className="pt-5" src={images} alt="" /></figure>
            <div className="card-body text-start">
              <p className="font-light">05 February 2027</p>
              <h2 className="card-title1 font-extrabold text-2xl">{description}</h2>
              <p>{title1}</p>
              <h4 className="font-bold">{title2}</h4>
            </div>
          </div>
    </div>;
}


export default NewsComponent;