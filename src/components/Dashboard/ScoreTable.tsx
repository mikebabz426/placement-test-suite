import * as React from "react"
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core"

const ScoreTable = ({ scores }) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Test Type</StyledTableCell>
            <StyledTableCell>Level</StyledTableCell>
            <StyledTableCell align="right">Score (%)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map(score => (
            <StyledTableRow key={score.id}>
              <StyledTableCell style={{ fontWeight: 600 }}>
                {score.firstName}
              </StyledTableCell>
              <StyledTableCell style={{ fontWeight: 600 }}>
                {score.lastName}
              </StyledTableCell>
              <StyledTableCell className={classes.cell}>
                {score.testType}
              </StyledTableCell>
              <StyledTableCell className={classes.cell}>
                {score.level}
              </StyledTableCell>
              <StyledTableCell style={{ fontWeight: "bold" }} align="right">
                {score.score}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

//Custom Styling

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow)

const useStyles = makeStyles(theme => ({
  container: {
    margin: "3rem",
    maxWidth: 600,
    minWidth: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    borderRadius: "10px",
    maxWidth: 600,
    minWidth: 350,
  },
  cell: {
    fontStyle: "italic",
  },
}))

export default ScoreTable
