import { css } from 'lit';

export default css`
  .leaflet-control-locate a {
    cursor: pointer;
  }
  .leaflet-control-locate a .leaflet-control-locate-location-arrow {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 7px;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M445 4 29 195c-48 23-32 93 19 93h176v176c0 51 70 67 93 19L508 67c16-38-25-79-63-63z"/></svg>');
  }
  .leaflet-control-locate a .leaflet-control-locate-spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 7px;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M304 48a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48 368a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm208-208a48 48 0 1 0 0 96 48 48 0 0 0 0-96zM96 256a48 48 0 1 0-96 0 48 48 0 0 0 96 0zm13 99a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm294 0a48 48 0 1 0 0 96 48 48 0 0 0 0-96zM109 61a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"/></svg>');
    animation: leaflet-control-locate-spin 2s linear infinite;
  }
  .leaflet-control-locate.active a .leaflet-control-locate-location-arrow {
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(32, 116, 182)" d="M445 4 29 195c-48 23-32 93 19 93h176v176c0 51 70 67 93 19L508 67c16-38-25-79-63-63z"/></svg>');
  }
  .leaflet-control-locate.following a .leaflet-control-locate-location-arrow {
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(252, 132, 40)" d="M445 4 29 195c-48 23-32 93 19 93h176v176c0 51 70 67 93 19L508 67c16-38-25-79-63-63z"/></svg>');
  }
  .leaflet-touch .leaflet-bar .leaflet-locate-text-active {
    width: 100%;
    max-width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 10px;
  }
  .leaflet-touch .leaflet-bar .leaflet-locate-text-active .leaflet-locate-icon {
    padding: 0 5px 0 0;
  }
  .leaflet-control-locate-location circle {
    animation: leaflet-control-locate-throb 4s ease infinite;
  }
  @keyframes leaflet-control-locate-throb {
    0% {
      stroke-width: 1;
    }
    50% {
      stroke-width: 3;
      transform: scale(0.8, 0.8);
    }
    100% {
      stroke-width: 1;
    }
  }
  @keyframes leaflet-control-locate-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /*# sourceMappingURL=L.Control.Locate.min.css.map */
`;
