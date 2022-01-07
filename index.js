
//document.getElementById("count").innerText = 5

let Count= document.getElementById("count")

let count = 0

function increment() {
    count= count +1 
    Count.innerHTML=count
    console.log(count)
    
}
increment()

function decrement(){
    count= count -1 
    Count.innerHTML=count
    console.log(count)
    if (count<0) {
        document.write("<h1>you cant do that. Please Refresh the page</h1>")
    }

}
decrement()

let mah=document.getElementById("ma")

function save() {
    if (count===0) {
       
    mah.innerHTML="请输入您的订单"
        
    } else {
        mah.innerHTML="<h1>"+count+"</h1>" + " 全部的"
        console.log(count);
    }


}
save();
