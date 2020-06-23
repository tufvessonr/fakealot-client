import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import TableRow from '@material-ui/core/TableRow';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTableRow = styled(TableRow)`
  &.MuiTableRow-root {
    th {
      background-color: ${(props): string => props.theme.palette.table.fill};

      font-weight: 800;
      font-size: 0.75em;

      text-transform: uppercase;
    }

    td {
      font-size: 0.7em;
    }
  }

  &:nth-child(even) {
    background-color: ${(props): string => props.theme.palette.table.fill};
  }

  &.data:hover {
    background-color: ${(props): string => props.theme.palette.table.hover};
  }

  &:nth-child(n + 1) {
    height: 4.5em;
  }
`;

const useStyles = makeStyles({
  table: {
    width: '100%',
    fontSize: 'inherit',
  },
});

type Alignment = 'left' | 'center' | 'right';
export type Cell = {
  value: string;
  alignment: Alignment;
};

export interface ICustomTableRowProps {
  cells: Cell[];
  onClick?: () => void;
}
interface ICustomTableProps {
  table: string;
  headers: ICustomTableRowProps;
  rows: ICustomTableRowProps[];
}
export const CustomTable: React.FC<ICustomTableProps> = ({
  table,
  headers,
  rows,
}): JSX.Element => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void => {
    event; // silencing eslint
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <StyledTableRow className="header">
            {headers.cells.reduce((cells, cell, index) => {
              const { alignment, value } = cell;
              cells.push(
                <TableCell key={`${table}_header_${index}`} align={alignment}>
                  {value}
                </TableCell>
              );
              return cells;
            }, [] as JSX.Element[])}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <StyledTableRow key={`${table}_row_${index}`} className="data">
              {row.cells.reduce((cells, cell, index) => {
                const { alignment, value } = cell;
                cells.push(
                  <TableCell key={`${table}_cell_${index}`} align={alignment}>
                    {value}
                  </TableCell>
                );
                return cells;
              }, [] as JSX.Element[])}
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 63 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
