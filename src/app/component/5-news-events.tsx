import NewsComponent from "./test-component/NewsComponent";



function NewsEvents () {
    return <div>
         <section className="text-center my-24 p-5">
        <h2 className="mb-5 text-5xl font-extrabold">News & Events</h2>
        <p className="mb-12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, <br/> by injected humour, or randomised words which don't look even slightly believable. </p>

        {/* news and event cards */}
        <div className="flex flex-col lg:flex-row  gap-6 justify-center">
          {/* card-1 */}
          <NewsComponent description="Collecting 8 points for discount" images="images/news-1.png" title1="There are many variations of passages of Lorem Ipsum available." title2="Learn More"/>
          
          {/* card-2 */}
          <NewsComponent description="Collecting 8 points for discount" images="images/news-2.png" title1="There are many variations of passages of Lorem Ipsum available." title2="Learn More"/>

          {/* card-3 */}
          <NewsComponent description="Collecting 8 points for discount" images="images/news-3.png" title1="There are many variations of passages of Lorem Ipsum available." title2="Learn More"/>
          
        </div>
      </section>
    </div>;
}

export default NewsEvents;