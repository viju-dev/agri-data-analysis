import React from 'react';
import { useAgroData } from '../hooks/useAgroData';
import { Table } from '@mantine/core';
import { createStyles, MantineTheme } from '@mantine/styles';

// Creating styles using Mantine's theming system
const useStyles = createStyles((theme: MantineTheme) => ({
  header: {
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
  },
  cell: {
    padding: theme.spacing.md,
    textAlign: 'left',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.colors.gray[0],
    },
    '&:hover': {
      backgroundColor: theme.colors.gray[2],
    },
  },
  noBorder: {
    borderCollapse: 'collapse',
    // margin: '20px'
  },
}));

/**
 * AverageTable component to display average yield and cultivation area per crop.
 */
const AverageTable = () => {
  const { getAverageCropData } = useAgroData();
  const data = getAverageCropData();  // Fetching data for average yield and area
  const { classes } = useStyles();

  // Creating table rows
  const rows = data.map((item, index) => (
    <tr key={index} className={classes.row}>
      <td className={classes.cell}>{item.cropName}</td>
      <td className={classes.cell}>{item.avgYield}</td>
      <td className={classes.cell}>{item.avgArea}</td>
    </tr>
  ));

  return (
    <div style={{ 'margin': '20px 20px 50px 20px' }}>
      <h2 style={{'textAlign':'left'}}>Average Yield and Cultivation Area (1950-2020)</h2>
      <Table className={classes.noBorder} striped highlightOnHover>
        <thead className={classes.header}>
          <tr>
            <th className={classes.cell}>Crop</th>
            <th className={classes.cell}>Average Yield (1950-2020)</th>
            <th className={classes.cell}>Average Cultivation Area (1950-2020)</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default AverageTable;
