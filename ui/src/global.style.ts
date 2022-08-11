import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
  }
  
  body {
    background: #F5F5F5;
    font-family: Inter, sans-serif;
    padding: 18px;
    height: calc(100vh - 36px);
    position: relative;
    
    //&:before {
    //  content: '';
    //  position: absolute;
    //  width: 354.41px;
    //  height: 193.97px;
    //  left: 135px;
    //  top: 280.93px;
    //  z-index: -1;
    //  background: radial-gradient(50% 50% at 50% 50%, #FFDF7C 0%, rgba(246, 251, 248, 0) 100%);
    //}
    //
    //&:before {
    //  content: '';
    //  position: absolute;
    //  width: 354.41px;
    //  height: 194px;
    //  left: 512.5px;
    //  top: 204.5px;
    //  z-index: -1;
    //  background: radial-gradient(50% 50% at 50% 50%, #FAB7B8 0%, rgba(246, 251, 248, 0) 100%);
    //}
  }
  
  #root {
    height: 100%;
  }
  
`
