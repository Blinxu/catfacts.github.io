const api_url = "https://catfact.ninja/fact";

async function catfacts() {
    const load = document.getElementById("butt");
    loading();
    const response = await fetch(api_url);
    const data = await response.json();
    if (response) {
        load.classList.remove('is-loading');
        load.classList.add('is-primary');
    }
    console.log(data)
    show(data)

    function show(facts) {
        let catto = `<li>${facts.fact}</li>`;
        document.getElementById("cat").innerHTML = catto;
    }

    function loading() {
        load.classList.remove('is-primary');
        load.classList.add('is-loading');
    }
}






