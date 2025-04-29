import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';
import ScreenshotModal from './ScreenshotModal';
import Vooks from '../images/projects/vooks.png';
import VooksRequest from '../images/projects/vooks/book_request.png';
import VooksCategories from '../images/projects/vooks/categories.png';
import VooksLanding from '../images/projects/vooks/landing.png';
import Miracle from '../images/projects/miracle.png';
import MiracleAuth from '../images/projects/miracle/auth.png';
import MiracleLanding from '../images/projects/miracle/landing.png';
import MiracleBlog from '../images/projects/miracle/blog.png';
import Mydoing from '../images/projects/mydoing/home.png';
import MydoingProject from '../images/projects/mydoing/project.png';
import MydoingDiary from '../images/projects/mydoing/diary.png';
import MoonlitTablesMenus from '../images/projects/moonlit_tables/moonlitTablesMenus.png';
import MoonlitTablesDetail from '../images/projects/moonlit_tables/moonlitTablesDetail.png';
import MoonlitTablesAdmin from '../images/projects/moonlit_tables/moonlitTablesAdmin.png';
import ScanItQrScan from '../images/projects/scanit/scanItQrScan.png';
import ScanItQrGenerate from '../images/projects/scanit/scanItQrGenerate.png';


import Breakthefast from '../images/projects/breakthefast.png';
import './CSS/project_card.css';

export default class Projects extends Component {
    constructor(props) {
      super(props)
      this.state = { 
        activeTab: 0,
        modalProject: null
      };
    }

    handleOpenModal = (projectName) => {
      this.setState({ modalProject: projectName });
    };
    
    handleCloseModal = () => {
      this.setState({ modalProject: null });
    };

