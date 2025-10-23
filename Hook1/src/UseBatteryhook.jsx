import { useBattery } from "@uidotdev/usehooks";

function UseBatteryhook() {
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();
  return (
    <div>
      <div className="wrapper">
        <h1>useBattery</h1>
        {!loading ? (
          <>
            <meter value={(level*100)/100}></meter>
            <h1>{charging}</h1>
            <h1>{chargingTime}</h1>
            <h1>{dischargingTime}</h1>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default UseBatteryhook;
