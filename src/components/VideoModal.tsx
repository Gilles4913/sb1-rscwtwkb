import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  if (!isOpen) return null;

  const getVideoId = (url: string) => {
    try {
      if (url.includes('youtu.be/')) {
        return url.split('youtu.be/')[1];
      }
      if (url.includes('youtube.com/watch')) {
        return url.split('v=')[1]?.split('&')[0];
      }
      return url;
    } catch (error) {
      console.error('Error extracting video ID:', error);
      return '';
    }
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : '';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="aspect-video">
          {embedUrl && (
            <iframe
              src={embedUrl}
              title="YouTube video player"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}