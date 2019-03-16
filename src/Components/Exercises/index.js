    import React, {
        Fragment
    } from 'react'
    import { Grid,  Paper, Typography, List,Icon,IconButton} from '@material-ui/core'
    import ListItem from '@material-ui/core/ListItem';
    import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
    import Calendar from 'react-calendar'
    const styles = {
        Paper: {
            padding: 40,
            marginTop: 10,
            marginBottom: 10,
            height: 500,
            overflowY: 'auto',
                },
        Text: {
            color: "#ddc8c4",
            fontSize:"24px",
                }
        }

    export default ({
            exercises,
            category,
            onSelect,
            exercise: {
                id,
                title = "Welcome!",
                description = "Please select an exercise"
        },
            onDelete
}) =>

    <Grid container>
    <Grid item sm>
    <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                !category || category === group
                ? <Fragment key={group}>
        <Typography variant="headline" style = {{
                textTransform: 'uppercase',
                color: '#BA5A31',
                fontSize:'35px',
                marginLeft:'10%',
                }}>
            {group}
        </Typography>
                <List component = "ul" style={{
                    backgroundColor: '#24351A',
                    color: '#DDC8C4'
                    }}>

            {exercises.map(({ id , title, difficulty, image }) =>
                <ListItem  key={id}   button  onClick={() => onSelect(id)}>
                    <ListItemText disableTypography primary={<Typography  style={styles.Text}>{title}</Typography>} secondary={difficulty}/>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(id)}>

                        </IconButton>

                    </ListItemSecondaryAction>
                </ListItem>
                )}
        </List>
    </Fragment>
    : null

    )}
    </Paper>
    </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant='display3'>
                 {title}
                </Typography >
                <Typography variant="subheading"
                    style={{ marginTop: 20, fontSize: 20, color: '#FF6700'}}>
                {description}
                </Typography>
                <Calendar/>
            </Paper>
        </Grid>
</Grid>