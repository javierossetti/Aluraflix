import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import './Card.css';
import EditModal from '../EditModal/';

const Card = ({ cardData, categoryColor, onDelete, onSave }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = async (updatedCard) => {
    try {
      await onSave(updatedCard); 
      setIsModalOpen(false); 
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  return (
    <div className="card" style={{ borderColor: categoryColor, boxShadow: '0 0 10px #fff, 0 0 5px #fff, 0 0 05px #fff, 0 0 15px #0ff'}}>
      <div className="card-image" onClick={() => setIsVideoPlaying(!isVideoPlaying)}>
        {isVideoPlaying ? (
          <iframe
            width="100%"
            height="315"
            src={cardData.videoUrl}
            title={cardData.title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img src={cardData.image} alt={`Imagen de ${cardData.title}`} />
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title" >{cardData.title}</h3>
        <p className="card-hidden-info">{cardData.description}</p>
      </div>

      <div className="card-actions">
        <button className="card-button edit" onClick={() => setIsModalOpen(true)}>
          <AiOutlineEdit /> Editar
        </button>
        <button className="card-button delete" onClick={() => onDelete(cardData.id)}>
          <AiOutlineDelete /> Eliminar
        </button>
      </div>

      {isModalOpen && (
        <EditModal
          cardData={cardData}
          onSave={handleSave} 
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Card;
