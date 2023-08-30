// import React, { useState } from 'react'
// import Styled, { styled } from 'styled-components'
// import { Link } from 'react-router-dom'
// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
// import { Sidebardata } from './Sidebardata'
// import Submenu from './Submenu';


// const Nav = Styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flext-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-sixe: 2rem;
//   height: 80px;
//   display: flex ;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const SidebarNav = styled.div`
//   background:#15171c;
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({useSidebar}) => (useSidebar ? '20': '-100%')};
//   transition: 1s;
//   z-index: 5;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;


// function Sidebartest({children}) {
//   const [useSidebar, setSidebar] = useState(true)
//   const showsidebar = ()=> setSidebar(!useSidebar)

//   return (
//     <>
//       <Nav>
//         <NavIcon to="#">
//             <h1  style={{display: showsidebar ? "block" : "none"}} className='logo'>Qeuzelco 1</h1>
//             <FaIcons.FaBars onClick={ showsidebar }/>
//         </NavIcon>
//       </Nav>
//       <SidebarNav useSidebar = { useSidebar}>
//         <SidebarWrap>
//           <NavIcon to="#">
//             <h1  style={{display: showsidebar ? "block" : "none"}} className='logo'>Qeuzelco 1</h1>
//             <AiIcons.AiOutlineClose onClick={ showsidebar }/>
//           </NavIcon>
//           {Sidebardata.map ((item, index)=> {
//             return <Submenu item={item} key={index}/>;
//           })}
//         </SidebarWrap>
//       </SidebarNav>
//       <main>{children}</main>
//     </>
//   )
// }
 
// export default Sidebartest;