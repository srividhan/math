data1=0;
data2=0;
function fun1(){
    if(data2==0){
        data=parseInt(document.getElementById("num").value);
        document.getElementById("result").innerHTML=data;
        data1=data;
        data2=data;
    }
    else{
    data=parseInt(document.getElementById("num").value);
    document.getElementById("result").innerHTML=data1+data;
    data1+=data;
    data2+="+"+data;}
}
function fun2(){
    if(data2==0){
        data=parseInt(document.getElementById("num").value);
        document.getElementById("result").innerHTML=data;
        data1=data;
        data2=data;
    }
    else{
    data=parseInt(document.getElementById("num").value);
    document.getElementById("result").innerHTML=data1-data;
    data1-=data;
    data2+="-"+data;}
}
function fun3(){
    if(data2==0){
        data=parseInt(document.getElementById("num").value);
        document.getElementById("result").innerHTML=data;
        data1=data;
        data2=data;
    }
    else{
    data=parseInt(document.getElementById("num").value);
    document.getElementById("result").innerHTML=data1*data;
    data1*=data;
    data2+="*"+data;}
}
function fun4(){
    if(data2==0){
        data=parseInt(document.getElementById("num").value);
        document.getElementById("result").innerHTML=data;
        data1=data;
        data2=data;
    }
    else{
    data=parseInt(document.getElementById("num").value);
    document.getElementById("result").innerHTML=data1/data;
    data1/=data;
    data2+="/"+data;}
}
function fun5(){
    document.getElementById("using").innerHTML=data2;
}
