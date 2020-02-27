/* make two finctions one that does complicated math and the one that wiats for 
the mathe to answer*/
//complicated math
function somemath(){
    for(i = 0; i <1000000; i++){;
        if(i =1000000){
            return i;
        }
    }
}
//where we put our promise
function waitForMath(){
    return new Promise((resolve, reject) => {
        try{
            resolve(somemath());
        } catch(error){
            reject("error: numbers arent real");
        }
    })
}

waitForMath().then(res => {
    console.log(res);
});


git add .Promise