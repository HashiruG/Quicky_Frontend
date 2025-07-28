import { useEffect, useState } from "react";
import { Pie, PieChart, Label, Cell } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  chartData as fetchChartData,
  InactiveDriversData,
} from "@/services/dashboard/inactiveDrivers/InactiveDriversApi";

const chartConfig = {} satisfies ChartConfig;

const COLORS = ["#7a8ea3", "#020617"];

export function InactiveDriversPieChart() {
  const id = "pie-active-inactive";
  const [data, setData] = useState<InactiveDriversData[]>([]);

  useEffect(() => {
    async function loadChartData() {
      const result = await fetchChartData();
      setData(result);
    }

    loadChartData();
  }, []);

  const chartData =
    data.length > 0
      ? [
          { name: "Inactive", value: data[0].inactiveDriversCount },
          { name: "Active", value: data[0].activeDriversCount },
        ]
      : [];

  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  let percentage = 0;

  if (
    data &&
    data.length > 0 &&
    typeof data[0].activeDriversCount === "number" &&
    typeof data[0].inactiveDriversCount === "number"
  ) {
    const active = data[0].activeDriversCount;
    const inactive = data[0].inactiveDriversCount;
    const total = active + inactive;

    if (total !== 0) {
      percentage = (active / total) * 100;
      percentage = parseFloat(percentage.toFixed(2));
    }
  }

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader>
        <div className="grid gap-1">
          <CardTitle>
            Active Drivers:{" "}
            <span style={{ color: "#7a8ea3" }}>{percentage}%</span>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 pb-4">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={110}
              strokeWidth={5}
              activeIndex={-1}
              // label removed to avoid slice text
            >
              {chartData.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Drivers
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="flex gap-6 mt-2">
          <div className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#020617" }}
            ></span>
            <span className="text-sm text-muted-foreground">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#7a8ea3" }}
            ></span>
            <span className="text-sm text-muted-foreground">Inactive</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
