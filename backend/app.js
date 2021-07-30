 //function for retrieve index of where is store a specific partecipant
 var find_index = function(array,name)
 {

    for(var i=0;i<array.length;i++)
    {

      var element =array[i];

      if(element.name==name)
        {
          return i;
        }
        
    }

    return -1;

 }

//function for calcuate the ranking grouping by name and sorting by score
var calculate_ranking = function(array1, key) {


  //array with all session results
  var app_array=[];

  array1.forEach(function(element) {
  var key=find_index(app_array,element['name']);


    if(key==-1)
    {

      var new_element={};
      new_element['name']=element['name'];
      new_element['score']=element['score'];

      app_array.push(new_element);

    }
    else
    {

      app_array[key]['score']=app_array[key]['score']+element['score'];

    }


  })

  app_array.sort(function (a, b) {
   return b.score - a.score;
  });

  return app_array;

};



var results=[
  {"name":"paul", "score":5},
  {"name":"marcos", "score":8},
  {"name":"raul", "score":6},
  {"name":"marcos", "score":2}

];


// service setup
var express = require("express");
var app = express();
app.listen(3000, () => {
console.log("running port 3000");
});

//service for raking list
//app.get("/ranking", (req, res, next) => {
  //res.json(calculate_ranking(results));
//});

//service for insert new result (name, score)
app.get("/inscore", (req, res, next) => {

  var name = req.query.name;
  var score = req.query.score;

  console.log("added score "+score+" for "+name);
  var new_obj={};
  new_obj['name']=name;
  new_obj['score']=parseInt(score);

  if(score >=0 && score <=10)
  {
    results.push(new_obj);

    res.json(calculate_ranking(results));

  }
  else
  {
    var result={"result":"failed", msg:"score out of bound"}
  }

});