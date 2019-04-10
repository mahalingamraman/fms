// import React from "react";
// import { SideNav, Nav } from "react-sidenav";
// import styled from "styled-components";
// import {
//   AppContainer as BaseAppContainer,
//   ExampleNavigation as BaseNavigation,
//   ExampleBody as Body
// } from "./containers";
// import { Icon } from "react-icons-kit";
// import { dashboard } from "react-icons-kit/fa/dashboard";
// import { users } from "react-icons-kit/fa/users";
// import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
// import { cubes } from "react-icons-kit/fa/cubes";
// import { circleO } from "react-icons-kit/fa/circleO";
// import Home from './Home';
// import People from './People';
// const AppContainer = styled(BaseAppContainer)`
//   height: calc(100vh - 40px);
// `;

// const Navigation = styled(BaseNavigation)`
//   background: #303641;
//   color: #8d97ad;
//   font-size: 1em;
//   letter-spacing: 2px;
//   width: 240px;
//   line-height: 22px;
// `;

// const IconCnt = styled.div`
//   color: #6a56a5;
//   display: flex;
//   justify-content: center;
//   aligh-items: center;
// `;

// const theme = {
//   selectionColor: "#FFF",
//   hoverBgColor: "#181b20"
// };

// const Text = styled.div`
//   padding-left: 8px;
// `;

// class SideNav_ extends React.Component {
//   state = { selectedPath: "1" };

//   onItemSelection = arg => {
//     this.setState({ selectedPath: arg.path });
//   };

//   render() {
//     return (
//       <AppContainer>
//         <Navigation>
//           <SideNav
//             defaultSelectedPath="1"
//             theme={theme}
//             onItemSelection={this.onItemSelection}
//           >
//             <Nav id="1">
//               <IconCnt>
//                 <Icon icon={dashboard} />
//               </IconCnt>
//               <Text>Dashboard</Text>
//               {/* <Home/> */}
//             </Nav>
//             <Nav id="2">
//               <IconCnt>
//                 <Icon icon={users} />
//               </IconCnt>
//               <Text>Users</Text>
//               {/* <People/> */}
//             </Nav>
//             <Nav id="3">
//               <IconCnt>
//                 <Icon icon={shoppingCart} />
//               </IconCnt>
//               <Text>Deliveries</Text>
//             </Nav>
//             <Nav id="4">
//               <IconCnt>
//                 <Icon icon={circleO} />
//               </IconCnt>
//               <Text>Orders</Text>
//             </Nav>
//             <Nav id="5">
//               <IconCnt>
//                 <Icon icon={cubes} />
//               </IconCnt>
//               <Text>Transactions</Text>
//             </Nav>
//           </SideNav>
//         </Navigation>
//         <Body>
//           You can render any items as child of Nav element. All items will be
//           rendered under a flex container.
//         </Body>
//       </AppContainer>
//     );
//   }
// }

// export default SideNav_;


import {Navbar, Nav, NavItem, Button,Modal} from 'react-bootstrap';
 
import React, {Component} from 'react';


// import Sidebar from 'react-bootstrap-sidebar';
 
 class SideNav_ extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
          isVisible: false,
        };
    }
 
    updateModal(isVisible) {
    	this.state.isVisible = isVisible;
      this.forceUpdate();
    }
 
    render() {
        return (
          <div>

             <Button bsStyle="primary" onClick={ () => this.updateModal(true) }></Button>
            <Modal  side='left' className='menu-sidebar left' show={this.state.isVisible} onHide={ () => this.updateModal(false) } autoFocus keyboard>
                <Modal.Header closeButton>
                    <Modal.Title>Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Nav>
                      <NavItem href="#">Link 1</NavItem>
                      <NavItem href="#">Link 2</NavItem>
                      <NavItem href="#">Link 3</NavItem>
                      <NavItem href="#">Link 4</NavItem>
                    </Nav>
                </Modal.Body>
            </Modal>
            </div>
              // <div>
                 
              //     <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
                    
              //     </Sidebar>
              // </div>
        );
    }
}
export default SideNav_;