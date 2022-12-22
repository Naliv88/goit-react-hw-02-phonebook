import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export const Filter = ({ value, filter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={filter}
      />
    </>
  );
};
