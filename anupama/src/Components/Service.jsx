import React from "react";
import "../styles/service.scss";

const Service = (props) => {
  return (
    <>
      <div className={props.className} id={props.id}>
        <div className="section">
          <h1>{props.heading}</h1>

          <img src={props.image} alt="taxi" className="taxiImg" />
          <hr className="dotted" />
          <p>
            Experience the convenience of exploring Mahabaleshwar at your own
            pace with <br />
            our efficient taxi and cab service. Our fleet of well-maintained
            vehicles and <br />
            experienced drivers ensure a smooth and enjoyable ride for our
            customers
          </p>
          <div className="heading"></div>
          <h3>SEDAN, HATCHBACK & SUVs</h3>
          <button className="btn"> BOOK CAB TAXI ON WHATSAPP</button>
        </div>
        <div className="section2">
          <h2>Mahabaleshwar Sightseeing Cab & Taxi</h2>
          <p>(Price starts from Rs, 650/- )</p>
          <hr />

          <div className="section3">
            <div className="row">
              <h3>MAHABALESHWAR DARSHAN-1 (2:30 Hours)</h3>
              <p>
                Old Mahabaleshwar | Panchganga Mandir | Lord Shiva Mandir |
                Aurthor Seat Point | Window Point | Echo Point | Hunting Point |
                Tiger Spring | Castel Rock | Savitri Point | Monkey Point |
                Marjori Point
              </p>
            </div>

            <div className="row">
              <h3>Panchgani/Wai Darshan ( 3 Hours)</h3>
              <p>
                Old Mahabaleshwar | Panchganga Mandir | Lord Shiva Mandir |
                Aurthor Seat Point | Window Point | Echo Point | Hunting Point |
                Tiger Spring | Castel Rock | Savitri Point | Monkey Point |
                Marjori Point
              </p>
            </div>

            <div className="row">
              <h3>MAHABALESHWAR DARSHAN-2 (2:30 Hours) </h3>
              <p>
                Ket s Point | Echo Point | Needel Hole | Strawberry Garden |
                Lodwick Point | Elephant Head | Sunset
              </p>
            </div>

            <div className="row">
              <h3>Panchgani/Wai Darshan ( 3 Hours)</h3>
              <p>
                Ganpati Mandir, Wai | Kashi-Vishweshwar Mandir | Parsi Point |
                Table Land | Bhilar Waterfall (Only Mansoon) | Jam Factory
                (MAPRO GARDEN)
              </p>
            </div>

            <div className="row">
              <h3>MAHABALESHWAR DARSHAN-3 (2 Hours)</h3>
              <p>
                Wilson Point | Ganesh Temple (Machutar Village) | Plato Point |
                Kings Chair | Lingmala Waterfall | Venna Lake.
              </p>
            </div>

            <div className="row">
              <h3>MINI KASHMIR ( 3 Hours) </h3>

              <p>
                Tapola Dam | Water Sports | Triveni Sangam | Bamnoli Point |
                Shooting Point (only for boating)
              </p>
            </div>
            <div className="row">
              <h3>Pratapgad Tour (3 Hour)</h3>
              <p>
                Pratapgad Fort | Bhavani Mandir | Pratap Garden | Tomb of Afzal
                Khan
              </p>
            </div>
            <div className="row">
              <h3>Custom Trips</h3>
              <p>1/2/3 Day Trips | By SEDAN, HATCHBACK & SUVs</p>
            </div>
            <div className="button">
              <button className="btn2"> REQUEST PRICE LIST</button>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="row">
            <h3>FULL DAY CAB AND & TAXI IN MAHABALSHWAR</h3>
            <br />
            <p>
              ( SEDAN,HATCHBACK, SUV etc. | Outstation Cabs | Airport Drops ){" "}
            </p>
          </div>
          <div className="row">
            <h3>Railway station pick and drop services</h3>
            <br />
            <p>
            (By Sedan & SUVs | Pune, Mumbai & Satara Railway station)
            </p>
          </div>
        </div>

        <div className="book">
          <h3>Book Your Cab taxi Now!</h3>
          <h3>Call Us +91 9422607694 / +91 9049885488</h3>
        </div>
      </div>
    </>
  );
};

export default Service;
