import React from "react";
import ReactDOM from "react-dom";

import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SvgMore from "@material-ui/icons/ExpandMore";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false
    };

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand = () => {
    this.setState({
      expand: !this.state.expand
    });
  };

  render() {
    return (
      <div className="App">
        <Paper>
          <Table>

            <TableHead>
              <TableRow>
                <TableCell>Warehouse</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Manager</TableCell>
                <TableCell>Expand</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>Bakersfield</TableCell>
                <TableCell>2</TableCell>
                <TableCell>Steven</TableCell>
                <TableCell>
                  <IconButton onClick={this.handleExpand}>
                    <SvgMore />
                  </IconButton>
                </TableCell>

              </TableRow>
              {this.state.expand ? (
                <TableRow>
                  <TableCell colSpan="5">
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product</TableCell>
                          <TableCell>Current Capacity</TableCell>
                          <TableCell>Max Capacity</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>iPhone 14</TableCell>
                          <TableCell>20</TableCell>
                          <TableCell>100</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
