class ChartApp{
    chartIds;
    chartTitles;
    chartBackgroundColors;

    chartContainerId = '#charts-container';
    chartContainer;

    baseCharts = {};
    //intake shopify created options and create charts
    constructor(options){
        try{
            this.checkOptions(options);
            this.chartContainer = $(this.chartContainerId);
            this.chartIds = this.buildIds(options.chartTitles);
            this.buildChartElements();
            //will be dataset label
            this.chartTitles = options.chartTitles;
            this.chartBackgroundColors = options.chartBackgroundColors;
            this.chartBorderColors = options.chartBackgroundColors;
            //array of arrays
            this.allChartData = options.allChartData;
            console.log('build charts');
        }
        catch(err){
            console.log('error with chart app: ',err);
            throw err;
        }
    }

    buildCharts(){

    }

    buildChartElements(){
        this.chartIds.forEach(id => {
            let chartDiv = $(`<div class="col-lg-3"><canvas id=${id}</div>`);
            $(this.chartContainer).append(chartDiv);
        });
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