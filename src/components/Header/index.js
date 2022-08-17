import React, { useState } from 'react';
import { Container, Logo , SearchInput} from './styled';

export default ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(search === '' ? false : true);

  const handleInputFocus = () => {
    setInputActive(true);
  }

  const handleInputBlur = () => {
    if(search === '') {
      setInputActive(false);
    }
  }

  const handleChange = (event) => {
    onSearch(event.target.value);
  }

  return(
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput 
        placeholder="Pesquise por um produto..."
        onFocus={ handleInputFocus }
        onBlur={ handleInputBlur}
        active={ inputActive }
        value={ search }
        onChange={ handleChange }
      />
    </Container>
  );
}