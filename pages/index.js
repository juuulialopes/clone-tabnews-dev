function Home () {

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "style.css"; // Substitua pelo caminho do seu arquivo CSS

// Adicionar o link no head do documento
document.head.appendChild(link);
    return <h1>Benho, eu te amo e dê uma risadinha pq sim </h1>
}

export default Home;