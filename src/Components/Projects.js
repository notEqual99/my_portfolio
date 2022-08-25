import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';


import './CSS/project_card.css';


export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            // laravel
            return(
              <div className="projects-grid-zero">
                <div className="project-one">
                  <Card shadow={5}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5wIiElencE4D-Cv1f3YqouHUFVmmrNzikLVk9ADs244_WBzomw) center / cover'}}>Miracle</CardTitle>
                    <CardText>
                        Build a ecommerce handmade website.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/notEqual99/miracle" rel="noopener noreferrer" target="_blank">
                          <Button colored>Github</Button>
                        </a>
                        <a href="http://miracle.ezyro.com/" rel="noopener noreferrer" target="_blank">
                          <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                      {/* <IconButton name="share" /> */}
                    </CardMenu>
                  </Card>
                </div>
    
              {/* project 2 */}
                <div className="project-one">
                  <Card shadow={5}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5wIiElencE4D-Cv1f3YqouHUFVmmrNzikLVk9ADs244_WBzomw) center / cover'}}>Vooks</CardTitle>
                    <CardText>
                        Build a online books library with Laravel.
                    </CardText>
                    <CardActions border>
                        <a href="https://gitlab.com/phyopyae.za94/vooks" rel="noopener noreferrer" target="_blank">
                          <Button colored>Gitlab</Button>
                        </a>
                        <a href="http://vooks.ezyro.com/" rel="noopener noreferrer" target="_blank">
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
        }else if(this.state.activeTab === 1){
            // react
            return(
                <div className="projects-grid-zero">
                {/* project 1 */}
                    <div className="project-one">
                    <Card shadow={5}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Portfolio Website</CardTitle>
                        <CardText>
                            Building Portfolio Website using ReactJs.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/PhyoPyae94/ppzweb" rel="noopener noreferrer" target="_blank">
                              <Button colored>Github</Button>
                            </a>
                            <a href="https://phyopyaezaw.netlify.com" rel="noopener noreferrer" target="_blank">
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
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHVQRQGKwkNNAmuacy-mLBGHbeN_TlTPZbprci4bp99L3mvod'}}>Simple Responsive Website</CardTitle>
                        <CardText>
                            Building Simple responsive website with html, css, jquery and bootstrap.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/PhyoPyae94/sbp" rel="noopener noreferrer" target="_blank">
                              <Button colored>Github</Button>
                            </a>
                            <a href="https://loso-responsive.netlify.com" rel="noopener noreferrer" target="_blank">
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
                <Tab>Laravel</Tab>
                <Tab>React</Tab>
                <Tab>PHP</Tab>
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
