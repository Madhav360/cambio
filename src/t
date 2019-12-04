import React, { Component } from 'react';
import Swipeable from "react-swipy";
import Sidebar from './Sidebar'


const appStyles = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    overflow: "hidden"
  };
  
  const wrapperStyles = { position: "relative", width: "800px", height: "500px", backgroundColor:"red" };
  const actionsStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 12
  };
class Cardview extends Component{
    state = {
        cards: ["First", "Second", "Third"]
      };
    
      remove = () =>
        this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));
    
      render() {
        const { cards } = this.state;
    
        return (
          <div style={appStyles}>
            <div style={wrapperStyles}>
              {cards.length > 0 && (
                <div style={wrapperStyles}>
                  <Swipeable
                    buttons={({ right, left }) => (
                      <div style={actionsStyles}>
                        <button onClick={left}>Reject</button>
                        <button onClick={right}>Accept</button>
                      </div>
                    )}
                    onAfterSwipe={this.remove}
                  >
                    <card>
                    <div className="col-md-6">
                    <div class="card">
                        <img src="image/icons/shikhar.jpg" alt="Avatar" />
                           <div class="container">
                             <h4><b>John Doe</b></h4> 
                             <p>Architect  Engineer</p> 
                         </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </div>
                    </div>
                    </card>
                  </Swipeable>
                  {cards.length > 1 && <card zIndex={-1}>{cards[1]}</card>}
                </div>
              )}
              {cards.length <= 1 && <card zIndex={-2}>No more cards</card>}
            </div>
          </div>
        );
      }
}
export default Cardview;