import React from "react";
import Market from "./Markets";

const masterMarketList = [
  {
    names: "Kirkland Farmers Market",
    day: "Sunday, Noon-6pm",
    location: "Marina Park, Kirkland.",
  },
  {
    names: "Mercer Island Market",
    day: "Monday, 10am-3pm",
    location: "Crossroads East Parking Lot, in front of Stone Gardens.",
  },
  {
    names: "Crossroads Farmers Market",
    day: "Tuesdays, Noon-6pm",
    location: "Crossroads East Parking Lot, in front of Stone Gardens.",
  },

  {
    names: "Sammamish Farmers Market",
    day: "Wednesdays, 4-7pm",
    location: "801 228th Ave SE, Sammamish 98075.",
  },
  {
    names: "Bellevue Farmers Market",
    day: "Thursdays, 3-7pm",
    location: "Bellevue Presbyterian Church.",
  },
  {
    names: "Redmond Farmers Market",
    day: "Fridays, 9am-3pm",
    location: "Bellevue Presbyterian Church.",
  },
  {
    names: "Issaquah Farmers Market",
    day: "Saturdays, 9am-2pm",
    location: "1730 10th Avenue NW, Issaquah 98027.",
  },
];

function MarketList() {
  return (
    <React.Fragment>
      <hr />
      {masterMarketList.map((market, index) => (
        <Market
          names={market.names}
          day={market.day}
          location={market.location}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default MarketList;
