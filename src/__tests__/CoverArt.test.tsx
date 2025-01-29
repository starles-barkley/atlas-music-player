import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { CoverArt } from '../components/CoverArt'; 

const mockPlaylist = [
    {
        id: "123",
        title: "Imagine",
        artist: "John Lennon",
        genre: "Rock",
        duration: 183,
        cover: "https://upload.wikimedia.org/wikipedia/en/2/25/ImagineCover.jpg",
        lyrics: "Imagine all the people living life in peace...",
        song: "https://music-streaming-service.com/song123.mp3"
    },
    {
        id: "456",
        title: "Bohemian Rhapsody",
        artist: "Queen",
        genre: "Rock",
        duration: 355,
        cover: "https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png",
        lyrics: "Is this the real life? Is this just fantasy?",
        song: "https://music-streaming-service.com/song456.mp3"
    }
];

describe('CoverArt Component', () => {
    it('renders loading skeleton when loading is true', () => {
        render(<CoverArt loading={true} playlist={mockPlaylist} currentSong={0} />);
        
        expect(document.querySelector('.react-loading-skeleton')).not.toBeNull();
      });

    it('renders the correct cover image when loading is false', () => {
        render(<CoverArt loading={false} playlist={mockPlaylist} currentSong={0} />);
        
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', mockPlaylist[0].cover);
        expect(img).toHaveAttribute('alt', 'Cover art');
    });

    it('updates the cover image when the currentSong index changes', () => {
        const { rerender } = render(<CoverArt loading={false} playlist={mockPlaylist} currentSong={0} />);
        
        let img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', mockPlaylist[0].cover);

        rerender(<CoverArt loading={false} playlist={mockPlaylist} currentSong={1} />);
        
        img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', mockPlaylist[1].cover);
    });

    it('displays correct lyrics for the current song', () => {
        render(<CoverArt loading={false} playlist={mockPlaylist} currentSong={1} />);
        
        expect(screen.getByText(mockPlaylist[1].lyrics)).toBeInTheDocument();
    });
});
