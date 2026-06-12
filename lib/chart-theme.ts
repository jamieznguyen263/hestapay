/**
 * HestaPay ECharts theme config.
 *
 * Provides a consistent chart palette aligned with the HestaPay brand
 * (primary green #10b981 + premium fintech neutrals).
 *
 * Usage:
 *   import { chartTheme } from "@/lib/chart-theme";
 *   <ReactECharts option={{ ... }} theme={chartTheme} />
 */

export const chartTheme = "hestapay";

export const hestapayChartTheme = {
  color: [
    "#10b981", // primary
    "#34d399", // primary-light
    "#059669", // primary-dark
    "#6ee7b7", // primary-lighter
    "#047857", // primary-darker
    "#a3a3a3", // muted
    "#d4d4d4", // border
  ],

  backgroundColor: "transparent",

  textStyle: {
    color: "#737373",
    fontFamily:
      "var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system, sans-serif",
    fontSize: 11,
  },

  title: {
    textStyle: {
      color: "#171717",
      fontSize: 14,
      fontWeight: 600,
    },
    subtextStyle: {
      color: "#a3a3a3",
      fontSize: 11,
    },
  },

  legend: {
    textStyle: {
      color: "#737373",
      fontSize: 10,
    },
    inactiveColor: "#d4d4d4",
  },

  tooltip: {
    backgroundColor: "#ffffff",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    textStyle: {
      color: "#171717",
      fontSize: 11,
    },
    extraCssText:
      "border-radius: 12px; box-shadow: 0 4px 16px -4px rgba(0,0,0,0.08), 0 2px 6px -2px rgba(0,0,0,0.04);",
  },

  categoryAxis: {
    axisLine: {
      lineStyle: { color: "#e5e5e5" },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#a3a3a3",
      fontSize: 10,
    },
    splitLine: {
      show: false,
    },
  },

  valueAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#a3a3a3",
      fontSize: 10,
    },
    splitLine: {
      lineStyle: {
        color: "#f5f5f5",
        type: "dashed" as const,
      },
    },
  },

  radar: {
    axisName: {
      color: "#737373",
      fontSize: 10,
    },
    splitArea: {
      areaStyle: {
        color: ["transparent"],
      },
    },
    splitLine: {
      lineStyle: { color: "#f0f0f0" },
    },
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.3, "#10b981"],
          [0.7, "#34d399"],
          [1, "#e5e5e5"],
        ],
        width: 8,
      },
    },
    detail: {
      color: "#171717",
      fontSize: 20,
      fontWeight: 600,
    },
  },
};

/**
 * Register this theme with ECharts before first use.
 * Call once at app init (e.g. in a layout or provider).
 */
export function registerHestapayTheme(echarts: {
  registerTheme: (name: string, theme: Record<string, unknown>) => void;
}) {
  echarts.registerTheme(chartTheme, hestapayChartTheme);
}