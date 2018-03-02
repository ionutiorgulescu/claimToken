import React, { Component } from 'react';
import Portal from './Portal';
import Card from './Card';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-wrap">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus faucibus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat ante nisi, eget finibus tortor posuere sit amet. Mauris a purus rhoncus, pulvinar velit in, consequat magna. Vivamus commodo dolor turpis, at auctor libero tempor nec. Nam at feugiat magna. Sed eget dui porttitor, dapibus magna quis, interdum purus. Integer tempor justo non mauris placerat aliquet. Curabitur id semper velit.
          </p>
          <p>
            Donec posuere massa sed viverra pellentesque. Praesent blandit placerat est, a sagittis nisi consequat ac. Quisque vestibulum suscipit justo vitae vestibulum. Aenean sagittis augue vel arcu tempus egestas. Fusce fermentum ex non aliquam auctor. Aliquam risus magna, faucibus eget viverra sed, blandit ac lorem. Vivamus velit leo, convallis sit amet pretium a, pharetra lacinia augue. Pellentesque vitae lorem quis risus tempus commodo porttitor ac orci. Proin posuere, ex quis gravida suscipit, tellus orci hendrerit erat, vitae pretium erat augue a justo.
          </p>
          <p>
            Pellentesque feugiat placerat ex, in rutrum justo egestas aliquet. Suspendisse a elit at enim blandit scelerisque tincidunt vitae mi. Mauris ornare laoreet enim. Morbi felis mauris, porta vitae sem faucibus, rhoncus bibendum augue. Duis laoreet mi turpis, vitae dictum augue euismod in. Maecenas in nibh orci. Aliquam blandit eleifend lacinia. Sed ultricies, erat in semper condimentum, lacus magna porta massa, ut luctus arcu risus hendrerit purus. Vivamus tempus magna a sem pellentesque cursus. Phasellus fermentum, nibh eu suscipit dictum, mauris turpis sollicitudin quam, eget facilisis ligula velit eu mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur efficitur id felis eu ultricies. Nunc in erat vulputate tortor posuere accumsan. Mauris placerat nisi mattis, volutpat nunc nec, rhoncus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum faucibus mollis.
          </p>
          <p>
            Pellentesque feugiat placerat ex, in rutrum justo egestas aliquet. Suspendisse a elit at enim blandit scelerisque tincidunt vitae mi. Mauris ornare laoreet enim. Morbi felis mauris, porta vitae sem faucibus, rhoncus bibendum augue. Duis laoreet mi turpis, vitae dictum augue euismod in. Maecenas in nibh orci. Aliquam blandit eleifend lacinia. Sed ultricies, erat in semper condimentum, lacus magna porta massa, ut luctus arcu risus hendrerit purus. Vivamus tempus magna a sem pellentesque cursus. Phasellus fermentum, nibh eu suscipit dictum, mauris turpis sollicitudin quam, eget facilisis ligula velit eu mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur efficitur id felis eu ultricies. Nunc in erat vulputate tortor posuere accumsan. Mauris placerat nisi mattis, volutpat nunc nec, rhoncus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum faucibus mollis.
          </p>
          <p>
            Pellentesque feugiat placerat ex, in rutrum justo egestas aliquet. Suspendisse a elit at enim blandit scelerisque tincidunt vitae mi. Mauris ornare laoreet enim. Morbi felis mauris, porta vitae sem faucibus, rhoncus bibendum augue. Duis laoreet mi turpis, vitae dictum augue euismod in. Maecenas in nibh orci. Aliquam blandit eleifend lacinia. Sed ultricies, erat in semper condimentum, lacus magna porta massa, ut luctus arcu risus hendrerit purus. Vivamus tempus magna a sem pellentesque cursus. Phasellus fermentum, nibh eu suscipit dictum, mauris turpis sollicitudin quam, eget facilisis ligula velit eu mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur efficitur id felis eu ultricies. Nunc in erat vulputate tortor posuere accumsan. Mauris placerat nisi mattis, volutpat nunc nec, rhoncus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum faucibus mollis.
          </p>
        </div>
        <Portal>
          <Card>
            What's up! What's up! BITCOOOOOOOONEEEECT!
          </Card>
        </Portal>
      </div>
    );
  }
}

export default App;
