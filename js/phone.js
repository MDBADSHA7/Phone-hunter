const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(result => displaySearchResult(result.data));
}
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-iphone');
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
const loadPhoneDetail = brand => {
    const url = `https://openapi.programming-hero.com/api/phone/${brand}`;
    fetch(url)
        .then(res => res.json())
        .then(final => console.log(final.data));
}
loadPhoneDetail();