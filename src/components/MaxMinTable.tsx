import React from 'react';
import { useAgroData } from '../hooks/useAgroData';
import { Table } from '@mantine/core';
import { createStyles, MantineTheme } from '@mantine/styles'

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
 * MaxMinTable component to display maximum and minimum production crops per year.
 */
const MaxMinTable = () => {
  const { getMaxMinProductionData } = useAgroData();
  const data = getMaxMinProductionData(); // Fetching data for max and min crops
  const { classes } = useStyles();

  // Creating table rows
  const rows = data.map((item, index) => (
    <tr key={index} className={classes.row}>
      <td className={classes.cell}>{item.year}</td>
      <td className={classes.cell}>{item.maxCrop}</td>
      <td className={classes.cell}>{item.minCrop}</td>
    </tr>
  ));

  return (
    <div style={{ 'margin': '20px 20px 50px 20px' }}>
      <h2 style={{ "textAlign": "left" }}>Crops with Maximum and Minimum Production Each Year</h2>
      <Table className={classes.noBorder} striped highlightOnHover>
        <thead className={classes.header}>
          <tr>
            <th className={classes.cell}>Year</th>
            <th className={classes.cell}>Crop with Maximum Production in that Year</th>
            <th className={classes.cell}>Crop with Minimum Production in that Year</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default MaxMinTable;
