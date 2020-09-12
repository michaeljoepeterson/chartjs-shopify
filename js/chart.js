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

    colorKey = 'color';
    chartId;
    chart;

    constructor(options){
        if(options){
            try{
                this.chartOptions.type = options.type;
                this.chartOptions.data.labels = options.labels;
                this.chartOptions.data.datasets = options.datasets;
                this.chartId = options.chartId;
                //debugger;
                this.chartOptions.options = this.addDefaultOptions(options);
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
            if(datasetOptions[option]){
                if(option.toLowerCase().includes(this.colorKey)){
                    if(datasetOptions[option].length === 1){
                        datasets[0][option] = datasetOptions[option][0];
                    }
                }
                datasets[0][option] = datasetOptions[option];
            }
        }

        return datasets;
    }

    buildChart(){
        let canvas = document.getElementById(this.chartId);
        let ctx = canvas.getContext('2d');
        this.chart = new Chart(ctx, this.chartOptions);
    }

    addDefaultOptions(options){
        //eventually could do this to store chart default options
        const noAxis = {
            radar:false,
            pie:false,
            doughnut:false,
            line:true,
            bar:true
        };
        let beginAtZero = noAxis[options.type];
        let defaultOptions = {};
        if(beginAtZero){
            defaultOptions = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: beginAtZero
                        }
                    }]
                }
            };

        }
  
        return defaultOptions;
    }

}