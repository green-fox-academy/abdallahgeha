require('es6-promise');
'use strict';

    var promise = new Promise(function (fulfill, reject) {
      fulfill(setTimeout(()=>{
        return
      },300))
    }).then(()=>{console.log('FULFILLED!')});

    