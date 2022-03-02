const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // clear previous data.
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(result => displaySearchResult(result.data))
        // Try to do error handeling.
        .catch(error => console.log(error));
}
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-iphone');
    // clear previous data
    searchResult.textContent = '';
    // make dynamik HTML
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="phone-brand">${data.brand}</h4>
        <h5 class="card-title">${data.phone_name}</h5>
        <p class="card-text">${data.slug}</p>
        <button onclick="loadPhoneDetail('${data.brand}')" class="btn btn-success bg-danger text-white">Details</button>
        </div>
        </div>
        `;
        searchResult.appendChild(div)

    })
}
// For see phone details.
const loadPhoneDetail = brand => {
    const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089${status}`;
    fetch(url)
        .then(res => res.json())
        .then(final => displayStorage(final.data));

    const displayStorage = mainFeatures => {
        console.log(mainFeatures);


        const container = document.getElementById('phone-details');

        //  Clear previous detaisl card

        container.textContent = '';
        const div = document.createElement('div');
        div.classList.add('card');

        //    Show phone details in details card.

        div.innerHTML = `
   <img src="${mainFeatures.image}" class="card-img-top" alt="...">
   <div class="card-body">



<h5 class="card-title">${mainFeatures.brand}</h5>
<h5 class="card-title">${mainFeatures.mainFeatures.chipSet}</h5>
<h5 class="card-title">${mainFeatures.mainFeatures.displaySize}</h5>
<h5 class="card-title">${mainFeatures.mainFeatures.memory}</h5>
<h5 class="card-title">${mainFeatures.mainFeatures.sensors[0]}</h5>
<h5 class="card-title">${mainFeatures.mainFeatures.sensors[1]}</h5>
<h5 class="card-title">${mainFeatures.mainFeatures.sensors[2]}</h5>
<h5 class="card-title">${mainFeatures.mainFeatures.sensors[3]}</h5>
<h5 class="card-title">${mainFeatures.mainFeatures.sensors[4]}</h5>
<h5 class="card-title">${mainFeatures.mainFeatures.storage}</h5>
<h5 class="card-title">${mainFeatures.others.Bluetooth}</h5>
<h5 class="card-title">${mainFeatures.others.GPS}</h5>
<h5 class="card-title">${mainFeatures.others.NFC}</h5>
<h5 class="card-title">${mainFeatures.others.Radio}</h5>
<h5 class="card-title">${mainFeatures.others.USB}</h5>
<h5 class="card-title">${mainFeatures.others.WLAN}</h5>   
       <a href="https://youtu.be/IDtC-aNU02c" class="btn btn-primary">See hear Phone Details</a>
     </div>
   `;
        container.appendChild(div);
    }
}
