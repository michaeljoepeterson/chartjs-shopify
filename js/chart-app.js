class ChartApp{
    chartIds;
    chartTitles;

    chartContainerId = '#charts-container';
    chartContainer;

    baseCharts = {};
    datasets;
    //intake shopify created options and create charts
    constructor(options){
        try{
            this.checkOptions(options);
            this.chartContainer = $(this.chartContainerId);
            this.chartIds = this.buildIds(options.chartTitles);
            this.buildChartElements();
            //will be dataset label
            this.chartTitles = options.chartTitles;
            this.datasets = this.buildDatasets(options);
            this.buildCharts(this.datasets,options);
            console.log('build charts');
        }
        catch(err){
            console.log('error with chart app: ',err);
            throw err;
        }
    }

    buildCharts(datasets,options){
        this.chartIds.forEach((id,i) => {
            let chartOptions = {
                chartId:id,
                labels:options.dataLabels[i],
                type:options.types[i],
                datasets:datasets[i]
            };
            let newChart = new BaseChart(chartOptions);
            this.baseCharts[id] = newChart;
        });
    }

    buildChartElements(){
        this.chartIds.forEach(id => {
            let chartDiv = $(`<div class="col-lg-3">
            <canvas id=${id}></canvas>
            </div>`);
            $(this.chartContainer).append(chartDiv);
        });
    }

    buildDatasets(options){
        let datasets = [];

        this.chartIds.forEach((id,i) => {
            let dataset = [{}];
            dataset[0].label = options.chartTitles[i];
            dataset[0].backgroundColor = options.chartColors[i];
            dataset[0].borderColor = options.borderColors[i];
            dataset[0].borderWidth = options.borderWidths[i];
            dataset[0].data = options.allChartData[i];
            datasets.push(dataset);
        });

        return datasets;
    }

    cleanData(){

    }

    buildIds(chartTitles){
        let ids = chartTitles.map(title => {
            let id = title.replace(/\s/g,'');
            return id;
        });

        return ids;
    }

    checkOptions(options){
        if(!options){
            let err ={
                message:'No chart data'
            };
            throw err;
        }
        if(!options.allChartData){
            let err ={
                message:'Missing chart data'
            };
            throw err;
        }
    }
}