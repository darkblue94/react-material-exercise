import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {

  color: '#000000',
  width: "100%",
  borderRadius:"20xp",




};



export default ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0

  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : muscles[index - 1])

  return <Paper>
    <Tabs style={styles}
      value={index}
      onChange={onIndexSelect}

      centered
    >
      <Tab label="All"
        style={styles}/>
      {muscles.map(group =>
        <Tab key={group} label={group}  style={styles} />
      )}
    </Tabs>
  </Paper>
}