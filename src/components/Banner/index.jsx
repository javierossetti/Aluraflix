import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
      
        <div className="text-content">
          <h1>Front End</h1>
          <h2>Challenge React</h2>
          <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>

      
        <div className="video-content">
        <iframe  src="https://www.youtube.com/embed/ov7vA5HFe6w" title="Qué Significa Pensar Como Programador" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Banner;
