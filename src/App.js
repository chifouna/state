import React, { Component } from 'react';
import {Nav,Card} from 'react-bootstrap';
import './style.css'
import click from './click.gif'

class state extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Larouchi Mohamed Fares",
      bio: `My name is Mohamed Fares Larouchi 
      I am a full-strack Web Application Developer and Software Developer, I live in tunisia . 
      I have a baccalaureate degree with a major in economics and management from the Private Institute, Al-Amal, two headquarters.
      I am currently studying for a second year, 
      Majoring in language, literature and English civilization at 
      the Faculty of Human and Social Sciences in Tunis.
      My main focus and my drive for life is web development`,
      imgSrc: 'https://scontent.ftun5-1.fna.fbcdn.net/v/t1.6435-9/108002872_3406346176082069_2129954169158317761_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=gz86aKaHbrgAX-jrqHc&_nc_ht=scontent.ftun5-1.fna&oh=3076295ea525f708b959a2d91a9bd367&oe=60CEAAAD',
      profession:'Full-Stack Web Developer',
      showHide: false,
      date: new Date()
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent() {
    this.setState({ showHide: !this.state.showHide });
  }
  componentWillUnmount(){
    this.timeID = setInterval(() => this.tick(),2000);
  }
componentWillUnmount() {
  clearTimeout(this.timerID)
}
tick() {
  this.setState({
    date: new Date()
  });
}
render() {
  const {fullName,bio,imgSrc,profession,showHide,date} = this.state;

  return (
    <>
    <Card>
    <Card.Header>
      <Nav varient="pills" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#first">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#second" disabled>My Work</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    </Card>

    <div className='main'>

      <input type="image" src={click} alt='click' onClick={() => this.hideComponent()}></input>
      {showHide && <div className='profile'>
        <img className='img' src={imgSrc} alt='photo1'/>
        <h4>{fullName}</h4>
        <p className='par'>{bio}</p>
        <h5>{profession}</h5>
        <h6>It is {date.toLocaleTimeString()}</h6>


      </div>}
    </div>
    </>
  );
}
}
export default state;