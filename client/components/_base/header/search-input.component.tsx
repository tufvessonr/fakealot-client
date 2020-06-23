import React, { createRef, useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25em;
  height: 2.5em;

  cursor: auto

  border-radius: 10em;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  background-color: #0b79bf;

  &:hover {
    opacity: 0.7;
  }
`;

const Input = styled.input`
  width: 100%;

  margin: 1em;
  padding: 0em;

  border: none;

  background-color: #0b79bf;
  color: white;
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  pointer-events: auto;
  cursor: pointer;
  border: none;
  outline: none;

  font: inherit;
  background-color: transparent;
  padding-top: 0.35em;

  img {
    height: 2.5em;
    width: 2.5em;

    border-radius: 10em;
  }
`;

export function SearchInput(): JSX.Element {
  const [input, setInput] = useState('');
  const inputFocus = createRef<HTMLInputElement>();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Form was submitted with input: ${input}`);

    setInput('');
    inputFocus.current?.blur();
  };

  return (
    <Form
      onClick={() => {
        inputFocus.current?.focus();
      }}
      // on focus open search bar
      onFocus={() => {
        inputFocus.current?.focus();
      }}
      onSubmit={onFormSubmit}
    >
      <Input
        onChange={(e) => setInput(e.target.value)}
        ref={inputFocus}
        value={input}
        placeholder="Search for products..."
      />
      <Button type="submit">
        <img
          src="/magnifier-inverted.svg"
          alt="placeholder"
          height={5}
          width={5}
        />
      </Button>
    </Form>
  );
}
