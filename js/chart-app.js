class ChartApp{
    chartIds;
    chartTitles;
    chartBackgroundColors;

    baseCharts = {};
    //intake shopify created options and create charts
    constructor(options){
        try{
            this.checkOptions();
            this.chartIds = this.buildIds(options.chartTitles);
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