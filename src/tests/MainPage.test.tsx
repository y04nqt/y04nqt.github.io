import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText("Aaron Krueger")).toBeInTheDocument();
  expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
  expect(screen.getByTestId("AboutMeButton")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("LinkedinButton")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("SoundcloudButton")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("InfoIcon")).toBeInTheDocument();
  expect(screen.getByTestId("LinkedInIcon")).toBeInTheDocument();
  expect(screen.getByTestId("LibraryMusicIcon")).toBeInTheDocument();
});
