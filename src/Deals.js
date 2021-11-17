import React from 'react'
function Deals() {
  return (
      <section className="sec">
<div className="cour">
         <h1>Courses</h1>
         <h3>Our most popular courses</h3>
</div>
<br/><br/>

<div className="cd">

<div className="cds">
<div className="card">
  <img src="https://s27389.pcdn.co/wp-content/uploads/2017/06/AdobeStock_135990387-1.jpeg" alt="Avatar" />
  <div className="container">
    <h4><b>Machine learning</b></h4>
    <p>Steven Robs</p>
    <button className="btc">Buy</button>
  </div>
</div>
</div>
<br />


<div className="cds">
<div className="card">
  <img src="https://designdrizzle.com/wp-content/uploads/featured_code.jpg" alt="Avatar" />
  <div className="container">
    <h4><b>Data Sturtures</b></h4>
    <p>John Ravis</p>
    <button className="btc">Buy</button>
  </div>
</div>
</div>
<br />

<div className="cds">
<div className="card">
  <img src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1539678040/careers-finance-1v2_blwpqj.jpg" alt="Avatar" />
  <div className="container">
    <h4><b>Finance</b></h4>
    <p>Rachel Lee</p>
    <button className="btc">Buy</button>
  </div>
</div>
</div>

</div>

</section>

    );
  }
    

export default Deals;