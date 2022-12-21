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
    mpprice: 6000
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    pname: "FitBit Versa Smartwatch",
    pdes: "Versa 3 Health and Fitness Smartwatch with GPS and heart rate tracking",
    pcode: 1002,
    pprice: 1600,
    mpprice: 2000
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    pname: "Sony Wireless Headphones",
    pdes: "WI-C100 Headphones with Noise Cancellation for easier handsfree experience-blue",
    pcode: 1003,
    pprice: 300,
    mpprice: 0
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    pname: "Bose Portable Speaker",
    pdes: "Sound Flex Bluetooth Portable Speaker,Wireless Waterproof Speaker for Outdoor travel Black",
    pcode: 1004,
    pprice: 1800,
    mpprice: 2000
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pname: "Samsung Galaxy Tablet",
    pdes: "AB tablet WiFi 7040 Mah Battery 10.5 inch TFT screen four speakers 32 GB 3 GB RAM Rose",
    pcode: 1005,
    pprice: 2000,
    mpprice: 0
  },
  {
    pid: uniqueID(),
    pimg: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    pname: "EPSON inkjet printer",
    pdes: "EPSON workforce pro WF 3280 DWF all in one printer Fax,Scan,Copy and Print",
    pcode: 1006,
    pprice: 2500,
    mpprice: 3000
  },
];

let view = arr.map(display)
function display(obj) {
  return `
  <div class="col-md-4 col-sm-6 mt-3">
      <div class="card">
        <img src="${obj.pimg}" alt="" style="height: 240px" />
        <div class="card-body">
          <div>
            <h4>${obj.pname}</h4>
          </div>

          <div>
            <p>${obj.pdes}</p>
          </div>

          <div>
            <p>Product Code: ${obj.pcode}</p>
          </div>

          <div class="dropdown">
            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">
              See More Information
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Product Description</a></li>
            </ul>
          </div>
          <div class="mt-5">
            
         Price: SEK ${obj.pprice} <del class="text-danger">SEK ${obj.mpprice}</del>
         
        </div>
    

        
          <div class="d-flex justify-content-end">
            <button type="button" onclick = "addTo('${obj.pname}','${obj.pprice}','${obj.mpprice}','${obj.pid}')" class="btn btn-dark">Add to cart</button>
         
        </div>
      </div>
    </div>
  `
};

for (let i = 0; i < view.length; i++) {
  document.getElementById('disp').innerHTML = document.getElementById('disp').innerHTML + view[i];
};
let myid = 0;
let tota = 0;
let mid = [];
function addTo(name, price, MRP, prodid) {
  if (!mid.includes(prodid)) {
    document.getElementById("wish").innerHTML += ` <li id="${myid}">${name} - ${price} (You saved SEK ${MRP - price}) <span onclick="del('${myid}','${price}','${prodid}')" class="text-danger"> Remove</span> </li>`;
    mid.push(prodid);
    console.log(mid.includes(prodid));
    tota = +tota + +price;
    document.getElementById('total').innerHTML =
      `<div class="col-md d-flex justify-content-center align-items-center">
    <h3 id="nam">Your Wishlist total is: SEK "${tota}"</h3>
    </div>`
    myid++;
  }

  else {
    alert('Item already exists');
  }

}

function del(pro, cost, pid) {
  console.log(pro);
  let a = document.getElementById(pro);

  a.remove();
  let d = mid.indexOf(pid);
  mid.splice(d, 1);
  tota = tota - cost;
  console.log(tota);
  document.getElementById("nam").innerHTML = `Your Wishlist total is ${tota}`;
}



