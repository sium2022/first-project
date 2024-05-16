function GreatTea () {
    return <div>
        <section className="my-24 flex flex-col lg:flex-row gap-12">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 flex-1">
          <div className="rounded-xl bg-gradient-to-r from-red-100 to-amber-100 h-36"></div>

          <div className="row-span-2 rounded-xl bg-[#e6a6231a] px-8 py-12 h-80 flex justify-center">
            <img src="images/fresh-1.png" alt=""/>
          </div>

          <div className="row-span-2 rounded-xl bg-[#5776391a] px-8 py-12 h-80 flex justify-center">
            <img src="images/fresh-2.png" alt=""/>
          </div>

          <div className="rounded-xl bg-gradient-to-r from-[#D9D9D9] to-[#ffffff00] h-36"></div>
        </div>

        <div className="space-y-5 flex-1">
          <h3 className="text-5xl font-extrabold mb-5">Great Tea, Freshly <br/> Presented</h3>

          <p className="mb-7">The meaning of gong cha is chanese is to provide the best tea to emperor from all possessions . It represents the highest quality and self expectation. Establishing in 2006, Gong cha had been deeply appreciated by its custoers  because of good words of mouth and unique customized service orginated from Taiwan.</p>

          <h4 className="text-xl font-extrabold mb-3">Unique Taste</h4>
          <p className="mb-5">A Unique and different style from other teapots gives a luxurious and minimalist impression</p>

          <h4 className="text-xl font-extrabold mb-3">Premium Quality</h4>
          <p className="mb-5">Premium Quality that makes tea more elegant and more durable when you use it.</p>
        </div>
      </section>
    </div>;
}

export default GreatTea;