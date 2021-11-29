<div id="top"></div>
<!--
*** Thanks for review eShop Federated project
-->

<!-- PROJECT SHIELDS -->
<!--
*** A micro-frontend solution using Module Federation
-->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="//github.com/imatiqul/eShopFederated">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Micro-frontend Applications</h3>

  <p align="center">
    Sample Micro-frontend applications, based on a simplified micro-frontend architecture and Module Federation.
    <br />
    <a href="#getting-started"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="//github.com/imatiqul/eShopFederated/issues">Report Bug</a>
    ·
    <a href="//github.com/imatiqul/eShopFederated/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#how-to-run">How to Run</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Module Federation gives us a new method of sharing code between applications at runtime. To do that, we need to envision a fairly common scenario like [eShopContainers](https://github.com/dotnet-architecture/eShopOnContainers) with Micro-frontend Architecture.
[![Product Name Screen Shot][microfrontend-screenshot]](images/MicroFrontend-Architecture-v1.png)

Here's why:
* A containerized architecture is a scalable solution for backend
* But, Client apps (Single Page Architecture) are still in monolithic architecture
* For client apps, multiple teams should work independently
* For client apps, product and build management should be independent
* Duplicate UI components, business logic, i18n strings, etc.

#### [Module Federation]((https://module-federation.myshopify.com/)) is new solution for micro-frontend architecture!
* Code remains in-place - For one of the applications, the rendering code remains in-place and is not modified.
* No framework - As long as both applications are using the same view framework, then they can both use the same code.
* No code loaders - Micro-FE frameworks are often coupled with code loaders, like SystemJS, that work in parallel with the babel and Webpack imports that engineers are used to. Importing a federated module works just like any normal import. It just happens to be remote.
* Applies to any Javascript - Where Micro-FE frameworks work on UI components, Module Federation can be used for any type of Javascript; UI components, business logic, i18n strings, etc. Any Javascript can be shared. 
* Applies beyond Javascript - While many frameworks focus heavily on the Javascript aspects, Module Federation will work with files that Webpack is currently able to process today such as images, JSON, and CSS. If you can require it, it can be federated.
* Universal - Module Federation can be used on any platform that uses the Javascript runtime such as Browser, Node, Electron, or Web Worker.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap the project.

* [React.js](https://reactjs.org/)
* [React Query](https://react-query.tanstack.com/)
* [Webpack](https://webpack.js.org/)
* [Module Federation](https://webpack.js.org/concepts/module-federation/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up the project locally.

### Prerequisites
* Docker Desktop - Make sure you have [installed](https://docs.docker.com/docker-for-windows/install/) and [configured](https://github.com/dotnet-architecture/eShopOnContainers/wiki/Windows-setup#configure-docker) docker in your environment.
* Run eShopContainers - follow the [instructions](https://github.com/dotnet-architecture/eShopOnContainers/blob/dev/README.md#getting-started)
  ```sh
  docker-compose build
  docker-compose up
  ```

* Node.js
* npm
  ```sh
  npm install npm@latest -g
  ```
* yarn
  ```sh
  npm install yarn -g
  ```

### How to Run

_Below is the instructions of how you can install and run the app._

1. Clone the repo
   ```sh
   git clone https://github.com/imatiqul/eShopFederated.git
   ```
2. Go to src/eShopMF   
   ```sh
   cd src/eShopMF
   ```
3. Run mf-basket-app   
   ```sh
   cd mf-basket-app
   yarn
   yarn start
   ```
4. Run mf-shared-app   
   ```sh
   cd mf-shared-app
   yarn
   yarn start
   ```
5. Run mf-catalog-app   
   ```sh
   cd mf-catalog-app
   yarn
   yarn start
   ```
6. Run mf-shop-app   
   ```sh
   cd mf-shop-app
   yarn
   yarn start
   ```
[![Product Name Screen Shot][product-screenshot]](images/eShopFederated.jpg)
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/mf-feature`)
3. Commit your Changes (`git commit -m 'Add some mf-feature'`)
4. Push to the Branch (`git push origin feature/mf-feature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

ATIQUL ISLAM - [@ATIQ](https://imatiqul.com/) - islam.md.atiqul@gmail.com

Project Link: [https://github.com/imatiqul/eShopFederated](https://github.com/imatiqul/eShopFederated)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/imatiqul/eShopFederated.svg?style=for-the-badge
[issues-url]: https://github.com/imatiqul/eShopFederated/issues
[license-shield]: https://img.shields.io/github/license/imatiqul/eShopFederated?style=for-the-badge
[license-url]: https://github.com/imatiqul/eShopFederated/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mdatiqulislam/
[microfrontend-screenshot]: images/MicroFrontend-Architecture-v1.png
[microservice-screenshot]: images/eShopOnContainers-architecture.png
[product-screenshot]: images/eShopFederated.jpg