    toggleCategories() {
      const vooksScreenshots = [
        { url: VooksLanding, caption: { title: 'Landing Page' }},
        { url: VooksRequest, caption: { title: 'Desire Book Request' }},
        { url: VooksCategories, caption: { title: 'Book Categories' }},
      ];
      const miracleScreenshots = [
        { url: MiracleAuth, caption: { title: 'User Login' }},
        { url: MiracleLanding, caption: { title: 'Products Page' }},
        { url: MiracleBlog, caption: { title: 'Blogs Page' }},
      ];
      const moonlitTablesScreenshots = [
        { url: MoonlitTablesMenus, caption: { title: 'Menus' }},
        { url: MoonlitTablesDetail, caption: { title: 'Menu detail' }},
        { url: MoonlitTablesAdmin, caption: { title: 'Admin panel' }},
      ];
      const mydoingScreenshots = [
        { url: Mydoing, caption: { title: 'Project Management' }},
        { url: MydoingProject, caption: { title: 'Todos List In Each Task' }},
        { url: MydoingDiary, caption: { title: 'Daily Diary' }},
      ];
      const scanitScreenshots = [
        { url: ScanItQrScan, caption: { title: 'QR Scan' }},
        { url: ScanItQrGenerate, caption: { title: 'QR Generate' }},
      ];
      
        if(this.state.activeTab === 0){
            // PHP
            return(
              <div className="projects-grid-zero">
                {/* Vooks */}
                <div className="project-one">
                  <Card shadow={5}>
                    <CardTitle 
                      className='card-title'
                      style={{ color: '#fff', height: '176px', background: `url(${Vooks}) center / cover`, cursor: 'pointer' }}
                      onClick={() => this.handleOpenModal('vooks')}
                    />
                    <CardText>
                        <p style={{ fontSize: '20px' }}><strong>Vooks</strong></p>
                        <p><strong>Laravel | MySQL | AJAX | Jquery | Bootstrap</strong></p>
                        Build an online free books library website. Users can download instantly or request missing books, while admins manage content and track community needs.
                    </CardText>
                    <CardActions border>
                        <a href="https://gitlab.com/phyopyae.za94/vooks" rel="noopener noreferrer" target="_blank">
                          <Button colored>Gitlab</Button>
                        </a>
                        <a href="http://vooks.liveblog365.com/" rel="noopener noreferrer" target="_blank">
                          <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                    </CardMenu>
                  </Card>

                  <ScreenshotModal
                    show={this.state.modalProject === 'vooks'}
                    onHide={this.handleCloseModal}
                    title="Vooks Screenshots"
                    images={vooksScreenshots}
                  />
                </div>

                {/* Miracle */}
                <div className="project-one">
                  <Card shadow={5}>
                    <CardTitle 
                      className='card-title'
                      style={{ color: '#fff', height: '176px', background: `url(${Miracle}) center / cover`, cursor: 'pointer' }}
                      onClick={() => this.handleOpenModal('miracle')}
                    />
                    <CardText>
                      <p style={{ fontSize: '20px' }}>
                        <strong>Miracle</strong>
                      </p>
                      <p><strong>Laravel | MySQL | AJAX | Jquery | Bootstrap</strong></p>
                      Build an ecommerce handmade website. Users can buy unique handmade items, read crafting blog posts, and admins can manage products, orders, and content seamlessly.
                    </CardText>
                    <CardActions border>
                      <a
                        href="https://github.com/notEqual99/miracle"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Button colored>Github</Button>
                      </a>
                      <a
                        href="http://miracle.unaux.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Button colored>Live Demo</Button>
                      </a>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}></CardMenu>
                  </Card>

                  <ScreenshotModal
                    show={this.state.modalProject === 'miracle'}
                    onHide={this.handleCloseModal}
                    title="Miracle Screenshots"
                    images={miracleScreenshots}
                  />
                </div>

                {/* Moonlit Tables */}
                <div className="project-one">
                  <Card shadow={5}>
                    <CardTitle className='card-title' style={{ color: '#fff', height: '176px', background: `url(${Breakthefast}) center / cover` }} onClick={() => this.handleOpenModal('moonlitTables')}></CardTitle>
                    <CardText>
                      <p style={{ fontSize: '20px' }}><strong>Breakthefast</strong></p>
                      <p><strong>Laravel | MySQL | AJAX | Jquery | Bootstrap</strong></p>
                      Build a food ordering system designed to simplify operations for my customer who sells meals in his company. Perfect for small-to-medium restaurants, cafes, or food trucks.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/notEqual99/breakthefast" rel="noopener noreferrer" target="_blank">
                          <Button colored>Github</Button>
                        </a>
                        <a href="http://moonlit-tables.unaux.com/" rel="noopener noreferrer" target="_blank">
                          <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                      {/* <IconButton name="share" /> */}
                    </CardMenu>
                  </Card>
                  <ScreenshotModal
                    show={this.state.modalProject === 'moonlitTables'}
                    onHide={this.handleCloseModal}
                    title="Miracle Screenshots"
                    images={moonlitTablesScreenshots}
                  />
                </div>
    
              </div>
            )
        }else if(this.state.activeTab === 1){
          // javascript
          return(
            <div className="projects-grid-zero">
            {/* Portfolio */}
              <div className="project-one">
                <Card shadow={5}>
                  <CardTitle className="card-title" style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}></CardTitle>
                  <CardText>
                    <p style={{ fontSize: '20px' }}><strong>Portfolio Website</strong></p>
                    <p><strong>React </strong></p>
                    Build a Portfolio website using React js.
                  </CardText>
                  <CardActions border>
                      <a href="https://github.com/PhyoPyae94/ppzweb" rel="noopener noreferrer" target="_blank">
                        <Button colored>Github</Button>
                      </a>
                      <a href="https://phyopyaezaw.netlify.app" rel="noopener noreferrer" target="_blank">
                        <Button colored>Live Demo</Button>
                      </a>
                  </CardActions>
                  <CardMenu style={{ color: '#fff' }}>
                  {/* <IconButton name="share" /> */}
                  </CardMenu>
                </Card>
              </div>
                
              {/* Mydoing */}
              <div className="project-one">
                <Card shadow={5}>
                  <CardTitle 
                    className='card-title'
                    style={{ color: '#fff', height: '176px', background: `url(${Mydoing}) center / cover`, cursor: 'pointer' }}
                    onClick={() => this.handleOpenModal('mydoing')}
                  />
                  <CardText>
                      <p style={{ fontSize: '20px' }}><strong>Mydoing</strong></p>
                      <p><strong>React | NodeJS | MongoDB | GraphQL </strong></p>
                      A powerful and minimal all-in-one personal productivity tool that helps you stay organized and focused. Whether you’re managing projects, daily diary, tracking expenses, or journaling your thoughts, this app has you covered.
                  </CardText>
                  <CardActions border>
                      <a href="https://gitlab.com/phyopyae.za94/vooks" rel="noopener noreferrer" target="_blank">
                        <Button colored>Gitlab</Button>
                      </a>
                      <a href="https://mydoing.netlify.app/" rel="noopener noreferrer" target="_blank">
                        <Button colored>Live Demo</Button>
                      </a>
                  </CardActions>
                  <CardMenu style={{ color: '#fff' }}>
                  </CardMenu>
                </Card>

                <ScreenshotModal
                  show={this.state.modalProject === 'mydoing'}
                  onHide={this.handleCloseModal}
                  title="Mydoing Screenshots"
                  images={mydoingScreenshots}
                />
              </div>

              {/* scanit */}
              <div className="project-one">
                <Card shadow={5}>
                  <CardTitle 
                    className='card-title'
                    style={{ color: '#fff', height: '176px', background: `url(${ScanItQrScan}) center / cover`, cursor: 'pointer' }}
                    onClick={() => this.handleOpenModal('scanit')}
                  />
                  <CardText>
                      <p style={{ fontSize: '20px' }}><strong>Scanit</strong></p>
                      <p><strong>Preact | Typescript | Docker | AntDesign </strong></p>
                      Fast, lightweight QR Code scanner and decoder built for the web.
                      Users can upload an image or scan a QR code directly, and the app instantly decodes the data, supporting formats like URLs, WiFi credentials, SMS messages, and contact information.
                  </CardText>
                  <CardActions border>
                      <a href="https://github.com/notEqual99/scanit/tree/main" rel="noopener noreferrer" target="_blank">
                        <Button colored>Github</Button>
                      </a>
                      <a href="https://scanit-5g0s.onrender.com/" rel="noopener noreferrer" target="_blank">
                        <Button colored>Live Demo</Button>
                      </a>
                  </CardActions>
                  <CardMenu style={{ color: '#fff' }}>
                  </CardMenu>
                </Card>

                <ScreenshotModal
                  show={this.state.modalProject === 'scanit'}
                  onHide={this.handleCloseModal}
                  title="Scanit Screenshots"
                  images={scanitScreenshots}
                />
              </div>
            </div>
          )
        }else if(this.state.activeTab === 2){
            // php?
            return(
                <div><h4>Currently not finished yet.</h4></div>
            )
            // others project
        }else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid-zero">
                {/* static */}
                    <div className="project-one" style={{miniWidth: '450', margin: 'auto'}}>
                    <Card shadow={5}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHVQRQGKwkNNAmuacy-mLBGHbeN_TlTPZbprci4bp99L3mvod'}}></CardTitle>
                        <CardText>
                          <p style={{ fontSize: '20px' }}><strong>Simple Responsive Website</strong></p>
                          <p><strong>HTML | CSS | JQUERY</strong></p>
                          Build a simplify and user friendly responsive website.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/PhyoPyae94/sbp" rel="noopener noreferrer" target="_blank">
                              <Button colored>Github</Button>
                            </a>
                            <a href="https://loso-responsive.netlify.app" rel="noopener noreferrer" target="_blank">
                              <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                        {/* <IconButton name="share" /> */}
                        </CardMenu>
                    </Card>
                    </div>
                </div>
            )
        }
    }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>PHP</Tab>
          <Tab>Javascript</Tab>
          <Tab>Elixir</Tab>
          <Tab>Others</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
