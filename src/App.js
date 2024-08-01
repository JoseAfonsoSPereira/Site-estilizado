import img1 from './img1.webp';
import './App.css';

function App() {
  return (
    <div id="container">
    <div id="container2">
      <header id="topo">
       
        <h1>PROGRAMADOR</h1>

      </header>

        <img src={img1} id='img1' alt='Primeira imagem'></img>

        <div class="secao">
          <h2>   Introdução</h2>

          <p>   Programadores e programadoras, conhecidos também com Devs, passam seus dias escrevendo código fonte. Uma sequência de comandos que permite que o computador resolva uma tarefa, imprima algumas folhas, envie um email, peça comida, calcule fretes ou cadastre novos itens em um ecommerce.

          Nós, programadores e programadoras, os devs, somos responsáveis por usar tecnologias, bibliotecas de código e linhas de programação para solucionar um problema. O problema costuma ser quebrado em uma série de requisitos (chamados também de histórias ou funcionalidades), que vão constituir um software, ou um produto digital.

          Essas linhas de código podem parecer estranhas, mas formam uma rotina. O termo algoritmo também aparece, mas costuma estar relacionado a rotinas de código que resolvem problemas um pouco mais próximos da matemática.

          Algumas vezes pensamos no nosso trabalho como a transformação dos dados de entrada em dados de saída. Exemplos? Dado um pedido, a saída é a fatura no cartão. Dados os itens de um livro, a saída é um registro novo no banco de dados. A entrada é o input do nosso programa, a saída é o output do programa.
            </p>

        </div>

        <div class="secao">

          <h2>Habilidades nescessárias </h2>

          <p>Para obter sucesso nessa área e crescer ao longo do tempo é nessessário ter algumas habilidades ou soft skills sendo elas:</p>

          <ul>
            <li>Comunicação.</li>
            <li>Resolução de problemas.</li>
            <li>Trabalho em equipe.</li>
            <li>Curiosidade. </li>
            <li>Programação.</li>
            <li>Teste e depuração.</li>
            <li>Banco de dados.</li>
            <li>Segurança da informação.</li>
          </ul>

        </div>

        <div class="secao">
          <h2>Oportunudade de carreira</h2>
          
          <p>Atualmente devs trabalham em todos os tipos de empresas: de startups a corporações. De agências de marketing a farmácias. Isso acontece pois a tecnologia se tornou essencial nas nossas vidas e as empresas perceberam que não podem mais apenas terceirizar esse departamento: a programação faz parte também do chamado core business de uma companhia.

            Empresas focadas em prestar serviços online, através de um produto ou uma assinatura, costumam ter times de devs gigantescos. Normalmente são empresas que nasceram na época do boom de startups. Mas as grandes corporações, respondendo essa demanda de oferecer seus produtos de forma digital, também passam por essa grande transformação e aumentaram muito suas equipes de programação.</p>

        </div>

        <div class="secao">
          <h2>Ferramentas e tecnologias utilizadas</h2>

          <p>Um programador utiliza de tecnologias como notebook para trabalhar com ferramentas de desenvolvimento como o proprio Visual Studio Code e através de linguagens de programação desenvolver e fazer manutençao em sites</p>


        </div>

        <footer>Produzido por: <a href="">José Afonso</a></footer>

        
      


     </div>
    </div>
  );
}

export default App;
