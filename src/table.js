import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    // width: 500,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
});

export default function DataTable(props) {
  const classes = useStyles();
  const { data } = props;
  let tableHeaderTitles = [];

  const getTableBody = (data) =>
    data.map((row) => {
      return (
        <TableRow key={row.name}>
          {Object.keys(row).map((key) => {
            // if not true, add to array
            if (!tableHeaderTitles.includes(key)) tableHeaderTitles.push(key);
            return <TableCell key={key}>{row[key]}</TableCell>;
          })}
        </TableRow>
      );
    });

  const getTableHeader = () =>
    tableHeaderTitles.map((title) => (
      <TableCell className={classes.capitalize} key={title}>
        {title}
      </TableCell>
    ));

  const tableBodyContent = getTableBody(data);
  const tableHeaderTitleContent = getTableHeader();

  return (
    <Table className={classes.table} aria-label='data table'>
      <TableHead>
        <TableRow>{tableHeaderTitleContent}</TableRow>
      </TableHead>
      <TableBody>{tableBodyContent}</TableBody>
    </Table>
  );
}
