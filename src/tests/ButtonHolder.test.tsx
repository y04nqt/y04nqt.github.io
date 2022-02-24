import {render, screen} from '@testing-library/react';
import { ErrorCallback } from 'typescript';
import ButtonHolder from '../components/ButtonHolder';

test('renders button holder', () => {
  render(<ButtonHolder>{'test'}</ButtonHolder>);
  expect(screen.getByText('test')).toBeInTheDocument();
})

test('renders button holder fails because null children', () => {
  // const renderHolder = () => render(<ButtonHolder>{null}</ButtonHolder>);
  let msg = '';
  try{
    render(<ButtonHolder>{null}</ButtonHolder>)
  }catch(e:any){
    msg = e.message;
  }
  expect(msg).toBe('ButtonHolder requires children');
})