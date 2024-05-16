function Footer (){
    return <div>
        <footer className="p-10 bg-gradient-to-r from-[#ff00001a] to-[#ff89381a] text-base-content mx-2">

{/* 1st part */}
<div className="flex flex-col lg:flex-row justify-between items-center mt-24 mb-20">
  <img src="images/cup.png" alt=""/>

  <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
    <p>Ready to get strated?</p>
  <button className="btn text-white bg-gradient-to-r from-[#FF8938] to-[#F00]">Get Strated</button>
  </div>
</div>


{/* 2nd part */}
<div className="footer items-center justify-around">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="email" placeholder="username@site.com" className=" bg-transparent border-b-2 border-black outline-none" /> 
        <button className="btn rounded-full bg-gradient-to-r from-[#FF8938] to-[#F00] text-white">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </fieldset>
  </form>
</div>

{/* 3rd part */}

<div className="mt-14 text-center">
  <aside>
    <p>© 2027 UIDesign.to - All rights reserved.</p>
  </aside>
</div>
</footer>
    </div>;
}

export default Footer;