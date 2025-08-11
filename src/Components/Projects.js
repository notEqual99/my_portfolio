import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';
import ScreenshotModal from './ScreenshotModal';
import projectsData from '../data/project-data.json';
import './CSS/project_card.css';

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
import QuickchatRoomNumber from '../images/projects/quickchat/roomNumber.png';
import QuickchatUsername from '../images/projects/quickchat/username.png';
import QuickchatChatRoom from '../images/projects/quickchat/chatRoom.png';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0,
      modalProject: null
    };

    this.imageMap = {
      'vooks.png': Vooks,
      'vooks/landing.png': VooksLanding,
      'vooks/book_request.png': VooksRequest,
      'vooks/categories.png': VooksCategories,
      'miracle.png': Miracle,
      'miracle/auth.png': MiracleAuth,
      'miracle/landing.png': MiracleLanding,
      'miracle/blog.png': MiracleBlog,
      'mydoing/home.png': Mydoing,
      'mydoing/project.png': MydoingProject,
      'mydoing/diary.png': MydoingDiary,
      'moonlit_tables/moonlitTablesMenus.png': MoonlitTablesMenus,
      'moonlit_tables/moonlitTablesDetail.png': MoonlitTablesDetail,
      'moonlit_tables/moonlitTablesAdmin.png': MoonlitTablesAdmin,
      'scanit/scanItQrScan.png': ScanItQrScan,
      'scanit/scanItQrGenerate.png': ScanItQrGenerate,
      'breakthefast.png': Breakthefast,
      'quickchat/roomNumber.png': QuickchatRoomNumber,
      'quickchat/username.png': QuickchatUsername,
      'quickchat/chatRoom.png': QuickchatChatRoom
    };
  }

  handleOpenModal = (projectId) => {
    this.setState({ modalProject: projectId });
  };
  
  handleCloseModal = () => {
    this.setState({ modalProject: null });
  };

  getImageUrl = (imagePath) => {
    return this.imageMap[imagePath] || imagePath;
  };

  getProjectScreenshots = (project) => {
    return project.screenshots.map(screenshot => ({
      url: this.getImageUrl(screenshot.url),
      caption: screenshot.caption
    }));
  };

  renderProjectCard = (project) => {
    const screenshots = this.getProjectScreenshots(project);
    const hasScreenshots = screenshots.length > 0;

    return (
      <div key={project.id} className="project-one">
        <Card shadow={5}>
          <CardTitle 
            className='card-title'
            style={{ 
              color: '#fff', 
              height: '176px', 
              background: `url(${this.getImageUrl(project.image)}) center / cover`,
              cursor: hasScreenshots ? 'pointer' : 'default'
            }}
            onClick={hasScreenshots ? () => this.handleOpenModal(project.id) : undefined}
          />
          <CardText>
            <p style={{ fontSize: '20px' }}>
              <strong>{project.name}</strong>
            </p>
            <p><strong>{project.technologies}</strong></p>
            {project.description}
          </CardText>
          <CardActions border>
            <a href={project.links.source} rel="noopener noreferrer" target="_blank">
              <Button colored>
                {project.links.source.includes('github') ? 'Github' : 'Gitlab'}
              </Button>
            </a>
            <a href={project.links.demo} rel="noopener noreferrer" target="_blank">
              <Button colored>Live Demo</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
          </CardMenu>
        </Card>

        {hasScreenshots && (
          <ScreenshotModal
            show={this.state.modalProject === project.id}
            onHide={this.handleCloseModal}
            title={`${project.name} Screenshots`}
            images={screenshots}
          />
        )}
      </div>
    );
  };

  renderCategoryProjects = () => {
    const categories = ['php', 'javascript', 'elixir', 'others'];
    const currentCategory = categories[this.state.activeTab];
    const projects = projectsData.categories[currentCategory];

    if (!projects || projects.length === 0) {
      return <div><h4>Currently not finished yet.</h4></div>;
    }

    return (
      <div className="projects-grid-zero">
        {projects.map(project => this.renderProjectCard(project))}
      </div>
    );
  };

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
            <div className="content">{this.renderCategoryProjects()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}