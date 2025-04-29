import { Row, Col, Card } from 'react-bootstrap';

const Skill = () => {
    return (
        <div>
            <Row className="mt-3 p-3 pb-0">
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Card className="profile-ctn">Skills Set</Card>
                    <div className='table-responsive'>
                        <div className='mt-2 mb-3'>
                            <strong>◎ Support not required, ◯ Support required for high difficulty level, △ Support required, ⬆︎ Learning, × Not available</strong>
                        </div>
                        <table className="table table-sm skill-table text-nowrap">
                            <thead className="thead-light">
                                <tr>
                                    <th colSpan="3">Type</th>
                                    <th colSpan="1">Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={5}>
                                        <span>OS</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Linux</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Windows</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td rowSpan={5}>
                                        <span>Databases</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> MySQL</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> PostgreSQL</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> MongoDB (⬆︎)</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            {/* Language */}
                            <tbody>
                                <tr>
                                    <td rowSpan={7}>
                                        <span>Languages</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> HTML | CSS</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> PHP</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> Javascript</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> GraphQL</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                {/* <tr>
                                    <td><span>◯</span> </td>
                                    <td></td>
                                    <td></td>
                                </tr> */}
                                <tr>
                                    <td><span>△ </span> Typescript(⬆︎)</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>⬆︎</span> Elixir</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                            </tbody>
                            {/* Framework */}
                            <tbody>
                                <tr>
                                    <td rowSpan={9}>
                                        <span>Frameworks</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Laravel</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> Zend</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> Symfony</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> Next</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> Node | Express (⬆︎)</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Bootstrap</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> Tailwind</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            {/* Library */}
                            <tbody>
                                <tr>
                                    <td rowSpan={5}>
                                        <span>Libraries</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Jquery/ Ajax</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> React (⬆︎)</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Axios</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            {/* project management */}
                            <tbody>
                                <tr>
                                    <td rowSpan={5}>
                                        <span>Project<br/> management</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Jira</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Trello</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            {/* Communication */}
                            <tbody>
                                <tr>
                                    <td rowSpan={5}>
                                        <span>Communication</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Slack</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Bitrix24</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Microsoft Team</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            {/* other tools */}
                            <tbody>
                                <tr>
                                    <td rowSpan={10}>
                                        <span>Tools</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Draw.io</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Github</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Bitbucket</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Gitlab</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Dbeaver</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> MySQL Workbench</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Filezilla</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◎</span> Postman</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                                <tr>
                                    <td><span>◯</span> Docker</td>
                                    <td></td>
                                    <td><span></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </div>
    );
}

export default Skill;