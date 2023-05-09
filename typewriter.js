const sentence = "hello there from lighthouse labs\n";

let times = 50
for(const char of sentence){

    setTimeout(()=>{
        process.stdout.write(char);
    },times+=50);
}


