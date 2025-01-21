import React, { useState } from 'react';
import './EditModal.css';

const EditModal = ({ cardData, onSave, onClose }) => {
  const [formData, setFormData] = useState(cardData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData); // Guardamos los datos actualizados
    onClose(); // Cerramos el modal
  };

  const handleClear = () => {
   
    setFormData({
      title: '',
      category: 'Front End',
      image: '',
      videoUrl: '',
      description: '',
    });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Editar Card</h2>
        <form>
          <label>
            Título:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Categoría:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Front End">Front End</option>
              <option value="Back End">Back End</option>
              <option value="Innovación y gestión">Innovación y gestión</option>
            </select>
          </label>
          <label>
            Imagen (URL):
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
          <label>
            Video (URL):
            <input
              type="text"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
            />
          </label>
          <label>
            Descripción:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </label>
        </form>
        <div className="modal-actions">
          <button onClick={handleSave} className="save-button">
            Guardar
          </button>
          <button onClick={handleClear} className="clear-button">
            Limpiar
          </button>
          <button onClick={onClose} className="cancel-button">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
