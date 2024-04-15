import React, { useState } from 'react';
import { Row, Col, Collapse } from 'react-bootstrap';

const JobCareer = () => {
    const [openCollapse, setOpenCollapse] = useState(0);

    const toggleCollapse = (index) => {
        setOpenCollapse(prevIndex => prevIndex === index ? 0 : index);
    };

    const caretUp = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
    </svg>;


    const caretDown = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
    </svg>

    return (
        <div>
            <Row className="mt-3 p-3 pb-0">
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-1" style={{ borderBottom: '3px solid #9e9e9e' }}>
                        <h5 className="m-0">Jan 2023 - April 2024 / <a href="https://www.mysoltech.com/" className="company-name">Mysol Co.,Ltd</a> ( Full Time )</h5>
                    </div>
                    <div className='card-header' onClick={() => toggleCollapse(5)} aria-controls="multiCollapseExample1" aria-expanded={openCollapse === 1}>
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <span>April 2023 to April 2024 (1 year) / Sales system support to facilitate the digital transformation of sales processes.</span>
                            <span>{openCollapse === 5 ? caretUp : caretDown}</span>
                        </div>
                    </div>
                    <Row>
                        <Col>
                            <Collapse in={openCollapse === 5}>
                                <div className="col-12 row career-detail">
                                    <div className="card-body col-6">
                                        [Summary]<br/>
                                        - Implemented new features.<br/>
                                        - Defect investigation and fixed both backend and frontend.<br/>
                                        - Tested by given test case design.<br/>
                                        - Support junior members.<br/>
                                        - Develope php batch script<br/><br/>
                                        [Info]<br/>
                                        - <a className="text-danger" href="https://sales-crowd.com/">https://sales-crowd.com/</a><br/>
                                        - <a className="text-danger" href="https://sales-crowd.jp/">https://sales-crowd.jp/</a><br/><br/>
                                        [Source/project management]<br/>
                                        - GitHub<br/><br/>
                                        [Communication tool]<br/>
                                        - Slack
                                    </div>
                                    <div className="card-body col-3">
                                        [OS]<br/>
                                        - Linux<br/><br/>
                                        [DB]<br/>
                                        - MySQL<br/><br/>
                                        [Language]<br/>
                                        - PHP, Javascript<br/><br/>
                                        [Framework/Library]<br/>
                                        - Zend, Smarty, Angular<br/><br/>
                                        [Editor/IDE]<br/>
                                        VSCode<br/><br/>
                                        [Tool]<br/>
                                        - Docker, Dbeaver<br/><br/>
                                    </div>
                                    <div className="card-body col-3">
                                        [Role]<br/>
                                        Senior<br/><br/>
                                        [Responsible process]<br/>
                                        Implementation, testing, code review, bug fixed<br/><br/>
                                        
                                    </div>
                                </div>
                            </Collapse>
                        </Col>
                    </Row>
                    <div className='card-header mt-3 w-100' onClick={() => toggleCollapse(4)} aria-controls="multiCollapseExample1" aria-expanded={openCollapse === 1}>
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <span>April 2023 to April 2023 ( 1 year ) / System for communication and collaboration platform designed for teams and businesses.</span>
                            <span>{openCollapse === 4 ? caretUp : caretDown}</span>
                        </div>
                    </div>
                    <Row>
                        <Col>
                            <Collapse in={openCollapse === 4}>
                                <div className="mt-3 col-12 row career-detail">
                                    <div className="card-body col-6">
                                        [Summary]<br/>
                                        - Fixed bugs in chatting system.<br/>
                                        - Defect investigation and fixed both backend and frontend.<br/>
                                        - Tested by given test case design.<br/>
                                        - Support junior members.<br/><br/>
                                        [Info]<br/>
                                        - <a className="text-danger" href="https://mem-bers.jp/">https://mem-bers.jp/</a><br/><br/>
                                        [Source/project management]<br/>
                                        - GitHub<br/><br/>
                                        [Communication tool]<br/>
                                        - Slack
                                    </div>
                                    <div className="card-body col-3">
                                        [OS]<br/>
                                        - Linux<br/><br/>
                                        [DB]<br/>
                                        - MySQL<br/><br/>
                                        [Language]<br/>
                                        - PHP, Javascript, Typescript<br/>
                                        - HTML, CSS<br/><br/>
                                        [Framework/Library]<br/>
                                        - Laravel, React,<br/>
                                        - Jquery, Ajax<br/><br/>
                                        [Editor/IDE]<br/>
                                        - VSCode<br/><br/>
                                        [Tool]<br/>
                                        - Docker, Sendgrid, Dbeaver<br/><br/>
                                    </div>
                                    <div className="card-body col-3">
                                        [Role]<br/>
                                        - Senior<br/><br/>
                                        [Responsible process]<br/>
                                        - Investigate bugs and fixed,<br/>
                                        - Testing, Test case<br/>
                                        - Member support<br/><br/>
                                        
                                    </div>
                                </div>
                            </Collapse>
                        </Col>
                    </Row>
                </Col>
                <Col sm={1}></Col>
            </Row>


			<Row className="mt-3 p-3 pb-0">
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-1" style={{ borderBottom: '3px solid #9e9e9e' }}>
                        <h5 className="m-0">Jan 2023 - April 2024 / Freelance ( Remote )</h5>
                    </div>
                    <div className='card-header' onClick={() => toggleCollapse(3)} aria-controls="multiCollapseExample1" aria-expanded={openCollapse === 1}>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <span>April 2023 to April 2024 ( 1 year ) / Hospital management system. </span>
                            <span>{openCollapse === 3 ? caretUp : caretDown}</span>
                        </div>
                    </div>
					<Row>
						{/* <Col> */}
							<Collapse in={openCollapse === 3}>
								<div className="col-12 row career-detail">
									<div className="card-body col-6">
										[Summary]<br/>
										- Made system for hospital booking process between doctor and patient including diagnosis, prescription and managing medical items which are use in hospital.<br/>
										- Database design<br/><br/>
										[Info]<br/>
                                        - <a href="http://hekacare.com/" className="text-danger">http://hekacare.com/</a><br/><br/>
										[Source/project management]<br/>
										- GitHub<br/><br/>
										[Communication tool]<br/>
										- Skype
									</div>
									<div className="card-body col-3">
										[OS]<br/>
										- Linux ( manjaro )<br/><br/>
										[DB]<br/>
										- MySQL<br/><br/>
										[Language]<br/>
										- PHP, Javascript<br/><br/>
										[Framework/Library]<br/>
										- Laravel, Jquery, Ajax<br/><br/>
										[Editor/IDE]<br/>
										- VSCode<br/><br/>
										[Tool]<br/>
										- Dbeaver<br/><br/>
									</div>
									<div className="card-body col-3">
										[Role]<br/>
										- Freelance developer<br/><br/>
										[Responsible process]<br/>
										Implementation, Testing,<br/>
                                        Database Design, Bug fixed<br/><br/>
									</div>
								</div>
							</Collapse>
						{/* </Col> */}
					</Row>

                    <div className='card-header mt-3' onClick={() => toggleCollapse(2)} aria-controls="multiCollapseExample1" aria-expanded={openCollapse === 1}>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <span>April 2022 to Aug 2022 ( 5 months ) / NFTs selling website.</span>
                            <span>{openCollapse === 2 ? caretUp : caretDown}</span>
                        </div>
                    </div>
                    <Row>
                        <Col>
                            <Collapse in={openCollapse === 2}>
                                <div className="mt-3 col-12 row career-detail">
                                    <div className="card-body col-6">
                                        [Summary]<br/>
                                        - Implementation both client side and server side.<br/>
                                        - Database design<br/>
                                        - Tested NFTs trading with ethereum on blockchain.<br/>
                                        - API designed and developed<br/>
                                        - Worked with RPC.<br/>
                                        - Discuss and negotiate with smarty contract developer.<br/><br/>

                                        [Source/project management]<br/>
                                        - AWS code commit<br/><br/>
                                        [Communication tool]<br/>
                                        - Google meet, Telegram
                                    </div>
                                    <div className="card-body col-3">
                                        [OS]<br/>
                                        - Linux ( manjaro )<br/><br/>
                                        [DB]<br/>
                                        - MySQL<br/><br/>
                                        [Language]<br/>
                                        - PHP, Javascript<br/>
                                        - HTML, CSS, Solidity<br/><br/>
                                        [Framework/Library]<br/>
                                        - Laravel, React,<br/><br/>
                                        [Editor/IDE]<br/>
                                        - VSCode<br/><br/>
                                        [Tool]<br/>
                                        - Dbeaver, Metamask<br/>
                                        - Rinkeby<br/><br/>
                                    </div>
                                    <div className="card-body col-3">
                                        [Role]<br/>
                                        - Freelance<br/><br/>
                                        [Responsible process]<br/>
                                        - Implementation,<br/>
                                        - Testing,<br/>
                                        - Sending ethereum and NFTs by batch and individual.<br/><br/>
                                    </div>
                                </div>
                            </Collapse>
                        </Col>
                    </Row>
                </Col>
                <Col sm={1}></Col>
            </Row>

            <Row className="mt-3 p-3 pb-0">
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-1" style={{ borderBottom: '3px solid #9e9e9e' }}>
                        <h5 className="m-0">Aug 2019 - July 2021 / <a href="https://www.honestrades.com/" className="company-name" >HonesTrades Myanmar Co.,Ltd</a> ( Full time )</h5>
                        <i className={`fa ${openCollapse === 1 ? 'fa-toggle-up' : 'fa-toggle-down'}`} aria-hidden="true"></i>
                    </div>
                    <div className='card-header' onClick={() => toggleCollapse(1)} aria-controls="multiCollapseExample1" aria-expanded={openCollapse === 1}>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <span>Aug 2019 to July 2021 ( 2 years ) / Online trading system for agriculture products.</span>
                            <span>{openCollapse === 2 ? caretUp : caretDown}</span>
                        </div>
                    </div>
					<Row>
						{/* <Col> */}
							<Collapse in={openCollapse === 1}>
								<div className="col-12 row career-detail">
									<div className="card-body col-6">
										[Summary]<br/>
										- Businesses flow chart.<br/>
                                        - Made admin dashboad<br/>
                                        - API design and develop.<br/>
										- Database design<br/><br/>
										[Info]<br/>
                                        - <a href="https://www.honestrades.com/" className="text-danger">https://www.honestrades.com/</a><br/><br/>
										[Source/project management]<br/>
										- GitHub<br/><br/>
										[Communication tool]<br/>
										- Slack, Bitrix24
									</div>
									<div className="card-body col-3">
										[OS]<br/>
										- Linux( Ubuntu )<br/><br/>
										[DB]<br/>
										- MySQL<br/><br/>
										[Language]<br/>
										- PHP, Javascript<br/><br/>
										[Framework/Library]<br/>
										- Laravel, Jquery, Ajax<br/><br/>
										[Editor/IDE]<br/>
										- VSCode<br/><br/>
										[Tool]<br/>
										- Postman<br/><br/>
									</div>
									<div className="card-body col-3">
										[Role]<br/>
										- Junior backend developer<br/><br/>
										[Responsible process]<br/>
										Designed and dveloped API.<br/>
                                        Database design, Bugs fixed<br/>
                                        <br/><br/>
									</div>
								</div>
							</Collapse>
						{/* </Col> */}
					</Row>

                </Col>
                <Col sm={1}></Col>
            </Row>
        </div>

    );
}

export default JobCareer;