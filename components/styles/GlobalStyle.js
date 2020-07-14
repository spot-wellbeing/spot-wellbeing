// import { createGlobalStyle } from 'styled-components';
// import { lighten, darken } from 'polished';

// const GlobalStyle = createGlobalStyle`
//   /**
//    * Resets
//    */
//   html {
//     box-sizing: border-box;
//     -moz-box-sizing: border-box;
//   }
//   body, h1, h2, h3 {
//     margin: 0;
//   }
//   button {
//     background: none;
//     border: none;
//   }

//   /**
//    * Typography
//    */
//   body, button {
//     line-height: 1.5;
//     letter-spacing: .5px;
//     font-family: 'Roboto', 'Ariel', sans-serif;
//   }
//   h1 {
//     color: ${props => props.theme.colours.secondary};
//     font-size: 2rem;
//   }
//   h2 {
//     // color: #0069bc;
//     color: #212121;
//     font-size: 1.75rem;
//   }
//   h3 {
//     font-size: 1.5rem;
//   }
//   h1, h2, h3 {
//     font-weight: 300;
//   }
//   p, input, button, ul, li {
//     color: ${lighten(.1, '#000')};
//     font-weight: 300;
//     font-size: 1rem;
//   }
//   a {
//     font-weight: 300;
//   }
//   .color {
//     &-primary {
//       color: ${props => props.theme.colours.primary};
//     }

//     &-secondary {
//       color: ${props => props.theme.colours.secondary};
//     }
//   }
//   .float {
//     &-left {
//       @media (min-width: 768px)
//       {
//         float: left;
//       }
//     }
//     &-right {
//       @media (min-width: 768px) {
//         float: right;
//       }
//     }
//   }
//   .bold {
//     font-size: 1.75rem;
//     font-weight: 300;
//     color: #0069bc;
//   }
//   .highlight {
//     color: ${props => props.theme.colours.brightBlue};
//     font-weight: 300;
//   }

//   /**
//    * Helper classes
//    */
//   .padded {
//     padding: 1rem 1.5rem;
//   }

//   .bg {
//     &--blue {
//       background-color: ${props => props.theme.colours.lighterBlue};
//     }

//     &--grey {
//       background-color: ${darken(.1, '#fff')};
//     }

//     &-yellow {
//       background-color: ${props => props.theme.colours.highlight};
//     }
//   }

//   .d {
//     &-block {
//       display: block;
//     }

//     &-flex {
//       display: flex;
//     }

//     &-inline-flex {
//       display: inline-flex;
//     }
//   }

//   .flex-column {
//     flex-direction: column;
//   }

//   .justify-content {
//     &-start {
//       justify-content: flex-start;
//     }

//     &-center {
//       justify-content: center;
//     }

//     &-end {
//       justify-content: flex-end;
//     }

//     &-space-around {
//       justify-content: space-around;
//     }

//     &-space-between {
//       justify-content: space-between;
//     }
//   }

//   .centred {
//     text-align: center;
//   }
//   .underline {
//     text-decoration: underline;
//   }
//   .italic {
//     font-style: italic;
//     color: #9e9e9e;
//   }

//   .align-left {
//     text-align: left;
//   }
//   .align-right {
//     text-align: right;
//   }

//   .desktop {
//     &-align {
//       &-left {
//         @media (min-width: 768px) {
//           text-align: left;
//         }
//       }
//       &-right {
//         @media (min-width: 768px) {
//           text-align: right;
//         }
//       }
//     }
//   }

//   .p {
//     &-relative {
//       position: relative;
//     }

//     &-absolute {
//       position: absolute;
//     }
//   }

//   .rounded {
//     border-radius: 50%;
//   }

//   .m {
//     &l {
//       &-lg {
//         @media (min-width: 768px) {
//           margin-left: 2rem;
//         }
//       }
//     }
//     &r {
//       margin-right: 1rem;

//       &-lg {
//         @media (min-width: 768px) {
//           margin-right: 2rem;
//         }
//       }

//       &-sm {
//         margin-right: .5rem;
//       }
//     }
//     &b {
//       margin-bottom: 1rem;
//     }
//   }

//   @media (min-width: 768px) {
//     .flex-reverse {
//       flex-direction: row-reverse;
//     }
//   }

//   hr {
//     border-top: 1px solid #fff;
//     border-bottom: none;
//   }

//   .full-width {
//     width: 100%;
//   }

//   .full-height {
//     height: 100%;
//   }

//   img {
//     width: 100%;
//   }
// `;

// export default GlobalStyle;
