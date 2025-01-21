import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Banner from '../components/Banner'; 
import './Home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [categorizedVideos, setCategorizedVideos] = useState({
    'Front End': [],
    'Back End': [],
    'Innovación y gestión': []
  });

  useEffect(() => {

    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://678ebaada64c82aeb1213ec9.mockapi.io/videos');
        setVideos(response.data);
        categorizeVideos(response.data); // Clasificar videos
      } catch (error) {
        console.error('Error al obtener los videos:', error);
      }
    };

    fetchVideos();
  }, []);


  const categorizeVideos = (videos) => {
    const categories = {
      'Front End': [],
      'Back End': [],
      'Innovación y gestión': []
    };
    videos.forEach(video => {
      categories[video.category].push(video);
    });
    setCategorizedVideos(categories); 
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://678ebaada64c82aeb1213ec9.mockapi.io/videos/${id}`); 
      const updatedVideos = videos.filter(video => video.id !== id);
      setVideos(updatedVideos);
      categorizeVideos(updatedVideos); 
    } catch (error) {
      console.error('Error al eliminar el video:', error);
    }
  };


  const handleSave = async (updatedCard) => {
    try {
      await axios.put(`https://678ebaada64c82aeb1213ec9.mockapi.io/videos/${updatedCard.id}`, updatedCard);
      const updatedVideos = videos.map((video) =>
        video.id === updatedCard.id ? updatedCard : video
      );
      setVideos(updatedVideos); 
      categorizeVideos(updatedVideos); 
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };
  


  const handleCategoryChange = (updatedCard) => {
    const updatedVideos = videos.map(video => 
      video.id === updatedCard.id ? updatedCard : video
    );
    setVideos(updatedVideos); 
    categorizeVideos(updatedVideos); 
  };

  return (
    <div className="home">
      <Banner />

      {Object.keys(categorizedVideos).map((category) => (
        categorizedVideos[category].length > 0 && (
          <div key={category} className="category-section">
            <h2 className='category-h2' style={{backgroundColor: categoryColorMap[category] }}>{category}</h2>
            <div className="video-list">
              {categorizedVideos[category].map((video) => (
                <Card
                  key={video.id}
                  cardData={video}
                  categoryColor={categoryColorMap[category]}
                  onDelete={handleDelete} 
                  onCategoryChange={handleCategoryChange} 
                  onSave={handleSave} 
                />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

const categoryColorMap = {
  'Front End': '#6BD1FF',
  'Back End': '#00C86F',
  'Innovación y gestión': '#FFBA05'
};

export default Home;
