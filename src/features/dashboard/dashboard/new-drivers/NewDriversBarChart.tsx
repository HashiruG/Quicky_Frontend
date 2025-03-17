import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import chartData from "./NewDriversBarChartDataSet";

const chartConfig = {
  drivers: {
    label: "Drivers",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function NewDriversBarChart() {
  const [activeChart, setActiveChart] = React.useState<"daily" | "monthly">(
    "daily"
  );

  const monthlyData = React.useMemo(() => {
    const monthlyMap = new Map();
    chartData.forEach(({ date, drivers }) => {
      const month = date.slice(0, 7);
      monthlyMap.set(month, (monthlyMap.get(month) || 0) + drivers);
    });
    return Array.from(monthlyMap, ([date, drivers]) => ({ date, drivers }));
  }, []);

  const dataToShow = activeChart === "daily" ? chartData : monthlyData;

  const total = React.useMemo(
    () => dataToShow.reduce((acc, curr) => acc + curr.drivers, 0),
    [dataToShow]
  );

  const latestMonth = chartData
    .map(({ date }) => date.slice(0, 7))
    .sort()
    .pop();

  const latestMonthDriversCount = chartData
    .filter(({ date }) => date.startsWith(latestMonth || ""))
    .reduce((acc, { drivers }) => acc + drivers, 0);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>
            <span className="text-lime-500">{latestMonthDriversCount}</span> new
            drivers in this month
          </CardTitle>
        </div>
        <div className="flex">
          {["daily", "monthly"].map((key) => (
            <button
              key={key}
              data-active={activeChart === key}
              className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
              onClick={() => setActiveChart(key as "daily" | "monthly")}
            >
              <span className="text-xs text-muted-foreground">
                {key === "daily" ? "Daily" : "Monthly"} View
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {total.toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={dataToShow}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="drivers"
                  labelFormatter={(value) => value}
                />
              }
            />
            <Bar dataKey="drivers" fill="var(--color-drivers)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
