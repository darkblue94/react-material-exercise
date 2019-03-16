import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateDialog from '../Exercises/Dialogs/Create'


const styles = {

    color: '#000000',
    backgroundColor: '#ffffffff',





};
export default ({muscles , difficulty, onExerciseCreate}) =>

 <AppBar position = "static" >
         <Toolbar style={styles}>
         <Typography variant = "headline" color="inherit" style={{flex:1}}> Powered By GOMEZ </Typography>
            <CreateDialog
                difficulty={difficulty}
                muscles={muscles}
                onCreate={onExerciseCreate}/>
        </Toolbar>
    </AppBar>