function des(id) {
  var dots = document.getElementsByClassName(id)[0];
  var moreText = document.getElementById(id);
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    dots.innerHTML = 'Read Less <i class="fa-solid fa-chevron-up"></i>';
  } else {
    moreText.style.display = "none";
    dots.innerHTML = `Read more <i class="fa-solid fa-chevron-down"></i>`;
  }
}
function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}
let arr = [
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pname: "Fujfilm Mirrorless Camera",
    pdes: "X-A7 24.2MP Mirrorless Camera with XC 15-45mm Lens Camel",
    pcode: 1001,
    pprice: 4500,
    mpprice: 6000,
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    pname: "FitBit Versa Smartwatch",
    pdes: "Versa 3 Health and Fitness Smartwatch with GPS and heart rate tracking",
    pcode: 1002,
    pprice: 1600,
    mpprice: 2000,
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    pname: "Sony Wireless Headphones",
    pdes: "WI-C100 Headphones with Noise Cancellation for easier handsfree experience-blue",
    pcode: 1003,
    pprice: 300,
    mpprice: 0,
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    pname: "Bose Portable Speaker",
    pdes: "Sound Flex Bluetooth Portable Speaker,Wireless Waterproof Speaker for Outdoor travel Black",
    pcode: 1004,
    pprice: 1800,
    mpprice: 2000,
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pname: "Samsung Galaxy Tablet",
    pdes: "AB tablet WiFi 7040 Mah Battery 10.5 inch TFT screen four speakers 32 GB 3 GB RAM Rose",
    pcode: 1005,
    pprice: 2000,
    mpprice: 0,
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    pname: "EPSON inkjet printer",
    pdes: "EPSON workforce pro WF 3280 DWF all in one printer Fax,Scan,Copy and Print",
    pcode: 1006,
    pprice: 2500,
    mpprice: 3000,
  },
];
let view = arr.map(display);
function display(obj) {
  return `
  <div class="card">
      <img src="${obj.pimg}"  style="width:100%; height:50%;">
      <div class="cardbody">
        <h2><b>${obj.pname}</b></h2>
        <p>${obj.pdes}</p>
      </div>
      <div>
        <p>Product code: ${obj.pcode}</p>
      </div>
      <div class="cardfooter">
        <div class="fix">
          <span onclick="des('${obj.pid}1')" class="${obj.pid}1  tc insidePara">Product Description</span><br>
          <p id="${obj.pid}1"class="insidePara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat magnam alias,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat magnam aliasLorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat magnam alias</p>
        </div>
        <div class="outText">
          
          Price: ${obj.pprice} <del class="rm">SEK ${obj.mpprice}</del> 
         
        </div>
       <div class="myclass pt-3">
        <button class = "button myclass" onclick = "addTo('${obj.pid}')">Add to List</button>
      </div>
    </div>
  </div>  
  `;
}
document.getElementById("disp").innerHTML = view.join(" ");

let wishlist = [];

function find_obj(pid) {
  return arr.find((val) => {
    return val.pid == pid ? val : undefined;
  });
}

function addTo(PID) {
  let object = find_obj(PID);


  if (wishlist.includes(object))
   {
      alert("Item already exists");
      return false;
  } 
  
  
    wishlist.push(object);  
    myWishlist();
}


function myWishlist()
{
  let totalWishlistPrice = 0;
      if (wishlist.length > 0) {
        let wishListHtml = wishlist.map(function (element) {
          const { pid, pname, pprice,mpprice } = element;
          totalWishlistPrice += pprice; 
          let ans = (mpprice - pprice > 0)? `(You saved SEK ${mpprice - pprice})`: `(You saved 0)`;
          return (
          ` <li class="${pid}">${pname} - ${pprice} ${ans} <span onclick="delTag('${pid}')" class=" rm ${pid}"> Remove</span> </li>
          <br>
          `);
        });
        document.getElementById("wish").innerHTML  = wishListHtml.join("\n");
          
         } 
      else {
          document.getElementById("wish").innerHTML  = "";
      }
      document.getElementById("total").innerHTML = `<div>
    <h3 id="nam">Your Wishlist total is SEK "${totalWishlistPrice}"</h3>
    </div>`;

}


function delTag(pid) {
  let object=find_obj(pid);
  let a = document.getElementsByClassName(pid)[0];
  let b = document.getElementsByClassName(pid)[1];
  a.remove();
  b.remove();
  let d = wishlist.indexOf(object);
  wishlist.splice(d, 1);
  myWishlist();
}
