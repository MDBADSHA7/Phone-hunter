const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(result => displaySearchResult(result.data))
        .catch(error => console.log(error));
}
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-iphone');
    // clear previous data
    searchResult.textContent = '';


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
        .then(final => displayStorage(final.data.mainFeatures));
}
const displayStorage = storage => {
    console.log(storage);
    const container = document.getElementById('phone-details');
    // Clear previous detaisl card
    container.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="" class="card-img-top" alt="...">
     <div class="card-body">
          <h5 class="card-title">${storage.displaySize}</h5>
          <h5 class="card-title">${storage.chipSet}</h5>
          <h5 class="card-title">${storage.memory}</h5>
          <h5 class="card-title">${storage.sensors[0]}</h5>
          <h5 class="card-title">${storage.sensors[1]}</h5>
          <h5 class="card-title">${storage.sensors[2]}</h5>
          <h5 class="card-title">${storage.sensors[3]}</h5>
          <h5 class="card-title">${storage.sensors[4]}</h5>
          <h5 class="card-title">${storage.sensors[5]}</h5>
          <h5 class="card-title">${storage.storage}</h5>
       
         <a href="https://youtu.be/IDtC-aNU02c" class="btn btn-primary">See hear Phone Details</a>
       </div>
  `;
    container.appendChild(div);
}