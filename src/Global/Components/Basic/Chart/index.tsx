// #region Global Imports
import { theme } from "@Global/Theme";
import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
// #endregion Global Imports

// #region Local Imports
import { IChart } from "./Chart";
// #endregion Local Imports

export const Chart: React.FunctionComponent<IChart.IProps> = props => {
  const { data, width, height, type, dataKey, stroke, strokeWidth } = props;

  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="1%" stopColor={stroke} stopOpacity={0.4} />
            <stop offset="55%" stopColor={stroke} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip
          wrapperStyle={{ backgroundColor: theme.colors.background }}
          itemStyle={{ color: theme.colors.black100, fontWeight: 500 }}
          formatter={(value: any) => {
            return `${value}`;
          }}
          labelFormatter={() => {
            return ``;
          }}
          contentStyle={{
            border: `1px solid ${theme.colors.purple100}`,
            boxShadow:
              "0px 1px 2px rgba(21, 21, 21, 0.02), 0px 4px 8px rgba(21, 21, 21, 0.08)",
            borderRadius: "8px",
            backgroundColor: theme.colors.background,
          }}
        />
        <Area
          type={type}
          dataKey={dataKey}
          stroke={stroke}
          fillOpacity={1}
          strokeWidth={strokeWidth}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
