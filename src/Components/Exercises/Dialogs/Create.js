import React, { Component ,Fragment } from 'react'

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Add } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
    withStyles
} from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const styles = theme => ({
    FormControl:{
        width: 500,
    }
})



export default withStyles(styles)( class extends Component  {

    state = {
        open: false,
        exercise:{
            title: '',
            description: '',
            muscles: '',
            difficulty:''
        }

    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                    [name]: value
         }
        })
    }

    handleSubmit = () => {
        //TODO:Validate

        const {exercise} =this.state

        this.props.onCreate({
            ...exercise,
            id:exercise.title.toLocaleLowerCase().replace(/ /g,'-')
        })

        this.setState({
            open: false ,
            exercise: {
                title:'',
                description: '',
                muscles:''
            }
        })
    }


    render() {

        const { open , exercise:{title, description,muscles, difficulty} } = this.state ,
            {classes, muscles: categories , difficulty: choice } = this.props
        return <Fragment>
            <Button variant="fab" onClick={this.handleToggle}  >
            <Add/>
            </Button>

    <Dialog
          open={open}
          onClose={this.handleToggle}

        >
          <DialogTitle id="form-dialog-title">Create New Excersie</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Add Some Exercise.
            </DialogContentText>
                    <form>
                        <TextField
                        label = "Title"

                        value = {
                            title
                        }
                        onChange = {
                            this.handleChange('title')
                        }
                            margin="normal"
                            className={classes.FormControl}
                        />
                        <br/>
                        <FormControl
                         className={classes.FormControl}>
                            <InputLabel htmlFor="muscles">
                            Muscles

                            </InputLabel>
                                <Select
                                value={muscles}
                                onChange={this.handleChange ('muscles')}

                                >
                                {categories.map(category =>
                                <MenuItem value={category}>
                                {category}
                                    </MenuItem>
                                    )}


                                </Select>
                        </FormControl>
                        <FormControl
                         className={classes.FormControl}>
                            <InputLabel htmlFor="difficulty">
                            Difficulty

                            </InputLabel>
                                <Select
                                value={difficulty}
                                onChange = {
                                    this.handleChange('difficulty')
                                }

                                >
                                <MenuItem value="beginner">
                                    Beginner
                                </MenuItem>
                                <MenuItem value="intermediate">
                                    Intermediate
                                </MenuItem>
                                <MenuItem value="advanced">
                                    Advanced
                                </MenuItem>


                                </Select>
                        </FormControl>
                        <br/>
                        <TextField
                        label = "Description"
                        multiline
                        rows="3"
                        value = {
                            description
                        }
                        onChange = {
                            this.handleChange('description')
                        }
                            margin="normal"
                            className={classes.FormControl}
                        />




                    </form>
            </DialogContent>
        <DialogActions>

                    <Button
                        style={
                            {
                                textTransform: 'capitalize',
                                color: '#FF6700',
                                fontSize: '12px',


                            }}
                        variant="raised"
                    onClick={this.handleSubmit}>
                 Create
            </Button>
        </DialogActions>
    </Dialog>
</Fragment>

    }
})



