"use client";

import ReactECharts from "echarts-for-react";
import { memo, useEffect, useRef } from "react";
import type { EChartsOption } from "echarts";
import { chartTheme, hestapayChartTheme } from "@/lib/chart-theme";

export interface ChartProps {
  /** ECharts option object */
  option: EChartsOption;
  /** Chart height (CSS value). Default: "100%" */
  height?: number | string;
  /** Chart width (CSS value). Default: "100%" */
  width?: number | string;
  /** Additional class names for the container */
  className?: string;
  /** Show loading spinner. Default: false */
  loading?: boolean;
  /** Loading text */
  loadingText?: string;
  /** Inline styles for the container */
  style?: React.CSSProperties;
}

/**
 * HestaPay chart wrapper — a thin reusable component around ECharts.
 *
 * Provides:
 * - Theme registration (registered once on first mount)
 * - Consistent sizing via height/width props
 * - Loading state support
 * - Sensible defaults for premium fintech dashboard/product scenes
 *
 * Usage:
 *   import Chart from "@/components/ui/chart";
 *   <Chart option={{ xAxis: {...}, series: [...] }} height={220} />
 */
const Chart = memo(function Chart({
  option,
  height = "100%",
  width = "100%",
  className,
  loading = false,
  loadingText = "Loading...",
  style,
}: ChartProps) {
  const chartRef = useRef<ReactECharts>(null);
  const themeRegistered = useRef(false);

  useEffect(() => {
    if (themeRegistered.current) return;

    // Register the HestaPay theme on the global echarts object.
    // echarts-for-react uses the echarts singleton internally, so
    // registering on the global ensures the theme is available.
    import("echarts")
      .then((mod) => {
        const echartsLib = mod as unknown as {
          registerTheme?: (name: string, theme: Record<string, unknown>) => void;
        };
        if (typeof echartsLib.registerTheme === "function") {
          echartsLib.registerTheme(chartTheme, hestapayChartTheme);
          themeRegistered.current = true;
        }
      })
      .catch(() => {
        // Theme registration failed; charts will use default echarts colors
      });
  }, []);

  return (
    <div className={className} style={style}>
      <ReactECharts
        ref={chartRef}
        option={option}
        theme={chartTheme}
        style={{ height, width }}
        showLoading={loading}
        loadingOption={{
          text: loadingText,
          color: "#10b981",
          textColor: "#737373",
          maskColor: "rgba(255, 255, 255, 0.7)",
        }}
        opts={{
          renderer: "canvas",
        }}
        notMerge
        lazyUpdate
      />
    </div>
  );
});

export default Chart;