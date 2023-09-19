const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let sid = 'B6304249';
        if(sid) {
            resolve({id: sid, name: 'Thanakrit'});
        } else {
            reject(new Error('Error 404 Bad Rquest'));
        }
    }, 1000);
})

p.then(result => {
    console.log(result);
})
.catch(function(err) {
    console.error(err);
})