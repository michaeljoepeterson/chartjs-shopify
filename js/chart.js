class BaseChart{
    //base options
    //limit to single dataset per chart due to shopify limitations in block setting schema
    chartOptions = {
        type:null,
        data:{
            labels:[],
            datasets:[]
        },
        options:{}
    };

    options = {};
    colorKey = 'color';
    chartId;
    chart;

    constructor(options){
        if(options){
            try{
                this.chartOptions.type = options.type;
                this.chartOptions.data.labels = options.labels;
                this.chartOptions.data.datasets = this.buildDatasets(options.datasets);
                this.chartId = options.chartId;
                this.buildChart();
            }
            catch(err){
                console.log('error building charts',err);
            }
        }
    }

    buildDatasets = (datasetOptions) =>{
        let datasets = [{}];

        for(let option in datasetOptions){
            if(option.toLowerCase().includes(this.colorKey)){
                if(datasetOptions[option].length === 1){
                    datasets[0][option] = datasetOptions[option][0];
                }
            }
            datasets[0][option] = datasetOptions[option];
        }

        return datasets;
    }

    buildChart(){
        let ctx = document.getElementById(this.chartId).getContext('2d');
        this.chart = new Chart(ctx, this.chartOptions);
    }

}