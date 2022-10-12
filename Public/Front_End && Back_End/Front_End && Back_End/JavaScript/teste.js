var cfg = [
    {type : 'node', id : 'n1', cls : 'fam', text : ' ', dataFullName : ''},
    {type : 'node', id : 'homer', text : 'Homer', dataFullName : 'Homer Simpson', style : { backgroundImage : SIMPSONS.homer }},
    {type : 'node', id : 'marge', text : 'Marge', dataFullName : 'Marge Simpson', style : { backgroundImage : SIMPSONS.marge }},
    {type : 'node', id : 'lisa', text : 'Lisa', dataFullName : 'Lisa Simpson', style : { backgroundImage : SIMPSONS.lisa }},
    {type : 'node', id : 'bart', text : 'Bart', dataFullName : 'Bart Simpson', style : { backgroundImage : SIMPSONS.bart }},
    {type : 'node', id : 'maggie', text : 'Maggie', dataFullName : 'Maggie Simpson', style : { backgroundImage : SIMPSONS.maggie }},
    {type : 'node', id : 'santa', text : 'Helper', dataFullName : 'Santa\'s Little Helper', style : { backgroundImage : SIMPSONS.santa }},

    {type : 'node', id : 'n2', cls : 'fam', text : ' ', dataFullName : ''},
    {type : 'node', id : 'mona', text : 'Mona', dataFullName : 'Mona Simpson', style : { backgroundImage : SIMPSONS.mona }},
    {type : 'node', id : 'herb', text : 'Herb', dataFullName : 'Herb Simpson', style : { backgroundImage : SIMPSONS.herb }},
    {type : 'node', id : 'abraham', text : 'Abraham', dataFullName : 'Abraham Simpson', style : { backgroundImage : SIMPSONS.abraham }},

    {type : 'node', id : 'n3', cls : 'fam', text : ' ', dataFullName : ''},
    {type : 'node', id : 'patty', text : 'Patty', dataFullName : 'Patty Bouvier', style : { backgroundImage : SIMPSONS.patty }},
    {type : 'node', id : 'clancy', text : 'Clancy', dataFullName : 'Clancy Bouvier', style : { backgroundImage : SIMPSONS.clancy }},
    {type : 'node', id : 'jaqueline', text : 'Jaqueline', dataFullName : 'Jaqueline Bouvier', style : { backgroundImage : SIMPSONS.jaqueline }},
    {type : 'node', id : 'selma', text : 'Selma', dataFullName : 'Selma Bouvier', style : { backgroundImage : SIMPSONS.selma }},

    {type : 'node', id : 'n4', cls : 'fam', text : ' ', dataFullName : ''},
    {type : 'node', id : 'ling', text : 'Ling', dataFullName : 'Ling Bouvier', style : { backgroundImage : SIMPSONS.ling }},

    {type : 'link', source : 'n1', target : 'homer'},
    {type : 'link', source : 'n1', target : 'marge'},
    {type : 'link', source : 'n1', target : 'bart'},
    {type : 'link', source : 'n1', target : 'lisa'},
    {type : 'link', source : 'n1', target : 'maggie'},
    {type : 'link', source : 'n1', target : 'santa'},
    
    {type : 'link', source : 'n2', target : 'homer'},
    {type : 'link', source : 'n2', target : 'mona'},
    {type : 'link', source : 'n2', target : 'herb'},
    {type : 'link', source : 'n2', target : 'abraham'},

    {type : 'link', source : 'n3', target : 'marge'},
    {type : 'link', source : 'n3', target : 'patty'},
    {type : 'link', source : 'n3', target : 'selma'},
    {type : 'link', source : 'n3', target : 'clancy'},
    {type : 'link', source : 'n3', target : 'jaqueline'},

    {type : 'link', source : 'n4', target : 'selma'},
    {type : 'link', source : 'n4', target : 'ling'},
]

var cdata = {
    type : 'tree',
    plotarea : {
        margin : 40
    },
    source : {
        align : 'left',
        text : 'Original idea by http://bmdata.co.uk/simpsons/'
    },
    options : {
        aspect : 'graph',
        springLength : 75,
        attractionConstant : 0.8,
        repulsionConstant : 4000,
        repulsionDistanceFactor : 20,
        node : {
            size : 24,
            borderWidth : 3,
            borderColor : '#036',
            backgroundColor : '#fff',
            backgroundRepeat : 'no-repeat',
            backgroundScale : 0.75,
            label : {
                color : '#000',
                fontWeight : 'bold',
                offsetY : 35
            },
            tooltip : {
                text : '%data-full-name'    
            }
        },
        'node[cls-fam]' : {
            size : 12,
            borderWidth : 2,
            borderColor : '#000',
            backgroundColor : '#ccc',
            label : {
                visible : false    
            }
        },
        link : {
            lineWidth : 2,
            lineColor : '#666'
        }
    },
    series : cfg
};

zingchart.render({
  id : 'zc',
  width : 900,
  height : 600,
  output : 'canvas',
  data : cdata
});