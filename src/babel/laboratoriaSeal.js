'use strict';

var labTempl = `<template id="laboratoria-seal-template">
                  <style>
                    #laboratoria-seal {
                      position: relative;
                      overflow: hidden;
                      height: 70px;
                      width: 280px;
                    }
                    #laboratoria-seal h1, #laboratoria-seal h2, #laboratoria-seal h3, #laboratoria-seal h4, #laboratoria-seal h5, #laboratoria-seal h6,
                    #laboratoria-seal .h1, #laboratoria-seal .h2, #laboratoria-seal .h3, #laboratoria-seal .h4, #laboratoria-seal .h5, #laboratoria-seal .h6,
                    #laboratoria-seal p, #laboratoria-seal .p, #laboratoria-seal span, #laboratoria-seal em, #laboratoria-seal strong, #laboratoria-seal label, #laboratoria-seal a, #laboratoria-seal i, #laboratoria-seal ul, #laboratoria-seal ol, #laboratoria-seal li {
                      margin: 0;
                    }
                    #laboratoria-seal .laboratoria-icon,
                    #laboratoria-seal .laboratoria-label {
                      height: 70px;
                      position: absolute;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                    }
                    #laboratoria-seal .laboratoria-icon {
                      background-color: #F3A533;
                      width: 70px;
                      z-index: 30;
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center center;
                      background-size: 81%;
                    }
                    #laboratoria-seal .laboratoria-label {
                      display: -webkit-box;
                      display: -moz-box;
                      display: box;
                      display: -webkit-flex;
                      display: -moz-flex;
                      display: -ms-flexbox;
                      display: flex;
                      -webkit-box-orient: vertical;
                      -moz-box-orient: vertical;
                      box-orient: vertical;
                      -webkit-flex-direction: column;
                      -moz-flex-direction: column;
                      flex-direction: column;
                      -ms-flex-direction: column;
                      -webkit-box-pack: center;
                      -moz-box-pack: center;
                      box-pack: center;
                      -webkit-justify-content: center;
                      -moz-justify-content: center;
                      -ms-justify-content: center;
                      -o-justify-content: center;
                      justify-content: center;
                      -ms-flex-pack: center;
                      -webkit-box-align: center;
                      -moz-box-align: center;
                      box-align: center;
                      -webkit-align-items: center;
                      -moz-align-items: center;
                      -ms-align-items: center;
                      -o-align-items: center;
                      align-items: center;
                      -ms-flex-align: center;
                      -webkit-transition: all 0.2s ease-in-out;
                      -moz-transition: all 0.2s ease-in-out;
                      transition: all 0.2s ease-in-out;
                      padding: 14px;
                      width: 210px;
                      background-color: white;
                      z-index: 10;
                    }
                    @media only screen and (min-width: 768px) {
                      #laboratoria-seal .laboratoria-label {
                        -webkit-transform: translateX(-101%);
                        -moz-transform: translateX(-101%);
                        -ms-transform: translateX(-101%);
                        -o-transform: translateX(-101%);
                        transform: translateX(-101%);
                      }
                    }
                    #laboratoria-seal .laboratoria-label a {
                      color: #F3A533;
                    }
                    #laboratoria-seal .laboratoria-label a:hover, #laboratoria-seal .laboratoria-label a.active {
                      color: #f19611;
                    }
                    #laboratoria-seal:hover .laboratoria-label, #laboratoria-seal.active .laboratoria-label {
                      -webkit-transition: all 0.2s ease-in-out;
                      -moz-transition: all 0.2s ease-in-out;
                      transition: all 0.2s ease-in-out;
                      -webkit-transform: translateX(70px);
                      -moz-transform: translateX(70px);
                      -ms-transform: translateX(70px);
                      -o-transform: translateX(70px);
                      transform: translateX(70px);
                    }
                    @media only screen and (max-width: 768px) {
                      #laboratoria-seal .laboratoria-label {
                        -webkit-transform: translateX(70px);
                        -moz-transform: translateX(70px);
                        -ms-transform: translateX(70px);
                        -o-transform: translateX(70px);
                        transform: translateX(70px);
                      }
                    }
                  </style>
                  <div class="laboratoria-icon" style="background-image: url(assets/img/laboratoria-icon-black.png)"></div>
                  <div class="laboratoria-label">
                    <p>Proyecto desarrollado por<br><a href="http://laboratoria.la" target="_blank">laboratoria.la</a></p>
                  </div>
                </template>`;

var labSeal = document.querySelector('#laboratoria-seal');
labSeal.appendChild(labTempl);