import React from "react";
import { ToggleButton } from "../../utils/ToggleButton/ToggleButton";
import { Container } from "../../utils/Container/Container";
import { RadioButton } from "../../utils/RadioButton/RadioButton";
import './Main.scss'
export const Main = () => {


  return <div className='main'>
    <ToggleButton>
      Ok
    </ToggleButton>
    <Container>
      <ToggleButton>
        Ok
      </ToggleButton>
      Choose one
    </Container>
    <RadioButton
      options={['DARK', 'DEFAULT', 'LIGHT']}
      defaultValue='DEFAULT'
    />
  </div>
}