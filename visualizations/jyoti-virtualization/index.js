import React from "react";
 
import { AreaChart, LineChart, PieChart,BarChart } from "nr1";
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading">
      <h1>Hey!</h1>
      <Grid>
        <GridItem columnSpan={6}>
          <AreaChart
            accountId={4439967}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzOTk2N3xJTkZSQXxOQXw2NjgxOTk1NDgxNDM4MTgzNDUy') TIMESERIES AUTO"
            fullWidth
          />
        </GridItem>
        <GridItem columnSpan={6}>
          <LineChart
            accountId={4439967}
            query="SELECT average(diskUsedPercent) AS `Storage used %` FROM StorageSample WHERE (entityGuid = 'NDQzOTk2N3xJTkZSQXxOQXw2NjgxOTk1NDgxNDM4MTgzNDUy') TIMESERIES AUTO"
            fullWidth
          />
        </GridItem>
        <GridItem columnSpan={6}>
          <PieChart
            accountId={4439967}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzOTk2N3xJTkZSQXxOQXw2NjgxOTk1NDgxNDM4MTgzNDUy') TIMESERIES AUTO"
            fullWidth
          />
        </GridItem>
        <GridItem columnSpan={6}>
          <BarChart
            accountId={4439967}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzOTk2N3xJTkZSQXxOQXw2NjgxOTk1NDgxNDM4MTgzNDUy') TIMESERIES AUTO"
            fullWidth
          />
        </GridItem>
      </Grid>
    </div>
  );
};
 
export default index;