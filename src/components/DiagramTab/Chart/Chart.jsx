import css from './Chart.module.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ colors, chartCategories, total }) => {
  const data = {
    labels: chartCategories.map(e => e.name),
    datasets: [
      {
        labels: chartCategories.map(e => e.name),
        data: [...chartCategories.map(e => e.total)],
        backgroundColor: colors,
        borderColor: colors,
        cutout: '70%',
      },
    ],
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;

      ctx.save();
      ctx.font = 'bolder 22px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText(
        `$ ${total}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  const options = {
    plugins: {
      legend: {
        display: false,

        labels: {
          boxWidth: 24,
          boxHeight: 24,
          padding: 26,
        },
      },
    },
  };

  return (
    <div className={css.chartContainer}>
      <h1 className={css.statistics}> Statistics </h1>
      <div className={css.container}>
        <div>
          {chartCategories.length > 0 ? (
            <Doughnut
              data={data}
              options={options}
              plugins={[textCenter]}
            ></Doughnut>
          ) : (
            <div className={css.noChart}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chart;
