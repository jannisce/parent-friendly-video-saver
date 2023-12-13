import { useState } from 'react'

const VideoDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('')

  const handleDownload = () => {
    let serviceUrl = '';
  
    if (/youtube\.com|youtu\.be/.test(videoUrl)) {
      serviceUrl = `https://video-downloader-service.onrender.com/youtube?url=${videoUrl}`;
    } else if (/facebook\.com/.test(videoUrl)) {
      serviceUrl = `https://fb-service.onrender.com/facebook?url=${videoUrl}`;
    } else {
      alert('Por favor, ingrese un enlace válido de YouTube o Facebook.');
      return;
    }
  
    // Abre la URL del servicio en una nueva pestaña
    window.open(serviceUrl, '_blank');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden'>
      <h1 className='text-3xl font-bold text-gray-800 mb-2'>
        Descargador de Videos
      </h1>
      <p className='text-center text-gray-600 mb-6 px-10'>
        Aquí puedes descargar fácilmente videos de YouTube o Facebook. Solo pega
        el enlace del video en el campo de abajo y haz clic en &quot;Descargar
        Video&quot;.
      </p>
      <div className='mb-4 w-3/4'>
        <input
          type='text'
          placeholder='Pega aquí el enlace del video'
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className='px-4 py-3 w-full border rounded shadow appearance-none text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <button
        onClick={handleDownload}
        className='px-5 py-3 w-3/4 bg-blue-500 text-lg text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
      >
        Descargar Video
      </button>
    </div>
  )
}

export default VideoDownloader
