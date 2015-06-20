var bugs = [
                { id : "1434684600000", name : "User authentication failure", isClosed : false, createdAt : new Date(2015,5,19,9,0,0)},
                { id : "1434691800000", name : "Data not persisting in the server", isClosed : false, createdAt : new Date(2015,5,19,11,0,0)},
                { id : "1434511800000", name : "Application not responsive", isClosed : false, createdAt : new Date(2015,5,17,9,0,0)},
                { id : "1434512800000", name : "Application is hardly reliable", isClosed : false, createdAt : new Date(2015,5,9,9,0,0)},
                { id : "1434231800000", name : "Authorization has stopped working", isClosed : false, createdAt : new Date(2015,3,19,9,0,0)}];

bugs.forEach(function(bug){
   localStorage.setItem(bug.id, JSON.stringify(bug));
});
