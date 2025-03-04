function submit(){
    let number = parseInt(document.getElementById("number").value);





    let count = 2;
    let arr=[];
    arr[0] = 1;
    arr[1] = 1;

  if(!isNaN(number) && number > 0){
      while(count <= number - 1){
          arr[count] = arr[count - 1] + arr[count - 2];
          count++;
      }

      if(number === 1){
          document.getElementById("text").innerText = "1";
      }else if(count === 2){
          document.getElementById("text").innerText = "1,1";
      }else{
          document.getElementById("text").innerText = arr.join(",");
      }

  }else{
      document.getElementById("text").innerText = "Invalid";
  }



}