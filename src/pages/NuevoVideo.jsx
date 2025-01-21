import { useState } from 'react';
import axios from 'axios';
import './NuevoVideo.css';
import PropTypes from 'prop-types';

const NuevoVideo = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    videoUrl: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  const categories = [
    'Back End',
    'Front End',
    'Innovación y gestión',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await axios.post('https://678ebaada64c82aeb1213ec9.mockapi.io/videos', formData);
      setMessage('¡Video añadido exitosamente!');
      setFormData({
        title: '',
        category: '',
        image: '',
        videoUrl: '',
        description: '',
      });
    } catch (error) {
      setMessage('Hubo un error al guardar el video.');
    }
  };

  return (
    <div className="nuevo-video">
      <h1>Añadir Nuevo Video</h1>
      <form onSubmit={handleSubmit} className="nuevo-video-form">
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Categoría:
          <select
            className='select-category'
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Imagen (URL):
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Video (URL):
          <input
            type="text"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit" className="submit-button">Guardar</button>
        <button
          type="button"
          className="clear-button"
          onClick={() =>
            setFormData({
              title: '',
              category: '',
              image: '',
              videoUrl: '',
              description: '',
            })
          }
        >
          Limpiar
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};
NuevoVideo.propTypes = {
  formData: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    videoUrl: PropTypes.string,
    description: PropTypes.string,
  }),
  message: PropTypes.string,
};

export default NuevoVideo;
