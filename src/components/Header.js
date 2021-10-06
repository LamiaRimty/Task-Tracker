import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
     const onClick=()=>{
         console.log('Click')
     }


    return (
        <header className='header'>
         <h1>{title}</h1>
         <Button color='green' text='Hello' onClick={onClick} />

        </header>
     
    )
}

Header.defaultProps={
    title:'Task Tracker',
}

Header.propTypes={  //object
    title: PropTypes.string.isRequired,
}

//<Header>
//<h1 style={headingstyle} >{title}</h1>
//</Header>
// const headingStyle={
//     color: 'red' , 
//     backgroundColor: 'black',
//  }


export default Header
