import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Data from "./Data";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);

    setTours(newTours);
  };

  const fetchData = async () => {
    setLoading(true); //incase fetching from api

    try {
      //fetch from api if u want

      setLoading(false);
      setTours(Data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours found!</h2>
          <button className="btn" onClick={fetchData}>refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
