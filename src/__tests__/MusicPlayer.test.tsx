import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { MusicPlayer } from '../components/MusicPlayer';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const mockPlaylist = [
    {
        id: "1",
        title: "Song One",
        artist: "Artist A",
        duration: 210,
        cover: "https://example.com/song1.jpg",
        lyrics: "These are the lyrics for song one.",
        song: "https://example.com/song1.mp3"
    },
    {
        id: "2",
        title: "Song Two",
        artist: "Artist B",
        duration: 180,
        cover: "https://example.com/song2.jpg",
        lyrics: "These are the lyrics for song two.",
        song: "https://example.com/song2.mp3"
    }
];

const server = setupServer(
    rest.get('/api/playlist', (req, res, ctx) => {
        return res(ctx.json(mockPlaylist));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MusicPlayer Component', () => {
    beforeEach(async () => {
        render(<MusicPlayer />);
        
        await waitFor(() => expect(screen.getByText(mockPlaylist[0].title)).toBeInTheDocument());
    });

    it('loads and displays the first song by default', () => {
        expect(screen.getByText(mockPlaylist[0].title)).toBeInTheDocument();
        expect(screen.getByText(mockPlaylist[0].artist)).toBeInTheDocument();
    });

    it('toggles play/pause when clicking the button', async () => {
        const playPauseButton = screen.getByRole('button', { name: /play/i });

        expect(playPauseButton).toHaveTextContent(/play/i);

        fireEvent.click(playPauseButton);
        expect(playPauseButton).toHaveTextContent(/pause/i);

        fireEvent.click(playPauseButton);
        expect(playPauseButton).toHaveTextContent(/play/i);
    });

    it('advances to the next song when clicking forward', async () => {
        const forwardButton = screen.getByRole('button', { name: /next/i });

        fireEvent.click(forwardButton);
        
        await waitFor(() => expect(screen.getByText(mockPlaylist[1].title)).toBeInTheDocument());
    });

    it('goes back to the previous song when clicking back', async () => {
        const forwardButton = screen.getByRole('button', { name: /next/i });
        const backButton = screen.getByRole('button', { name: /previous/i });

        fireEvent.click(forwardButton);
        await waitFor(() => expect(screen.getByText(mockPlaylist[1].title)).toBeInTheDocument());

        fireEvent.click(backButton);
        await waitFor(() => expect(screen.getByText(mockPlaylist[0].title)).toBeInTheDocument());
    });

    it('updates current song when clicking on a playlist item', async () => {
        const secondSong = screen.getByText(mockPlaylist[1].title);

        fireEvent.click(secondSong);

        await waitFor(() => expect(screen.getByText(mockPlaylist[1].title)).toBeInTheDocument());
    });
});
