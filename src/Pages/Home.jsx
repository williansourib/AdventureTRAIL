// Home.js
import React from 'react';
import './Home.css'; // Arquivo de estilos CSS

function Home() {
  return (
    <div className="container">
      {/* Seção de destaque */}
      <section>
        <h2>Bem-vindo ao Adventure Trail!</h2>
        <p>Explore a natureza, descubra novas trilhas e compartilhe suas aventuras!</p>
        {/* Aqui você pode adicionar mais conteúdo, como imagens ou vídeos */}
      </section>

      {/* Seção de informações sobre o projeto */}
      <section>
        <h2>Sobre o Adventure Trail</h2>
        <p>O Adventure Trail é uma plataforma para entusiastas de trilhas que desejam compartilhar suas experiências, descobrir novas trilhas e conectar-se com outros aventureiros.</p>
        {/* Aqui você pode adicionar mais detalhes sobre o projeto */}
      </section>
    </div>
  );
}

export default Home;