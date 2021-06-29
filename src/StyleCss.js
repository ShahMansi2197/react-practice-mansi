import {createUseStyles} from 'react-jss';


export const styleCss = createUseStyles({
    AddToList :{
        display: 'flex',
        flexDirection : 'column',
          width: '30rem',
        margin: '5rem auto'
      },
       AddToListinput : {
        padding:' 0.5rem',
        fontSize: '1rem',
        margin: '0.3rem 0rem'
      },
      
     AddToListbtn : {
        padding: '0.5rem',
        cursor: 'pointer',
        backgroundColor: '#0b5468',
        fontweight: 700,
        color:'white',
        border: 'none'
      },
      List : {
        listStyle: 'none',
        display: 'flex',
        alignItems : 'center',
        width: '50rem',
        margin: '0rem auto',
        border: '0.1rem solid rgba(0, 0, 0, 0.233)',
        padding: '1rem',
        justifyContent: 'space-between',
      },

      Listheader : {
        display: 'flex',
        alignItems: 'center',
       //  flexDirection :'row-reverse'
      },
      Listheader1 : {
        color: 'rgb(37, 36, 36)',
      },
      Listimg : {
        width: '4rem',
        height: '4rem',
        borderRadius: '100%',
        marginRight: '0.5rem',
      },
      Listnote : {
        width: '30%',
        textAlign: 'left',
      }


});