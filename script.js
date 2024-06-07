
    const origin = document.getElementById('depart').value;
    const destination = document.getElementById('arrivee').value;
    const km = document.getElementById('km').value;
    const apiKey = 'AIzaSyBs4azg1w_qCfI6KBHHGju-C2ZgGktCNYM';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;
    const url = proxyUrl + apiUrl;
    console.log("proxy url : "+proxyUrl);
    console.log("api url : "+apiUrl);
    console.log("url and proxy : "+url);
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Problème avec la réponse : ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        if (!data.routes || data.routes.length === 0) {
            document.getElementById('tempsTrajet').textContent = '0';
            document.getElementById('heureArrivee').textContent = '0';
            document.getElementById('km').textContent = '0';
            return;
        }
        const route = data.routes[0];
        const leg = route.legs[0];
        const tempsTrajet = leg.duration.text;
        const km = leg.distance.text;
        const geocoder = data.geocoded_waypoints[0].geocoder_status;
        const geocoder1 = data.geocoded_waypoints[1].geocoder_status;
        console.log("geocoder 0 : "+geocoder +" && geocoder 1 : "+geocoder1);
        const heureArrivee = new Date(Date.now() + leg.duration.value * 1000).toLocaleTimeString();

        document.getElementById('km').textContent = km;
        document.getElementById('tempsTrajet').textContent = tempsTrajet;
        document.getElementById('heureArrivee').textContent = heureArrivee;
    })
    .catch(error => {
        console.error('Erreur', error);
        document.getElementById('tempsTrajet').textContent = 'Erreur';
        document.getElementById('heureArrivee').textContent = 'Erreur';
        document.getElementById('km').textContent = 'Erreur';
    });