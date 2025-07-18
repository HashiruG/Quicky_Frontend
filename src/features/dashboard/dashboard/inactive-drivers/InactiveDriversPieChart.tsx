import { useEffect, useState } from "react";
import { Pie, PieChart, Label, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const COLORS = ["#EF4444", "#22C55E"];

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

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader>
        <div className="grid gap-1">
          <CardTitle>Driver Status</CardTitle>
          <CardDescription>Active vs Inactive Drivers</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
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
              label={({ name }) => name}
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
      </CardContent>
    </Card>
  );
}
