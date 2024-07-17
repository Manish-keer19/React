

  function customerender(customereact,rootelem){

    let divelem = document.createElement(customereact.type);
      divelem.innerHTML = customereact.text;
      for (const prop in customereact.props) {
           divelem.setAttribute(prop, customereact[prop]);
      }

      rootelem.appendChild(divelem);
  }

let customereact= {
    type:'a',
    props :{
         href: "https://google.com",
         target:"_black",

    }
    , 
    text :" click to visit the google website"

}

let rootelem = document.querySelector("#root");

customerender(customereact,rootelem);