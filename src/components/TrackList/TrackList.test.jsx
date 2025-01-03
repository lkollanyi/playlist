import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TrackList from './TrackList';
import "@testing-library/jest-dom";

const mockTracks = [
  { id: 1, title: 'Track 1', artist: 'Artist 1', album: 'Album 1', year: '2021' },
  { id: 2, title: 'Track 2', artist: 'Artist 2', album: 'Album 2', year: '2022' },
];

test('renders TrackList component with tracks', () => {
  render(<TrackList tracks={mockTracks} />);

  // Check if the Track components are rendered
  expect(screen.getByText('Track 1')).toBeInTheDocument();
  expect(screen.getByText('Artist 1')).toBeInTheDocument();
  expect(screen.getByText('Track 2')).toBeInTheDocument();
  expect(screen.getByText('Artist 2')).toBeInTheDocument();
});

test('applies the correct class names', () => {
  const { container } = render(<TrackList tracks={mockTracks} />);

  // Check if the trackList class is applied
  expect(container.firstChild).toHaveClass('trackList');

  // Check if the track class is applied to each Track component
  const trackElements = container.getElementsByClassName('track');
  expect(trackElements.length).toBe(mockTracks.length);
});