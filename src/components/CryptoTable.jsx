import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAllAssets } from "../features/crypto/cryptoSlice";
import PriceChangeIndicator from "./PriceChangeIndicator";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  // Memoized number formatter
  const formatNumber = useMemo(() => {
    return (num) => {
      if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
      if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
      if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
      if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
      return `$${num.toFixed(2)}`;
    };
  }, []);

  // Memoized chart options generator
  const getChartOptions = useMemo(() => {
    return (data, color = "#10b981") => ({
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        containLabel: false,
      },
      xAxis: {
        type: "category",
        show: false,
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          type: "line",
          data,
          showSymbol: false,
          smooth: true,
          lineStyle: {
            width: 2,
            color,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: `${color}40` },
              { offset: 1, color: `${color}10` },
            ]),
          },
        },
      ],
      animation: false,
    });
  }, []);

  // Memoized table rows to prevent unnecessary re-renders
  const tableRows = useMemo(() => {
    return assets.map((asset, index) => {
      const chartColor = asset.priceChange7d >= 0 ? "#10b981" : "#ef4444";

      return (
        <tr key={asset.id} className="hover:bg-gray-50">
          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
            {index + 1}
          </td>
          <td className="px-4 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <img
                src={asset.logo}
                alt={asset.name}
                className="w-6 h-6 mr-2"
                loading="lazy"
              />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {asset.name}
                </div>
                <div className="text-sm text-gray-500">{asset.symbol}</div>
              </div>
            </div>
          </td>
          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
            $
            {asset.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </td>
          <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
            <PriceChangeIndicator value={asset.priceChange1h} />
          </td>
          <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
            <PriceChangeIndicator value={asset.priceChange24h} />
          </td>
          <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
            <PriceChangeIndicator value={asset.priceChange7d} />
          </td>
          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
            {formatNumber(asset.marketCap)}
          </td>
          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
            {formatNumber(asset.volume24h)}
          </td>
          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
            {formatNumber(asset.circulatingSupply)} {asset.symbol}
          </td>
          <td className="px-4 py-4 whitespace-nowrap">
            <div className="w-24 h-10">
              <ReactECharts
                option={getChartOptions(asset.sparkline, chartColor)}
                style={{ height: "100%", width: "100%" }}
                opts={{ renderer: "svg" }} // Use SVG for better performance
              />
            </div>
          </td>
        </tr>
      );
    });
  }, [assets, formatNumber, getChartOptions]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      {/* Search and Last Updated */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search coins..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <i className="ri-search-line text-gray-400"></i>
          </div>
        </div>
        <div className="text-sm text-gray-500 whitespace-nowrap">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                1h %
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                24h %
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                7d %
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Market Cap
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Volume (24h)
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Circulating Supply
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last 7 Days
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableRows}
          </tbody>
        </table>
      </div>

      {/* Market Data Summary */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
        <div>
          <p>The total market value of a cryptocurrency's circulating supply</p>
          <p className="font-medium text-gray-900 mt-1">$1.86T</p>
        </div>
        <div>
          <p>
            A measure of how much of a cryptocurrency was traded in the last 24
            hours
          </p>
          <p className="font-medium text-gray-900 mt-1">$5.72B</p>
        </div>
        <div>
          <p>
            The amount of coins circulating in the market and tradeable by the
            public
          </p>
          <p className="font-medium text-gray-900 mt-1">19.85M BTC</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CryptoTable);
