console.log("hello");
console.log("world");

document.body.style.backgroundImage = "url('https://images.pexels.com/photos/6331045/pexels-photo-6331045.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')";

var div = document.createElement('div');

function image (){
  var img =  document.createElement("img");
  img.setAttribute("src","https://images.pexels.com/photos/4255489/pexels-photo-4255489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  img.setAttribute("id","restuarant-img");
  img.setAttribute("height","500px");
  img.setAttribute("width","500px");
  img.setAttribute("style","float:left");
  document.body.append(img);
}
image();


function para (){
    let text ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    var content = document.createElement("p");
    // content.setAttribute("style","color:white");
    content.setAttribute("style","margin-top:100px");
    content.innerText = text;
    document.body.append(content);
    console.log(content);
}
para();